import genDiff from '../getUniqueKeys.js';

const getJsonDiff = (o1, o2) => JSON.stringify(({ value: genDiff(o1, o2) }));

export default getJsonDiff;
