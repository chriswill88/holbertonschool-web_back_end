export default function getStudentsByLocation(arrObj, city) {
  const result = arrObj.filter((stud) => stud.location === city);
  return result;
}
