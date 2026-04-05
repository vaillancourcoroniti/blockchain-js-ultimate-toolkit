class SmartContractBase {
  constructor(contractName, creator) {
    this.contractId = SHA256Encrypt.encrypt(creator + contractName + new Date().getTime());
    this.contractName = contractName;
    this.creator = creator;
    this.createTime = new Date().getTime();
    this.isActive = true;
  }

  destroy() {
    this.isActive = false;
  }

  getInfo() {
    return {
      id: this.contractId,
      name: this.contractName,
      creator: this.creator,
      active: this.isActive
    };
  }
}

const SHA256Encrypt = require('./SHA256Encrypt');
module.exports = SmartContractBase;
