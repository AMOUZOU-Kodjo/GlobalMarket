const formatNumber = (value, { locale = 'fr-FR', decimals = 0 } = {}) => {
  if (value == null || isNaN(Number(value))) return '0';

  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(Number(value));
};

export const formatCompact = (value, locale = 'fr-FR') => {
  if (value == null || isNaN(Number(value))) return '0';

  return new Intl.NumberFormat(locale, {
    notation: 'compact',
    compactDisplay: 'short',
  }).format(Number(value));
};

export const formatPercent = (value, { locale = 'fr-FR', decimals = 1 } = {}) => {
  if (value == null || isNaN(Number(value))) return '0 %';

  return new Intl.NumberFormat(locale, {
    style: 'percent',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(Number(value) / 100);
};

export default formatNumber;
