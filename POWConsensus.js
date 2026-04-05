class POWConsensus {
  static mineBlock(block, difficulty = 4) {
    const target = '0'.repeat(difficulty);
    let nonce = 0;
    let hash;
    while(true) {
      hash = SHA256Encrypt.encrypt(block.index + block.previousHash + block.timestamp + JSON.stringify(block.data) + nonce);
      if(hash.startsWith(target)) break;
      nonce++;
    }
    return { hash, nonce };
  }
}

const SHA256Encrypt = require('./SHA256Encrypt');
module.exports = POWConsensus;
