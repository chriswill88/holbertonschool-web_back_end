export default function handleResponseFromAPI(promise) {
  function res() {
    return {
      status: 200,
      body: 'success',
    };
  }

  function rej() {
    return Error('');
  }

  promise.then(res, rej);
  promise.catch(() => console.log('Got a response from the API'));
  promise.finally(() => console.log('Got a response from the API'));
}