const mergeDeep = require('./../src/index.js');

test('merge two empty objects returns empty object', () => {
	const expected = JSON.stringify({});
	const merged = JSON.stringify(mergeDeep({}, {}));
	expect(merged).toBe(expected);
});

test('merge two empty arrays returns empty array', () => {
	const expected = JSON.stringify([]);
	const merged = JSON.stringify(mergeDeep([], []));
	expect(merged).toBe(expected);
});

test('merge empty object with other object returns other object', () => {
	const newData = {test: 'abc'};

	const expected = JSON.stringify(newData);
	const merged = JSON.stringify(mergeDeep({}, newData));
	expect(merged).toBe(expected);
});

test('merge object with empty object returns empty key', () => {
	const newData = {test: 'abc'};

	const expected = JSON.stringify(newData);
	const merged = JSON.stringify(mergeDeep({}, newData));
	expect(merged).toBe(expected);
});

test('merge two objects returns object with merged keys and values', () => {
	const actual = {test: 123, mode: 'manual', type: 'default', points: 789};
	const newData = {
		...actual,
		newKey: [{
			mode: 'manual'
		}],
		points: 345,
	};

	const expected = JSON.stringify(newData);
	const merged = JSON.stringify(mergeDeep(actual, newData));
	expect(merged).toBe(expected);
});