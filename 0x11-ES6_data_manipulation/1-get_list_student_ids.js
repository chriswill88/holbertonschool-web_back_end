export default function getListStudentIds(arrObj) {
  if (arrObj instanceof Array) {
    const arrId = arrObj.map((x) => x.id);
    return arrId;
  }
  return [];
}