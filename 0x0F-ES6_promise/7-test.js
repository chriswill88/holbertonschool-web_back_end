import loadBalancer from './7-load_balancer';

test('loadBalancer returns the value of the fastest promise', async() => {
  const chinaSuccess = 'Downloading from China is faster';
  const USASuccess = 'Downloading from USA is faster';

  const promiseChina = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, chinaSuccess);
  });

  const promiseSlowChina = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, chinaSuccess);
  });

  const promiseUSA = new Promise((resolve, reject) => {
    setTimeout(resolve, 300, USASuccess);
  });

  const value = await loadBalancer(promiseChina, promiseUSA);
  expect(value).toStrictEqual('Downloading from China is faster');

  const value2 = await loadBalancer(promiseSlowChina, promiseUSA);
  expect(value2).toStrictEqual('Downloading from USA is faster');
});

test()