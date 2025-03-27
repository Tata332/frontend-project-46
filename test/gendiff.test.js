import path from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/genDiff.js';

const getFixturePath = (filename) => path.join('__fixtures__', filename);
const readFixture = (filename) => readFileSync(getFixturePath(filename), 'utf-8').trim();

test.each([
  ['file1.json', 'file2.json', 'expectedStylish.txt', 'stylish'],
  ['file1.json', 'file2.json', 'expectedPlain.txt', 'plain'],
  ['file1.json', 'file2.json', 'expectedJson.json', 'json'],
])('gendiff %s %s --format %s', (file1, file2, expectedFile, format) => {
  expect(genDiff(getFixturePath(file1), getFixturePath(file2), format)).toBe(readFixture(expectedFile));
});
