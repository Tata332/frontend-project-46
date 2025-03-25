import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const parseFile = (filepath) => {
  const ext = path.extname(filepath);
  const content = fs.readFileSync(filepath, 'utf8');

  switch (ext) {
    case '.json':
      return JSON.parse(content);
    case '.yml':
    case '.yaml':
      return yaml.load(content);
    default:
      throw new Error(`Unsupported file format: ${ext}`);
  }
};

export default parseFile;
