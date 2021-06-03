const kue = require('kue')
const queue = kue.createQueue();

const jobject = {
  phoneNumber: '2039992838',
  message: 'the message',
}

const job = queue.create('push_notification_code', jobject).save()

job.on('enqueue', () => {
  console.log(`Notification job created: ${job.id}`);
}).on('complete', () => {
  console.log(`Notification job completed`);
}).on('failed attempt', () => {
  console.log(`Notification job failed`);
})