const createPushNotificationsJobs = require('8-job');
const queue = require('kue').createQueue();

const jobs = [{
    phoneNumber: '4153518780',
    message: 'This is the code 1234 to verify your account'
  },
  {
    phoneNumber: '4153518781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4153518743',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4153538781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4153118782',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4153718781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4159518782',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4158718781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4153818782',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4154318781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4151218782',
    message: 'This is the code 4321 to verify your account'
  }
];

before(function() {
  queue.testMode.enter();
});

afterEach(function() {
  queue.testMode.clear();
});

after(function() {
  queue.testMode.exit()
});



it('does something cool', function() {
  createPushNotificationsJobs(jobs, queue)
    //   expect(queue.testMode.jobs.length).to.equal(2);
    //   expect(queue.testMode.jobs[0].type).to.equal('myJob');
    //   expect(queue.testMode.jobs[0].data).to.eql({ foo: 'bar' });
});