const plain = (diff, path = '') => {
    return diff
      .map(({ key, type, value, oldValue, newValue, children }) => {
        const fullPath = path ? `${path}.${key}` : key;
        switch (type) {
          case 'added': return `Property '${fullPath}' was added with value: ${JSON.stringify(value)}`;
          case 'removed': return `Property '${fullPath}' was removed`;
          case 'updated': return `Property '${fullPath}' was updated. From ${JSON.stringify(oldValue)} to ${JSON.stringify(newValue)}`;
          case 'nested': return plain(children, fullPath);
          default: return null;
        }
      })
      .filter(Boolean)
      .join('\n');
  };
  
  export default plain;
  