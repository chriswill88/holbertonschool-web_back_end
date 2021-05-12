import uploadPhoto from './5-photo-reject';
import signUpUser from "./4-user-promise";

export default function handleProfileSignup(firstName, lastName, fileName) {
  const names = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);
  return [names, photo];
}