const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;
const MONTH = 30 * DAY;
const YEAR = 365 * DAY;

const DIVISORS = [
  { unit: 'year', divisor: YEAR, max: Infinity },
  { unit: 'month', divisor: MONTH, max: 11 },
  { unit: 'week', divisor: WEEK, max: 3 },
  { unit: 'day', divisor: DAY, max: 6 },
  { unit: 'hour', divisor: HOUR, max: 23 },
  { unit: 'minute', divisor: MINUTE, max: 59 },
  { unit: 'second', divisor: SECOND, max: 59 },
];

const RELATIVE_PLURALS = {
  year: (n) => `il y a ${n} an${n > 1 ? 's' : ''}`,
  month: (n) => `il y a ${n} mois`,
  week: (n) => `il y a ${n} semaine${n > 1 ? 's' : ''}`,
  day: (n) => `il y a ${n} jour${n > 1 ? 's' : ''}`,
  hour: (n) => `il y a ${n} heure${n > 1 ? 's' : ''}`,
  minute: (n) => `il y a ${n} minute${n > 1 ? 's' : ''}`,
  second: (n) => `il y a ${n} seconde${n > 1 ? 's' : ''}`,
};

export const formatDate = (date, { locale = 'fr-FR', style = 'short' } = {}) => {
  if (!date) return '';

  const parsed = date instanceof Date ? date : new Date(date);
  if (isNaN(parsed.getTime())) return '';

  if (style === 'relative') {
    return getRelativeTime(parsed, locale);
  }

  const options = style === 'long'
    ? { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }
    : { day: '2-digit', month: '2-digit', year: 'numeric' };

  return parsed.toLocaleDateString(locale, options);
};

export const getRelativeTime = (date, locale = 'fr-FR') => {
  const parsed = date instanceof Date ? date : new Date(date);
  if (isNaN(parsed.getTime())) return '';

  const now = Date.now();
  const diff = now - parsed.getTime();

  if (diff < 0) return 'à l\'instant';

  if (diff < 10 * SECOND) return 'à l\'instant';

  for (const { unit, divisor } of DIVISORS) {
    const value = Math.floor(diff / divisor);
    if (value >= 1) {
      return RELATIVE_PLURALS[unit](value);
    }
  }

  return 'à l\'instant';
};

export const isRecent = (date, thresholdMs = HOUR) => {
  if (!date) return false;
  const parsed = date instanceof Date ? date : new Date(date);
  return Date.now() - parsed.getTime() < thresholdMs;
};

export default formatDate;
