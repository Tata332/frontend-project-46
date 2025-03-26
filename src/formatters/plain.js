const formatValue = (value) => {
  if (typeof value === 'object' && value !== null) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return String(value);
};

const plain = (diffTree, parentKey = '') => {
  return diffTree
    .flatMap((node) => {
      const fullKey = parentKey ? `${parentKey}.${node.key}` : node.key;

      switch (node.type) {
        case 'added':
          return `Property '${fullKey}' was added with value: ${formatValue(node.value)}`;
        case 'removed':
          return `Property '${fullKey}' was removed`;
        case 'updated':
          return `Property '${fullKey}' was updated. From ${formatValue(node.oldValue)} to ${formatValue(node.newValue)}`;
        case 'nested':
          return plain(node.children, fullKey);
        case 'unchanged':
          return null; // Пропускаем неизменённые значения
        default:
          throw new Error(`Unknown node type: ${node.type}`);
      }
    })
    .filter(Boolean) // Убираем `null`
    .join('\n');
};

export default plain;
