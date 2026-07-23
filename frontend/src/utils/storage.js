const PREFIX = 'mktpl_';

const storage = {
  get(key) {
    try {
      const raw = localStorage.getItem(PREFIX + key);
      if (raw === null) return null;

      const parsed = JSON.parse(raw);

      if (parsed && typeof parsed === 'object' && parsed.expiry !== undefined) {
        if (Date.now() > parsed.expiry) {
          this.remove(key);
          return null;
        }
        return parsed.value;
      }

      return parsed;
    } catch {
      return null;
    }
  },

  set(key, value, { expiryMs = null } = {}) {
    try {
      const payload = expiryMs
        ? { value, expiry: Date.now() + expiryMs }
        : value;

      localStorage.setItem(PREFIX + key, JSON.stringify(payload));
      return true;
    } catch {
      return false;
    }
  },

  remove(key) {
    try {
      localStorage.removeItem(PREFIX + key);
      return true;
    } catch {
      return false;
    }
  },

  has(key) {
    return this.get(key) !== null;
  },

  clear() {
    try {
      const keys = [];
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith(PREFIX)) keys.push(k);
      }
      keys.forEach((k) => localStorage.removeItem(k));
      return true;
    } catch {
      return false;
    }
  },

  keys() {
    const result = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith(PREFIX)) result.push(k.slice(PREFIX.length));
    }
    return result;
  },
};

export const SESSION = {
  get(key) {
    try {
      const raw = sessionStorage.getItem(PREFIX + key);
      if (raw === null) return null;

      const parsed = JSON.parse(raw);

      if (parsed && typeof parsed === 'object' && parsed.expiry !== undefined) {
        if (Date.now() > parsed.expiry) {
          SESSION.remove(key);
          return null;
        }
        return parsed.value;
      }

      return parsed;
    } catch {
      return null;
    }
  },

  set(key, value, { expiryMs = null } = {}) {
    try {
      const payload = expiryMs
        ? { value, expiry: Date.now() + expiryMs }
        : value;

      sessionStorage.setItem(PREFIX + key, JSON.stringify(payload));
      return true;
    } catch {
      return false;
    }
  },

  remove(key) {
    try {
      sessionStorage.removeItem(PREFIX + key);
      return true;
    } catch {
      return false;
    }
  },
};

export default storage;
