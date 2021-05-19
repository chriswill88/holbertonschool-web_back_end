export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer, 0);

  try {
    view.setInt8(position, value);
  } catch (err) {
    throw new Error('Position outside range');
  }

  return view;
}
