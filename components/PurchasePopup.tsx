'use client';

import { useEffect, useState } from 'react';
import type { PurchaseItem } from '@/data/purchases';

type PurchasePopupProps = {
  purchases: PurchaseItem[];
};

export function PurchasePopup({ purchases }: PurchasePopupProps) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!purchases.length) return;

    const rotate = window.setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        setIndex((prev) => (prev + 1) % purchases.length);
        setVisible(true);
      }, 350);
    }, 4500);

    return () => window.clearInterval(rotate);
  }, [purchases]);

  if (!purchases.length) return null;

  const current = purchases[index];

  return (
    <aside
      aria-live="polite"
      className={`fixed bottom-20 left-4 z-40 max-w-[280px] rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-soft transition-all duration-300 md:bottom-6 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
      }`}
    >
      <p className="font-semibold text-ink">Recent purchase</p>
      <p className="mt-1">
        <span className="font-medium">{current.name}</span> from {current.flag} {current.country} got ClientFlow OS.
      </p>
    </aside>
  );
}
