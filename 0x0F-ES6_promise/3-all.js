import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const body = uploadPhoto();
  const fullname = createUser();

  Promise.all([body, fullname]).then((values) => {
    console.log(values[0].body, values[1].firstName, values[1].lastName);
  }, () => console.log('Signup system offline'));
}
