export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const ints = new Int8Array(buffer);

  if (buffer.byteLength > position) {
    ints[position] = value;
  } else {
    throw new Error('Position outside range');
  }

  const DataView = {
    byteLength: length,
    byteOffset: 0,
    buffer,
  };

  return DataView;
}
