const http = require('http');
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

function countStudents(path) {
  let str;

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

    str = `Number of students: ${len}\n`;
    for (const i of Object.keys(student)) {
      str += `Number of students in ${i}: ${student[i].length}. List: ${student[i].join(', ')}\n`;
    }
    return str.slice(0, -1);
  }).catch(() => 'Cannot load the database');
}

const app = http.createServer(async (req, res) => {
  let students;
  res.writeHead(200, 'Content-Type', 'text/plain');
  switch (req.url) {
    case '/students':
      students = await countStudents(process.argv[2]);
      res.write(`This is the list of our students\n${students}`);
      res.end();
      break;

    default:
      res.write('Hello Holberton School!');
      res.end();
      break;
  }
}).listen(1245);

module.exports = app;
