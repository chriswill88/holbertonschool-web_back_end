// import createEmployeesObject from './11-createEmployeesObject';

export default function createReportObject(employeesList) {
  const all = {
    allEmployees: {},
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };

  for (const dept of Object.keys(employeesList)) {
    all.allEmployees[dept] = employeesList[dept];
  }

  return all;
}