const indent = (depth) => ' '.repeat(depth * 4 - 2);

const stylish = (diff, depth = 1) => {
  const result = diff.map(({ key, type, value, oldValue, newValue, children }) => {
    switch (type) {
      case 'added': return `${indent(depth)}+ ${key}: ${value}`;
      case 'removed': return `${indent(depth)}- ${key}: ${value}`;
      case 'updated': return `${indent(depth)}- ${key}: ${oldValue}\n${indent(depth)}+ ${key}: ${newValue}`;
      case 'nested': return `${indent(depth)}  ${key}: {\n${stylish(children, depth + 1)}\n${indent(depth)}  }`;
      default: return `${indent(depth)}  ${key}: ${value}`;
    }
  });

  return `{\n${result.join('\n')}\n}`;
};

export default stylish;
