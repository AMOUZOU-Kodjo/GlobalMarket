import classNames from '../../utils/classNames'

export function FormField({
  label,
  error,
  hint,
  required = false,
  children,
  htmlFor,
  className = '',
}) {
  return (
    <div className={classNames('form-control w-full', className)}>
      {label && (
        <label className="label" htmlFor={htmlFor}>
          <span className="label-text font-medium">
            {label}
            {required && <span className="text-error ml-0.5">*</span>}
          </span>
        </label>
      )}

      <div className="relative">
        {children}
      </div>

      {(error || hint) && (
        <label className="label">
          {error ? (
            <span className="label-text-alt text-error flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
              {error}
            </span>
          ) : hint ? (
            <span className="label-text-alt text-base-content/50">{hint}</span>
          ) : null}
        </label>
      )}
    </div>
  )
}

export default FormField
