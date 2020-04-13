import { sanitize } from 'c/utils';

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