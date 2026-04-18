'use client';

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 backdrop-blur md:hidden">
      <a
        href="#checkout"
        className="block rounded-full bg-ink px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-ocean"
      >
        Get ClientFlow OS for ₦15,000
      </a>
    </div>
  );
}
