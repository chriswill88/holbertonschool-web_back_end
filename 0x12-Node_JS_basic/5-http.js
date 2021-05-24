const http = require('http');
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
let str = 'This is the list of our students\n';

function countStudents(path) {
  return readFile(path, 'utf8').then((data) => {
    const student = {};
    let len = 0;

    const datalines = data.split('\n');
    const students = datalines.slice(1).map((line) => line.split(',')).filter((line) => line.length > 0 && line[0] !== '');

    for (const line of students) {
      len += 1;
      if (!(line[3] in student)) {
        student[line[3]] = [];
      }
      student[line[3]].push(line[0]);
    }

    str += `Number of students: ${len}\n`;
    for (const i of Object.keys(student)) {
      str += `Number of students in ${i}: ${student[i].length}. List: ${student[i].join(', ')}\n`;
    }
    return str.slice(0, -1);
  }).catch(() => {
    throw new Error('Cannot load the database');
  });
}

const app = http.createServer(async (req, res) => {
  let students;
  res.setHeader('Content-Type', 'text/plain');
  switch (req.url) {
    case '/students':
      res.writeHead(200);
      students = await countStudents(process.argv[2]);
      res.end(students);
      break;

    case '/':
      res.writeHead(200);
      res.end('Hello Holberton School!');
      break;

    default:
      res.end();
      break;
  }
}).listen(1245);

module.exports = app;
