import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const getAbsolutePath = (filepath) => path.resolve(process.cwd(), filepath);

const readFile = (filepath) => {
  const fullPath = getAbsolutePath(filepath);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`File not found: ${fullPath}`);
  }
  return fs.readFileSync(fullPath, 'utf8');
};

const parseFile = (filepath) => {
  if (!filepath || typeof filepath !== 'string') {
    throw new Error('File path must be a non-empty string');
  }

  const ext = path.extname(filepath).toLowerCase();
  const content = readFile(filepath);

  switch (ext) {
    case '.json':
      return JSON.parse(content);
    case '.yml':
    case '.yaml': {
      const parsed = yaml.load(content);
      if (Array.isArray(parsed)) {
        throw new Error(`Ошибка: YAML файл "${filepath}" содержит массив, а должен содержать объект.`);
      }
      return parsed;
    }
    default:
      throw new Error(`Unsupported file format: ${ext}`);
  }
};

export default parseFile;
