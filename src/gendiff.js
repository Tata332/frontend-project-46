import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import format from './formatters/index.js';
import buildDiffTree from './buildDiff.js';

const getAbsolutePath = (filepath) => path.resolve(process.cwd(), filepath);
const readFile = (filepath) => fs.readFileSync(getAbsolutePath(filepath), 'utf-8');
const getFileExtension = (filepath) => path.extname(filepath).slice(1);

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  try {
    const data1 = readFile(filepath1);
    const data2 = readFile(filepath2);

    const parsedData1 = parse(data1, getFileExtension(filepath1));
    const parsedData2 = parse(data2, getFileExtension(filepath2));

    const diffTree = buildDiffTree(parsedData1, parsedData2);
    
    console.log('DIFF TREE:', JSON.stringify(diffTree, null, 2));

    return format(diffTree, formatName);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
};

export default genDiff;
