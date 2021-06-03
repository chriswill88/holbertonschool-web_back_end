const redis = require("redis");
const client = redis.createClient();
const { promisify } = require('util');

const getAsync = promisify(client.get).bind(client);


client.on("error", function(error) {
  console.log(`Redis client not connected to the server: ${error}`);
});

client.on("connect", function() {
  console.log(`Redis client connected to the server`);
});


function setNewSchool(schoolName, value) {
  client.set(schoolName, value, redis.print);
}

function displaySchoolValue(schoolName) {
  getAsync(schoolName).then((lol) => console.log(lol))
}


displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');