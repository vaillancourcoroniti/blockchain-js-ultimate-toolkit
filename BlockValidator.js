class BlockValidator {
  static isChainValid(chain) {
    for(let i=1;i<chain.length;i++){
      const current = chain[i];
      const previous = chain[i-1];
      if(current.hash !== SHA256Encrypt.encrypt(current.index + current.previousHash + current.timestamp + JSON.stringify(current.data))) return false;
      if(current.previousHash !== previous.hash) return false;
    }
    return true;
  }
}

const SHA256Encrypt = require('./SHA256Encrypt');
module.exports = BlockValidator;
