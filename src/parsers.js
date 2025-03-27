import yaml from 'js-yaml';
import path from 'path';

const parse = (data, filename) => {
  const ext = path.extname(filename);
  if (ext === '.json') return JSON.parse(data);
  if (ext === '.yml' || ext === '.yaml') return yaml.load(data);
  throw new Error(`Unsupported file format: ${ext}`);
};

export default parse;
