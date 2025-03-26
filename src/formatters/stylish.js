const indent = (depth, spacesCount = 4) => ' '.repeat(depth * spacesCount - 2);
const stringify = (value, depth) => {
  if (typeof value !== 'object' || value === null) return String(value);

  const lines = Object.entries(value).map(
    ([key, val]) => `${indent(depth + 1)}  ${key}: ${stringify(val, depth + 1)}`
  );
  return `{\n${lines.join('\n')}\n${indent(depth)}  }`;
};

const formatStylish = (diffTree, depth = 1) => {
  const result = diffTree.map((node) => {
    const { key, type, value, oldValue, newValue, children } = node;
    switch (type) {
      case 'nested':
        return `${indent(depth)}  ${key}: {\n${formatStylish(children, depth + 1)}\n${indent(depth)}  }`;
      case 'added':
        return `${indent(depth)}+ ${key}: ${stringify(value, depth)}`;
      case 'removed':
        return `${indent(depth)}- ${key}: ${stringify(value, depth)}`;
      case 'updated':
        return `${indent(depth)}- ${key}: ${stringify(oldValue, depth)}\n${indent(depth)}+ ${key}: ${stringify(newValue, depth)}`;
      case 'unchanged':
        return `${indent(depth)}  ${key}: ${stringify(value, depth)}`;
      default:
        throw new Error(`Unknown type: ${type}`);
    }
  });

  return result.join('\n');
};

export default (diffTree) => `{\n${formatStylish(diffTree)}\n}`;
