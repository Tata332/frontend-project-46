import path from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import gendiff from '../src/gendiff.js';

// Определяем путь к текущему файлу и папке __fixtures__
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '../__fixtures__', filename);

// Читаем ожидаемый результат
const expectedResult = readFileSync(getFixturePath('expected.txt'), 'utf8');

test('gendiff should compare two flat JSON files', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  expect(gendiff(file1, file2)).toBe(expectedResult);
});

test('gendiff should compare two flat YAML files', () => {
  const file1 = getFixturePath('file1.yml');
  const file2 = getFixturePath('file2.yml');
  expect(gendiff(file1, file2)).toBe(expectedResult);
});
