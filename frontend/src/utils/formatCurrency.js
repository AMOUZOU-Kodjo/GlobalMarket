const formatCurrency = (amount, { currency = 'XOF', locale = 'fr-FR' } = {}) => {
  if (amount == null || isNaN(Number(amount))) return '0 ' + currency;

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
};

export default formatCurrency;
