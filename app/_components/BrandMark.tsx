type BrandMarkProps = {
  size?: "small" | "large" | "display";
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
      <span className="brand-mark-frame" />
      <span className="brand-mark-orbit" />
      <span className="brand-mark-monogram">
        <span>R</span>
        <span>Y</span>
      </span>
      <span className="brand-mark-path" />
      <span className="brand-mark-destination" />
    </span>
  );
}
