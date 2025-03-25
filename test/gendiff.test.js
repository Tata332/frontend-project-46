import path from 'path';
import gendiff from '../src/gendiff.js';

const getFixturePath = (filename) => path.resolve('__fixtures__', filename);

test('gendiff should compare two flat JSON files', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');

  const expected = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

  expect(gendiff(file1, file2)).toEqual(expected);
});
