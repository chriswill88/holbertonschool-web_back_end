import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const names = signUpUser(firstName, lastName).then((value) => {
    return value;
  }, (err) => {
    return err.value;
  });
  const photo = uploadPhoto(fileName).then((value) => {
    return value;
  }, (err) => {
    return err;
  });
  return Promise.allSettled([names, photo]).then((value) => {
    console.log(value.value);
  });
}