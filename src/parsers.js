import yaml from 'js-yaml';
import path from 'path';

const parseFile = (content, filepath) => {
  const ext = path.extname(filepath);

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
