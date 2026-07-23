import { Check } from "lucide-react";

export function CheckoutStepper({
  steps = [],
  currentStep,
  onStepClick,
  className = "",
}) {
  const currentIndex = steps.findIndex((s) => s.id === currentStep);

  return (
    <ul className={`steps w-full ${className}`}>
      {steps.map((step, index) => {
        const isCompleted = index < currentIndex;
        const isActive = index === currentIndex;
        const isPending = index > currentIndex;
        const Icon = step.icon;

        return (
          <li
            key={step.id}
            className={`step ${
              isCompleted ? "step-primary" : ""
            } ${isActive ? "step-primary" : ""}`}
          >
            <button
              type="button"
              className={`step-content ${
                onStepClick && (isCompleted || isActive)
                  ? "cursor-pointer hover:opacity-80"
                  : "cursor-default"
              }`}
              onClick={() => {
                if (onStepClick && (isCompleted || isActive)) {
                  onStepClick(step.id, index);
                }
              }}
              disabled={!onStepClick || isPending}
            >
              {isCompleted ? (
                <div className="step-icon bg-primary text-primary-content w-8 h-8 rounded-full flex items-center justify-center">
                  <Check size={16} />
                </div>
              ) : (
                <div
                  className={`step-icon w-8 h-8 rounded-full flex items-center justify-center ${
                    isActive
                      ? "bg-primary text-primary-content"
                      : "bg-base-300 text-base-content"
                  }`}
                >
                  {Icon ? (
                    <Icon size={16} />
                  ) : (
                    <span className="text-sm font-semibold">{index + 1}</span>
                  )}
                </div>
              )}
              <span className="text-xs mt-1 whitespace-nowrap">{step.label}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default CheckoutStepper;
