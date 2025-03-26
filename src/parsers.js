import { readFileSync } from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const getFileFormat = (filepath) => path.extname(filepath).slice(1);

const parse = (filepath) => {
  const content = readFileSync(filepath, 'utf8');
  const format = getFileFormat(filepath);
  return format === 'json' ? JSON.parse(content) : yaml.load(content);
};

export default parse;
