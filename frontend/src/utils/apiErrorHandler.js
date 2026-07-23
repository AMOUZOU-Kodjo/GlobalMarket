const ERROR_MESSAGES = {
  400: 'Requête invalide. Veuillez vérifier vos données.',
  401: 'Vous devez vous connecter pour continuer.',
  403: 'Vous n\'avez pas les droits nécessaires pour cette action.',
  404: 'La ressource demandée est introuvable.',
  408: 'La requête a expiré. Veuillez réessayer.',
  409: 'Un conflit est survenu. La ressource existe peut-être déjà.',
  413: 'Le fichier est trop volumineux.',
  415: 'Le format du fichier n\'est pas supporté.',
  422: 'Les données fournies sont incorrectes.',
  429: 'Trop de requêtes. Veuillez patienter avant de réessayer.',
  500: 'Une erreur interne est survenue. Veuillez réessayer plus tard.',
  502: 'Le service est temporairement indisponible.',
  503: 'Le service est en maintenance. Veuillez réessayer plus tard.',
};

export const extractError = (error) => {
  if (!error) return 'Une erreur inconnue est survenue.';

  if (typeof error === 'string') return error;

  if (error.response) {
    const { status, data } = error.response;

    if (data?.message) return data.message;
    if (data?.error) return typeof data.error === 'string' ? data.error : data.error.message;
    if (data?.errors && Array.isArray(data.errors) && data.errors.length > 0) {
      return data.errors.map((e) => e.message || e).join('. ');
    }

    return ERROR_MESSAGES[status] || `Erreur ${status}. Veuillez réessayer.`;
  }

  if (error.message) {
    if (error.message === 'Network Error') return 'Erreur réseau. Vérifiez votre connexion.';
    if (error.message.includes('timeout')) return 'La requête a expiré. Veuillez réessayer.';
    return error.message;
  }

  return 'Une erreur inconnue est survenue.';
};

export const extractFieldErrors = (error) => {
  const fieldErrors = {};

  if (error?.response?.data?.errors) {
    const errors = error.response.data.errors;
    if (Array.isArray(errors)) {
      errors.forEach((err) => {
        if (err.field) fieldErrors[err.field] = err.message || err;
      });
    } else if (typeof errors === 'object') {
      Object.entries(errors).forEach(([field, message]) => {
        fieldErrors[field] = Array.isArray(message) ? message[0] : message;
      });
    }
  }

  return fieldErrors;
};

export const isNetworkError = (error) =>
  !error?.response && (error?.message === 'Network Error' || error?.code === 'ERR_NETWORK');

export const isAuthError = (error) => error?.response?.status === 401;

export const isValidationError = (error) => error?.response?.status === 422;

export default extractError;
