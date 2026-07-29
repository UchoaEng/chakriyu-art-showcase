interface BrandMarkProps {
  className?: string;
}

const BrandMark = ({ className }: BrandMarkProps) => (
  <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
    <path className="brand-symbol-primary" d="M11 39V9h12.5C31 9 35.8 13 35.8 19.5S31 30 23.5 30H11" />
    <path className="brand-symbol-accent" d="M23.5 30 36.5 40" />
    <circle className="brand-symbol-dot" cx="38" cy="9" r="2.6" />
  </svg>
);

export default BrandMark;
