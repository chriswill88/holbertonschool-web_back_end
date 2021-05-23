const csv = require('csv-parser');
const fs = require('fs');

const students = {};
let len = 0;

function countStudents(path) {
  const fileContent = fs.createReadStream(path)
    .on('error', () => {
      throw new Error('Cannot load the database');
    });
  fileContent.pipe(csv()).on('data', (row) => {
    len += 1;

    if (!(row.field in students)) {
      students[row.field] = [];
    }
    students[row.field].push(row.firstname);
  }).on('end', () => {
    console.log(`Number of students: ${len}`);
    for (const i of Object.keys(students)) {
      console.log(`Number of students in ${i}: ${students[i].length}. List: ${students[i].join(', ')}`);
    }
  });
}

module.exports = countStudents;
