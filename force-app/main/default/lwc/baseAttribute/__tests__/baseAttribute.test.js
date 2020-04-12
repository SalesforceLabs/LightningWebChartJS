import BaseAttribute from 'c/baseAttribute';

describe('BaseAttribute sanitize', () => {
  test('Sanitize undefined', () => {
    const input = undefined;

    const result = BaseAttribute.sanitize(input);

    expect(result).toBeUndefined();
  });

  test('Sanitize stringified object', () => {
    const input = { a: 'a', b: 'b' };
    const result = BaseAttribute.sanitize(JSON.stringify(input));

    expect(result).toMatchObject(input);
  });

  test('Sanitize stringified array', () => {
    const input = ['a', 'b', 'c'];
    const result = BaseAttribute.sanitize(JSON.stringify(input));

    expect(result).toMatchObject(input);
  });
});
