class LightNode {
  constructor() {
    this.blockHeaders = [];
  }

  addHeader(header) {
    this.blockHeaders.push(header);
  }

  verifyTransaction(merkleRoot, txHash, proof) {
    let current = txHash;
    for(const p of proof) {
      current = SHA256Encrypt.encrypt(current + p);
    }
    return current === merkleRoot;
  }
}

const SHA256Encrypt = require('./SHA256Encrypt');
module.exports = LightNode;
