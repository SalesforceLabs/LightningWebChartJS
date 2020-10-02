export function sanitize(attribute) {
  let value = attribute;
  if (value) {
    try {
      value = JSON.parse(value.replace(/\\/g, ''));
    } catch (e) {
      /* Silently */
    }
  }
  return value;
}

/**
 * Parse the received value into a boolean. This is required because
 * LWC does not allow boolean values directly in the markup
 * @param {string | boolean} value A true / false value, in string or boolean format
 * @returns The boolean parsed value
 */
export function parseBoolean(value) {
  return typeof value == 'string' ? value === 'true' : value;
}
