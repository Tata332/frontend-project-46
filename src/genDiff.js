import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import buildDiff from './buildDiff.js';
import format from './formatters/index.js';

const getAbsolutePath = (filepath) => path.resolve(process.cwd(), filepath);
const readFile = (filepath) => fs.readFileSync(getAbsolutePath(filepath), 'utf-8');

const genDiff = (filepath1, filepath2, formatType = 'stylish') => {
  const obj1 = parse(readFile(filepath1), filepath1);
  const obj2 = parse(readFile(filepath2), filepath2);
  const diff = buildDiff(obj1, obj2);

  return format(diff, formatType);
};

export default genDiff;
