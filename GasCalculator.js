class GasCalculator {
  static calculateGas(operation, complexity = 1) {
    const baseFee = {
      transfer: 21000,
      contractDeploy: 100000,
      contractCall: 50000
    };
    return baseFee[operation] * complexity || 0;
  }

  static calculateTotalFee(gas, gasPrice = 1e-9) {
    return gas * gasPrice;
  }
}

module.exports = GasCalculator;
