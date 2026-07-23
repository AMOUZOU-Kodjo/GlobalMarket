export function Skeleton({ variant = "text", width, height, className = "" }) {
  const variantClass = {
    text: "h-4 w-full",
    circular: "rounded-full",
    rectangular: "w-full h-48",
  }[variant];

  const style = {};
  if (width) style.width = width;
  if (height) style.height = height;

  return (
    <div
      className={`skeleton ${variantClass} ${className}`}
      style={style}
    />
  );
}

export default Skeleton;
