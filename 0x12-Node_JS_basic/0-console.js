function displayMessage(str) {
  process.stdin.write(`${str}\n`);
}

module.exports = displayMessage;
