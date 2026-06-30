"use client";

import type { ReactNode } from "react";

type Props = {
  href: string;
  eventName: string;
  className?: string;
  children: ReactNode;
};

type Win = Window & { gtag?: (...args: unknown[]) => void };

export function TrackLink({ href, eventName, className, children }: Props) {
  function handleClick() {
    const w = window as Win;
    if (w.gtag) w.gtag("event", eventName, { event_category: "engagement" });
  }
  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
