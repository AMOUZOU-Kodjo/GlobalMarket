export function EmptyState({ icon: Icon, title, description, action, className = "" }) {
  return (
    <div className={`flex flex-col items-center justify-center py-16 px-4 text-center ${className}`}>
      {Icon && (
        <div className="mb-4 text-base-content/30">
          <Icon size={64} strokeWidth={1} />
        </div>
      )}
      {title && <h3 className="text-lg font-semibold mb-1">{title}</h3>}
      {description && <p className="text-sm opacity-60 mb-4 max-w-md">{description}</p>}
      {action && <div>{action}</div>}
    </div>
  );
}

export default EmptyState;
