import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const names = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);
  return Promise.allSettled([names, photo]).then((value) => value).catch(() => ({
    status: 'rejected',
    value: 'Error: Gerald.jpg cannot be processed',
  }));
}
