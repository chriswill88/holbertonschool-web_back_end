import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let body;
  let fn;
  let ln;

  return uploadPhoto().then((data) => {
    body = data.body;
    createUser().then((data) => {
      fn = data.firstName;
      ln = data.lastName;
      console.log(body, fn, ln);
    }, () => console.log('Signup system offline'));
  }, () => console.log('Signup system offline'));
}
