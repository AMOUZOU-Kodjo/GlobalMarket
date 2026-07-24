import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Mail, CheckCircle, Loader2 } from "lucide-react";

export function NewsletterForm({
  onSubscribe,
  loading = false,
  success = false,
  className = "",
}) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { t } = useTranslation();

  const validateEmail = (value) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError(t('newsletter.enterEmail'));
      return;
    }

    if (!validateEmail(email)) {
      setError(t('newsletter.invalidEmail'));
      return;
    }

    onSubscribe?.(email);
  };

  if (success) {
    return (
      <div className={`text-center py-6 ${className}`}>
        <CheckCircle size={48} className="text-success mx-auto mb-3" />
        <h3 className="text-lg font-bold mb-1">{t('newsletter.thanks')}</h3>
        <p className="text-sm opacity-60">
          {t('newsletter.description')}
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="text-center mb-4">
        <Mail size={32} className="mx-auto mb-2 opacity-50" />
        <h3 className="text-lg font-bold mb-1">{t('newsletter.title')}</h3>
        <p className="text-sm opacity-60">
          {t('newsletter.subtitle')}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="join w-full max-w-md mx-auto">
          <input
            type="email"
            placeholder={t('newsletter.emailPlaceholder')}
            className={`input input-bordered join-item flex-1 ${
              error ? "input-error" : ""
            }`}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError("");
            }}
            disabled={loading}
          />
          <button
            type="submit"
            className="btn btn-primary join-item"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm" />
            ) : (
              t('newsletter.subscribe')
            )}
          </button>
        </div>
        {error && (
          <p className="text-error text-xs text-center">{error}</p>
        )}
      </form>
    </div>
  );
}

export default NewsletterForm;
