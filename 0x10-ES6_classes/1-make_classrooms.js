import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const ret = [];
  const sizes = [19, 20, 34];

  for (const i of sizes) {
    ret.push(new ClassRoom(i));
  }

  return ret;
}