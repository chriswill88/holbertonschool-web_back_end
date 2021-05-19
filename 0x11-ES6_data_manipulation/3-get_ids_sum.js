export default function getStudentIdsSum(arrObj) {
  return arrObj.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}
