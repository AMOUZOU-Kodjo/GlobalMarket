export function Tooltip({
  content,
  children,
  position = "top",
  className = "",
}) {
  const tipClass = {
    top: "tooltip-top",
    bottom: "tooltip-bottom",
    left: "tooltip-left",
    right: "tooltip-right",
  }[position];

  return (
    <div className={`tooltip ${tipClass} ${className}`} data-tip={content}>
      {children}
    </div>
  );
}

export default Tooltip;
