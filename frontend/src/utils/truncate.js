const truncate = (text, { maxLength = 100, suffix = '...' } = {}) => {
  if (!text) return '';
  if (typeof text !== 'string') return '';
  if (text.length <= maxLength) return text;

  return text.slice(0, maxLength).trimEnd() + suffix;
};

export const truncateWords = (text, { maxWords = 10, suffix = '...' } = {}) => {
  if (!text) return '';
  if (typeof text !== 'string') return '';

  const words = text.split(/\s+/);
  if (words.length <= maxWords) return text;

  return words.slice(0, maxWords).join(' ') + suffix;
};

export const truncateMiddle = (text, { maxLength = 20, keepEnd = 6 } = {}) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;

  const keptStart = maxLength - keepEnd - 3;
  return text.slice(0, keptStart) + '...' + text.slice(-keepEnd);
};

export default truncate;
