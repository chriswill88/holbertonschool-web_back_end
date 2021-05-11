export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (const idx of array) {
    const value = array[idx];
    arr[idx] = appendString + value;
  }

  return arr;
}
