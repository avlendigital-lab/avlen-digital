type ContourLinesProps = {
  className?: string;
};

export function ContourLines({ className = '' }: ContourLinesProps) {
  return (
    <div className={`contour-field ${className}`.trim()} aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}
