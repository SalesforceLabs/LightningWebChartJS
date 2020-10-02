import { sanitize, parseBoolean } from 'c/utils';

describe('Utils - sanitize', () => {
  test('Sanitize undefined', () => {
    const input = undefined;

    const result = sanitize(input);

    expect(result).toBeUndefined();
  });

  test('Sanitize stringified object', () => {
    const input = { a: 'a', b: 'b' };
    const result = sanitize(JSON.stringify(input));

    expect(result).toMatchObject(input);
  });

  test('Sanitize stringified array', () => {
    const input = ['a', 'b', 'c'];
    const result = sanitize(JSON.stringify(input));

    expect(result).toMatchObject(input);
  });
});

describe('Utils - parseBoolean', () => {
  test('Parse true string', () => {
    const input = 'true';

    const result = parseBoolean(input);

    expect(result).toBe(true);
  });

  test('Parse false string', () => {
    const input = 'false';

    const result = parseBoolean(input);

    expect(result).toBe(false);
  });

  test('Parse true boolean', () => {
    const input = true;

    const result = parseBoolean(input);

    expect(result).toBe(true);
  });

  test('Parse false boolean', () => {
    const input = false;

    const result = parseBoolean(input);

    expect(result).toBe(false);
  });

  test('Parse undefined', () => {
    const input = undefined;

    const result = parseBoolean(input);

    expect(result).toBe(undefined);
  });

  test('Parse null', () => {
    const input = null;

    const result = parseBoolean(input);

    expect(result).toBe(null);
  });
});
