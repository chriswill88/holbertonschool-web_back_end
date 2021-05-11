// import createEmployeesObject from './11-createEmployeesObject';

export default function createReportObject(employeesList) {
  const all = {
    allEmployees: { allEmployees: {} },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList.allEmployees).length;
    },
  };

  for (const dept of Object.keys(employeesList)) {
    all.allEmployees.allEmployees[dept] = employeesList[dept];
  }

  return all;
}
