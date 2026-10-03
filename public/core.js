export function createCounter({ limit = 5, onCount = () => {} } = {}) {
  if (!Number.isSafeInteger(limit) || limit < 0) throw new RangeError('Limit must be a nonnegative safe integer.');
  if (typeof onCount !== 'function') throw new TypeError('onCount must be a function.');
  let next = 0; // New lexical state for every factory call.
  return function count() {
    const emitted = next;
    // Advance before notifying: nested callback calls see the next value.
    next = emitted === limit ? 0 : emitted + 1;
    onCount(emitted);
    return emitted;
  };
}
