import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import parseFile from './parsers.js';

const readFile = (filepath) => {
  const fullPath = path.resolve(process.cwd(), filepath);
  return fs.readFileSync(fullPath, 'utf8');
};

const gendiff = (filepath1, filepath2) => {
  const data1 = parseFile(readFile(filepath1), filepath1);
  const data2 = parseFile(readFile(filepath2), filepath2);

  const keys = _.union(_.keys(data1), _.keys(data2)).sort();

  const result = keys.map((key) => {
    if (!_.has(data2, key)) return `  - ${key}: ${data1[key]}`;
    if (!_.has(data1, key)) return `  + ${key}: ${data2[key]}`;
    if (data1[key] !== data2[key]) {
      return `  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`;
    }
    return `    ${key}: ${data1[key]}`;
  });

  return `{\n${result.join('\n')}\n}`;
};

export default gendiff;
