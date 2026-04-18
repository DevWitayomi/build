type CTAButtonProps = {
  label: string;
  className?: string;
};

export function CTAButton({ label, className = '' }: CTAButtonProps) {
  return (
    <a
      href="#checkout"
      className={`inline-flex items-center justify-center rounded-full bg-ink px-7 py-4 text-base font-semibold text-white transition hover:bg-ocean ${className}`}
    >
      {label}
    </a>
  );
}
