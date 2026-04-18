'use client';

import { useEffect, useMemo, useState } from 'react';

const COUNTDOWN_MINUTES = 20;
const STORAGE_KEY = 'clientflow_offer_window_end';

const getNextWindow = () => Date.now() + COUNTDOWN_MINUTES * 60 * 1000;

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(COUNTDOWN_MINUTES * 60);

  useEffect(() => {
    const loadEndTime = () => {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      const parsed = stored ? Number(stored) : NaN;
      if (!stored || Number.isNaN(parsed) || parsed <= Date.now()) {
        const next = getNextWindow();
        window.localStorage.setItem(STORAGE_KEY, String(next));
        return next;
      }
      return parsed;
    };

    let endTime = loadEndTime();

    const tick = () => {
      const seconds = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
      if (seconds <= 0) {
        endTime = getNextWindow();
        window.localStorage.setItem(STORAGE_KEY, String(endTime));
      }
      setTimeLeft(Math.max(0, Math.floor((endTime - Date.now()) / 1000)));
    };

    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const formatted = useMemo(() => {
    const minutes = Math.floor(timeLeft / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (timeLeft % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }, [timeLeft]);

  return (
    <div
      aria-live="polite"
      className="inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/10 px-4 py-2 text-sm font-semibold text-ocean"
    >
      <span className="h-2 w-2 animate-pulse rounded-full bg-mint" aria-hidden />
      <span>Current offer window ends in: {formatted}</span>
    </div>
  );
}
