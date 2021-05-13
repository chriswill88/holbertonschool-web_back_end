import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const names = signUpUser(firstName, lastName).then((value) => value, (err) => err.value);
  const photo = uploadPhoto(fileName).then((value) => value, (err) => err.value);
  return Promise.allSettled([names, photo]);
}
