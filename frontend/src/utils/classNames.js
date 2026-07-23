const classNames = (...args) => {
  const classes = [];

  for (const arg of args) {
    if (!arg) continue;

    const type = typeof arg;

    if (type === 'string') {
      classes.push(arg);
    } else if (type === 'number') {
      classes.push(String(arg));
    } else if (Array.isArray(arg)) {
      const inner = classNames(...arg);
      if (inner) classes.push(inner);
    } else if (type === 'object') {
      for (const [key, value] of Object.entries(arg)) {
        if (value) classes.push(key);
      }
    }
  }

  return classes.join(' ');
};

export default classNames;
