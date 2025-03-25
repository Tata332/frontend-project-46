import _ from 'lodash';
import parseFile from './parsers.js';

const gendiff = (filepath1, filepath2) => {
  const data1 = parseFile(filepath1);
  const data2 = parseFile(filepath2);

  const keys = _.union(_.keys(data1), _.keys(data2)).sort();

  const result = keys.map((key) => {
    if (!_.has(data2, key)) return `  - ${key}: ${data1[key]}`; // Удалённый ключ
    if (!_.has(data1, key)) return `  + ${key}: ${data2[key]}`; // Добавленный ключ
    if (data1[key] === data2[key]) return `    ${key}: ${data1[key]}`; // Одинаковый ключ
    return `  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`; // Изменённый ключ
  });

  return `{\n${result.join('\n')}\n}`;
};

export default gendiff;
