export const isRequired = (value) => {
  if (value === null || value === undefined) return 'Ce champ est obligatoire';
  if (typeof value === 'string' && value.trim() === '') return 'Ce champ est obligatoire';
  if (Array.isArray(value) && value.length === 0) return 'Ce champ est obligatoire';
  return null;
};

export const isEmail = (value) => {
  if (!value) return null;
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(value) ? null : 'Adresse email invalide';
};

export const isName = (value, { minLength = 2, maxLength = 50 } = {}) => {
  if (!value) return null;
  if (value.length < minLength) return `Le nom doit contenir au moins ${minLength} caractères`;
  if (value.length > maxLength) return `Le nom ne doit pas dépasser ${maxLength} caractères`;
  return null;
};

export const isPhone = (value) => {
  if (!value) return null;
  const cleaned = value.replace(/[\s\-().]/g, '');
  const pattern = /^\+?[0-9]{8,15}$/;
  return pattern.test(cleaned) ? null : 'Numéro de téléphone invalide';
};

export const getPasswordStrength = (password) => {
  if (!password) return { score: 0, label: 'Aucun', level: 'none' };

  let score = 0;

  if (password.length >= 8) score += 1;
  if (password.length >= 12) score += 1;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^a-zA-Z0-9]/.test(password)) score += 1;

  if (score <= 1) return { score, label: 'Faible', level: 'weak' };
  if (score <= 3) return { score, label: 'Moyen', level: 'medium' };
  return { score, label: 'Fort', level: 'strong' };
};

export const isPassword = (value, { minLength = 8 } = {}) => {
  if (!value) return null;
  if (value.length < minLength) return `Le mot de passe doit contenir au moins ${minLength} caractères`;
  if (!/[a-z]/.test(value)) return 'Le mot de passe doit contenir au moins une minuscule';
  if (!/[A-Z]/.test(value)) return 'Le mot de passe doit contenir au moins une majuscule';
  if (!/[0-9]/.test(value)) return 'Le mot de passe doit contenir au moins un chiffre';
  return null;
};

export const isPasswordMatch = (password, confirm) => {
  if (!confirm) return null;
  return password === confirm ? null : 'Les mots de passe ne correspondent pas';
};

export const isMinLength = (min) => (value) => {
  if (!value) return null;
  return value.length >= min ? null : `Doit contenir au moins ${min} caractères`;
};

export const isMaxLength = (max) => (value) => {
  if (!value) return null;
  return value.length <= max ? null : `Ne doit pas dépasser ${max} caractères`;
};

export const isPositiveNumber = (value) => {
  if (value === null || value === undefined || value === '') return null;
  const num = Number(value);
  return !isNaN(num) && num > 0 ? null : 'Doit être un nombre positif';
};

export const isUrl = (value) => {
  if (!value) return null;
  try {
    new URL(value);
    return null;
  } catch {
    return 'URL invalide';
  }
};

export const validate = (value, validators) => {
  for (const validator of validators) {
    const error = validator(value);
    if (error) return error;
  }
  return null;
};

export const validateForm = (fields) => {
  const errors = {};
  let isValid = true;

  for (const [field, validators] of Object.entries(fields)) {
    const error = validate(field, validators);
    if (error) {
      errors[field] = error;
      isValid = false;
    }
  }

  return { isValid, errors };
};
