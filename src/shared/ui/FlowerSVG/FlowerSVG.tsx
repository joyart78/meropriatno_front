interface FlowerSVGProps {
  color?: string;
  centerColor?: string;
  className?: string;
}

export function FlowerSVG({
  color = "#ef88af",
  centerColor = "#ffda8c",
}: FlowerSVGProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="8" fill={centerColor} />
      <ellipse cx="50" cy="26" rx="10" ry="18" fill={color} opacity="0.7" />
      <ellipse cx="50" cy="74" rx="10" ry="18" fill={color} opacity="0.7" />
      <ellipse cx="26" cy="50" rx="18" ry="10" fill={color} opacity="0.7" />
      <ellipse cx="74" cy="50" rx="18" ry="10" fill={color} opacity="0.7" />
      <circle cx="50" cy="50" r="6" fill={centerColor} />
    </svg>
  );
}
