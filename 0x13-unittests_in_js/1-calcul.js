function calculateNumber(type, a, b) {
  types = {
    'SUM': (a, b) => a + b,
    'SUBTRACT': (a, b) => a - b,
    'DIVIDE': (a, b) => a / b,
  }

  if (type === 'DIVIDE') {
    if (b === 0) {
      return 'Error';
    }
  }
  return types[type](Math.round(a), Math.round(b));
}

module.exports = calculateNumber;