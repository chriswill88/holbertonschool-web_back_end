export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;

    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;

    // if (typeof students !== 'object') {
    //   throw new TypeError('Students must be a array of strings');
    // }
    // if (students.some((s) => typeof s !== 'string')) {
    //   throw new TypeError('Students must be a array of strings');
    // }
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(name) {
    // if (typeof name !== 'string') {
    //   throw new TypeError('Name must be a string');
    // }
    this._name = name;
  }

  set length(length) {
    // if (typeof length !== 'string') {
    //   throw new TypeError('Length must be a number');
    // }
    this._length = length;
  }

  set students(student) {
    // if (typeof student !== 'string') {
    //   throw new TypeError('student must be a string');
    // }
    this._students.push(student);
  }
}
