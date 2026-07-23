export function Spinner({ size = "md", text, className = "" }) {
  const sizeClass = {
    xs: "loading-xs",
    sm: "loading-sm",
    md: "loading-md",
    lg: "loading-lg",
    xl: "loading-xl",
  }[size];

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <span className={`loading loading-spinner ${sizeClass || "loading-md"}`} />
      {text && <span className="text-sm opacity-70">{text}</span>}
    </div>
  );
}

export default Spinner;
