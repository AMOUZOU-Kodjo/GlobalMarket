import { AlertTriangle } from "lucide-react";

export function ErrorState({
  title = "Something went wrong",
  message,
  onRetry,
  retryLabel = "Try again",
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="mb-4 text-error">
        <AlertTriangle size={64} strokeWidth={1} />
      </div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      {message && <p className="text-sm opacity-60 mb-4 max-w-md">{message}</p>}
      {onRetry && (
        <button type="button" className="btn btn-primary" onClick={onRetry}>
          {retryLabel}
        </button>
      )}
    </div>
  );
}

export default ErrorState;
