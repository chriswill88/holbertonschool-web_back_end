import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const names = signUpUser(firstName, lastName).then((value) => value);
  const photo = uploadPhoto(fileName).then((value) => value, (err) => ({ status: 'rejected', value: `Error: ${err.message}` }));
  return Promise.allSettled([names, photo]).then((value) => [value[0], value[1].value]);
}
