const CURRENCIES = [
  { code: 'XOF', symbol: 'CFA', name: 'Franc CFA (BCEAO)', locale: 'fr-FR' },
  { code: 'EUR', symbol: '\u20AC', name: 'Euro', locale: 'fr-FR' },
  { code: 'USD', symbol: '$', name: 'Dollar am\u00E9ricain', locale: 'en-US' },
  { code: 'GBP', symbol: '\u00A3', name: 'Livre sterling', locale: 'en-GB' },
  { code: 'XAF', symbol: 'FCFA', name: 'Franc CFA (BEAC)', locale: 'fr-FR' },
  { code: 'NGN', symbol: '\u20A6', name: 'Naira nig\u00E9rian', locale: 'en-NG' },
  { code: 'GHS', symbol: 'GH\u20B5', name: 'Cedi ghan\u00E9en', locale: 'en-GH' },
  { code: 'CAD', symbol: 'CA$', name: 'Dollar canadien', locale: 'fr-CA' },
];

export const DEFAULT_CURRENCY = CURRENCIES[0];

export const getCurrencyByCode = (code) =>
  CURRENCIES.find((c) => c.code === code) ?? DEFAULT_CURRENCY;

export default CURRENCIES;
