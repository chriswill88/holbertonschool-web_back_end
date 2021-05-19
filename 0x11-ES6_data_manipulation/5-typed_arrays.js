export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer, 0);

  view.setInt8(position, value);

  console.log(Buffer.byteLength);
  if (buffer.byteLength <= position) {
    throw new Error('Position outside range');
  }

  return view;
}