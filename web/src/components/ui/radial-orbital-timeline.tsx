"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link as LinkIcon, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
  className?: string;
}

export default function RadialOrbitalTimeline({
  timelineData,
  className,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState: Record<number, boolean> = {};
      Object.keys(prev).forEach((key) => {
        newState[parseInt(key)] = parseInt(key) === id ? !prev[id] : false;
      });
      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);
        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);
        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }
      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: ReturnType<typeof setInterval> | undefined;
    if (autoRotate) {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => Number(((prev + 0.25) % 360).toFixed(3)));
      }, 50);
    }
    return () => {
      if (rotationTimer) clearInterval(rotationTimer);
    };
  }, [autoRotate]);

  const centerViewOnNode = (nodeId: number) => {
    if (!nodeRefs.current[nodeId]) return;
    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;
    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 180;
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);
    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.4, Math.min(1, 0.45 + 0.55 * ((1 + Math.sin(radian)) / 2)));
    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    return getRelatedItems(activeNodeId).includes(itemId);
  };

  const getStatusVariant = (status: TimelineItem["status"]) => {
    switch (status) {
      case "completed":
        return "default" as const;
      case "in-progress":
        return "accent" as const;
      case "pending":
        return "outline" as const;
      default:
        return "secondary" as const;
    }
  };

  return (
    <div
      ref={containerRef}
      onClick={handleContainerClick}
      className={cn(
        "relative w-full flex items-center justify-center overflow-hidden rounded-md border border-[color:var(--border)] bg-[color:var(--bg)]",
        "min-h-[640px]",
        className
      )}
    >
      {/* Subtle grid backdrop */}
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-60" aria-hidden />

      <div
        ref={orbitRef}
        className="relative h-full w-full flex items-center justify-center"
        style={{ perspective: "1000px" }}
      >
        {/* Central core */}
        <div
          className="absolute z-10 flex h-16 w-16 items-center justify-center rounded-full"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, color-mix(in srgb, var(--accent) 80%, white), var(--accent))",
            boxShadow: "0 0 40px var(--accent-glow), inset 0 0 20px rgba(255,255,255,0.15)",
          }}
        >
          <span
            className="absolute h-20 w-20 rounded-full border border-[color:var(--accent)]/40 animate-ping opacity-60"
            aria-hidden
          />
          <span
            className="absolute h-24 w-24 rounded-full border border-[color:var(--accent)]/20 animate-ping opacity-40"
            style={{ animationDelay: "0.5s" }}
            aria-hidden
          />
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-white/90">
            VK
          </span>
        </div>

        {/* Orbital ring */}
        <div className="absolute h-[360px] w-[360px] rounded-full border border-[color:var(--border-strong)]/40" />

        {/* Nodes */}
        {timelineData.map((item, index) => {
          const position = calculateNodePosition(index, timelineData.length);
          const isExpanded = expandedItems[item.id];
          const isRelated = isRelatedToActive(item.id);
          const isPulsing = pulseEffect[item.id];
          const Icon = item.icon;

          const nodeStyle = {
            transform: `translate(${position.x}px, ${position.y}px)`,
            zIndex: isExpanded ? 200 : position.zIndex,
            opacity: isExpanded ? 1 : position.opacity,
          };

          return (
            <div
              key={item.id}
              ref={(el) => {
                nodeRefs.current[item.id] = el;
              }}
              className="absolute cursor-pointer transition-all duration-700"
              style={nodeStyle}
              onClick={(e) => {
                e.stopPropagation();
                toggleItem(item.id);
              }}
            >
              {/* Aura */}
              <div
                className={cn(
                  "absolute -inset-2 rounded-full",
                  isPulsing && "animate-pulse"
                )}
                style={{
                  background: `radial-gradient(circle, color-mix(in srgb, var(--accent) 40%, transparent) 0%, transparent 70%)`,
                  width: `${item.energy * 0.5 + 44}px`,
                  height: `${item.energy * 0.5 + 44}px`,
                  left: `-${(item.energy * 0.5 + 44 - 40) / 2}px`,
                  top: `-${(item.energy * 0.5 + 44 - 40) / 2}px`,
                }}
                aria-hidden
              />

              {/* Node circle */}
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300",
                  isExpanded
                    ? "scale-150 border-[color:var(--text-primary)] bg-[color:var(--text-primary)] text-[color:var(--text-inverse)] shadow-lg"
                    : isRelated
                      ? "border-[color:var(--accent)] bg-[color:var(--accent)]/20 text-[color:var(--accent)] animate-pulse"
                      : "border-[color:var(--border-strong)] bg-[color:var(--bg-elevated)] text-[color:var(--text-secondary)]"
                )}
              >
                <Icon size={16} />
              </div>

              {/* Label */}
              <div
                className={cn(
                  "absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[11px] uppercase tracking-wider transition-all duration-300",
                  isExpanded
                    ? "scale-110 text-[color:var(--text-primary)]"
                    : "text-[color:var(--text-secondary)]"
                )}
              >
                {item.title}
              </div>

              {/* Detail card */}
              {isExpanded && (
                <Card className="absolute left-1/2 top-24 w-72 -translate-x-1/2 backdrop-blur-md">
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 h-3 w-px bg-[color:var(--accent)]/50"
                    aria-hidden
                  />
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge variant={getStatusVariant(item.status)}>
                        {item.status === "completed"
                          ? "Done"
                          : item.status === "in-progress"
                            ? "Active"
                            : "Next"}
                      </Badge>
                      <span className="font-mono text-[11px] text-[color:var(--text-tertiary)]">
                        {item.date}
                      </span>
                    </div>
                    <CardTitle className="mt-2 text-[14px]">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-[12.5px] leading-relaxed text-[color:var(--text-secondary)]">
                    <p>{item.content}</p>

                    <div className="mt-4 border-t border-[color:var(--border)] pt-3">
                      <div className="mb-1.5 flex items-center justify-between text-[11px]">
                        <span className="flex items-center gap-1 font-mono uppercase tracking-wider text-[color:var(--text-tertiary)]">
                          <Zap size={10} />
                          Progress
                        </span>
                        <span className="font-mono text-[color:var(--text-primary)]">
                          {item.energy}%
                        </span>
                      </div>
                      <div className="h-1 w-full overflow-hidden rounded-full bg-[color:var(--bg-muted)]">
                        <div
                          className="h-full bg-[color:var(--accent)]"
                          style={{ width: `${item.energy}%` }}
                        />
                      </div>
                    </div>

                    {item.relatedIds.length > 0 && (
                      <div className="mt-4 border-t border-[color:var(--border)] pt-3">
                        <div className="mb-2 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[color:var(--text-tertiary)]">
                          <LinkIcon size={10} />
                          Connected steps
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {item.relatedIds.map((relatedId) => {
                            const relatedItem = timelineData.find((i) => i.id === relatedId);
                            return (
                              <button
                                key={relatedId}
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleItem(relatedId);
                                }}
                                className="inline-flex h-6 items-center gap-1 rounded border border-[color:var(--border)] bg-transparent px-2 font-mono text-[11px] uppercase tracking-wider text-[color:var(--text-secondary)] transition-colors hover:border-[color:var(--border-strong)] hover:text-[color:var(--text-primary)]"
                              >
                                {relatedItem?.title}
                                <ArrowRight size={10} />
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
