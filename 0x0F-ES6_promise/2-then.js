import getFullResponseFromAPI from './1-promise';

export default function handleResponseFromAPI(promise) {
  getFullResponseFromAPI(promise);

  promise.catch('Got a response from the API');
}
