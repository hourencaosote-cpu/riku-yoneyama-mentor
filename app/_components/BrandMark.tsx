type BrandMarkProps = {
  size?: "small" | "large";
  inverse?: boolean;
};

export function BrandMark({
  size = "small",
  inverse = false,
}: BrandMarkProps) {
  return (
    <span
      className={`brand-mark brand-mark-${size}${inverse ? " brand-mark-inverse" : ""}`}
      aria-hidden="true"
    >
      <span className="brand-mark-letters">RY</span>
      <i />
    </span>
  );
}
