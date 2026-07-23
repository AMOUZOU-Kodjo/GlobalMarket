const PLACEHOLDER_BASE = 'https://placehold.co';

export const getPlaceholderUrl = (width = 300, height = 300, text = '', bg = 'e5e7eb', color = '6b7280') => {
  const label = text ? `?text=${encodeURIComponent(text)}` : '';
  return `${PLACEHOLDER_BASE}/${width}x${height}/${bg}/${color}${label}`;
};

export const getThumbnailUrl = (url, { width = 150, height = 150 } = {}) => {
  if (!url) return getPlaceholderUrl(width, height);

  if (url.includes('placehold.co')) {
    return getPlaceholderUrl(width, height);
  }

  if (url.includes('cloudinary.com')) {
    const parts = url.split('/');
    const uploadIndex = parts.findIndex((p) => p === 'upload');
    if (uploadIndex !== -1) {
      parts.splice(uploadIndex + 1, 0, `c_fill,w_${width},h_${height},q_auto,f_auto`);
      return parts.join('/');
    }
  }

  return url;
};

export const getImageUrl = (url, { width, height, quality = 80 } = {}) => {
  if (!url) return getPlaceholderUrl(width || 400, height || 400);

  if (url.includes('cloudinary.com') && (width || height)) {
    const parts = url.split('/');
    const uploadIndex = parts.findIndex((p) => p === 'upload');
    if (uploadIndex !== -1) {
      const transformations = [];
      if (width) transformations.push(`w_${width}`);
      if (height) transformations.push(`h_${height}`);
      transformations.push(`q_${quality}`, 'f_auto');
      parts.splice(uploadIndex + 1, 0, transformations.join(','));
      return parts.join('/');
    }
  }

  return url;
};

export const getImageDimensions = (url) =>
  new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight });
    img.onerror = () => resolve({ width: 0, height: 0 });
    img.src = url;
  });

export const isValidImageType = (file, allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']) => {
  return allowedTypes.includes(file?.type);
};

export const isValidImageSize = (file, maxSizeMB = 5) => {
  return file && file.size <= maxSizeMB * 1024 * 1024;
};

export const createImagePreview = (file) =>
  new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = () => resolve(null);
    reader.readAsDataURL(file);
  });
