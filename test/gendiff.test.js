import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import genDiff from '../src/gendiff.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const file1 = getFixturePath('file3.json');
const file2 = getFixturePath('file4.json');

test('gendiff stylish format', () => {
  const expectedStylish = readFile('expected_stylish.txt').trim();
  expect(genDiff(file1, file2)).toBe(expectedStylish);
});

test('gendiff plain format', () => {
  const expectedPlain = readFile('expected_plain.txt').trim();
  expect(genDiff(file1, file2, 'plain')).toBe(expectedPlain);
});

test('gendiff json format', () => {
  const expectedJson = JSON.parse(readFile('expected_json.txt'));
  expect(JSON.parse(genDiff(file1, file2, 'json'))).toEqual(expectedJson);
});
