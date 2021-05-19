export default function getListStudentIds(arrObj) {
  let ind = 0;
  const mymap = new Map();

  if (typeof arrObj !== 'object') {
    return [];
  }

  for (const obj of arrObj) {
    mymap.set(`ind-${ind}`, obj.id);
    ind += 1;
  }

  return Array.from(mymap.values());
}