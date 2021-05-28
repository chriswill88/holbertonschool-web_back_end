class Utils {
  static calculateNumber(type, a, b) {
    const types = {
      'SUM': (a, b) => a + b,
      'SUBTRACT': (a, b) => a - b,
      'DIVIDE': (a, b) => a / b,
    }

    a = Math.round(a)
    b = Math.round(b)

    if (type === 'DIVIDE') {
      if (b === 0) {
        return 'Error';
      }
    }
    return types[type](a, b);
  }
}

module.exports = Utils;