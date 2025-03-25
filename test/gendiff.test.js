import { readFileSync } from 'fs';
import path from 'path';
import gendiff from '../src/gendiff.js';

const getFixturePath = (filename) => path.resolve('__fixtures__', filename);

test('gendiff should compare two flat JSON files', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  const expectedResult = readFileSync(getFixturePath('expected_json.txt'), 'utf8').trim();
  expect(gendiff(file1, file2).trim()).toEqual(expectedResult);
});

test('gendiff should compare two flat YAML files', () => {
  const file1 = getFixturePath('filepath1.yml');
  const file2 = getFixturePath('filepath2.yml');
  const expectedResult = readFileSync(getFixturePath('expected_yaml.txt'), 'utf8').trim();
  expect(gendiff(file1, file2).trim()).toEqual(expectedResult);
});
