export function Divider({ text, className = "" }) {
  if (text) {
    return (
      <div className={`divider ${className}`}>
        {text}
      </div>
    );
  }

  return <div className={`divider ${className}`} />;
}

export default Divider;
