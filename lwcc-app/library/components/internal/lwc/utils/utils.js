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
