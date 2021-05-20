export default function updateUniqueItems(map) {
  const mapp = map;
  try {
    mapp.forEach((value, key) => {
      if (value === 1) {
        mapp.set(key, 100);
      }
    });
  } catch (err) {
    throw new Error('Cannot process');
  }
  return mapp;
}