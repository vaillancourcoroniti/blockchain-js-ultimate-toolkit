class ContractExecutor {
  static execute(contract, method, params) {
    if(!contract.isActive) throw new Error("Contract destroyed");
    if(typeof contract[method] !== 'function') throw new Error("Method not found");
    return contract[method](...params);
  }
}

module.exports = ContractExecutor;
