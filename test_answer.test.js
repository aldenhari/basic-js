const minMax = require('./challenge');

test('receive [1, 2, 3, 4, 5] result is { "sumMin": 10, "sumMax": 14 }', async () => {
    expect(minMax([1, 2, 3, 4, 5])).toEqual({ "sumMin": 10, "sumMax": 14 });
});

test('receive [7 69 2 221 8974] result is { "sumMin": 299, "sumMax": 9271 }', async () => {
    expect(minMax([7, 69, 2, 221, 8974])).toEqual({ "sumMin": 299, "sumMax": 9271 });
});
