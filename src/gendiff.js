import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const readFile = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  const data = fs.readFileSync(absolutePath, 'utf-8');
  return JSON.parse(data);
};

const genDiff = (filepath1, filepath2) => {
  const data1 = readFile(filepath1);
  const data2 = readFile(filepath2);

  const keys = _.sortBy([...new Set([...Object.keys(data1), ...Object.keys(data2)])]);

  const diff = keys.map((key) => {
    if (!Object.hasOwn(data2, key)) return `- ${key}: ${data1[key]}`;
    if (!Object.hasOwn(data1, key)) return `+ ${key}: ${data2[key]}`;
    if (data1[key] !== data2[key]) return `- ${key}: ${data1[key]}\n+ ${key}: ${data2[key]}`;
    return `  ${key}: ${data1[key]}`;
  });

  return `{\n${diff.join('\n')}\n}`;
};

export default genDiff;
