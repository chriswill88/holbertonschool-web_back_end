export default function guardrail(mathFunction) {
  var queue = [];

  const promise = Promise.resolve(mathFunction());
  console.log(promise);

  promise.then((data) => {
      queue.push(data);
    })
    .catch((err) => {
      queue.push(err);
    })
    .finally(() => {
      queue.push('Guardrail was processed');
      return queue;
    });

  return promise.resolve();
}