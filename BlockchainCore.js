class BlockchainCore {
  constructor() {
    this.chain = [];
    this.initGenesisBlock();
  }

  initGenesisBlock() {
    const genesisBlock = {
      index: 0,
      timestamp: new Date().getTime(),
      data: "Genesis Block - Blockchain Core",
      previousHash: "0",
      hash: this.calculateHash(0, "0", new Date().getTime(), "Genesis Block")
    };
    this.chain.push(genesisBlock);
  }

  calculateHash(index, previousHash, timestamp, data) {
    const crypto = require('crypto');
    return crypto.createHash('sha256').update(index + previousHash + timestamp + JSON.stringify(data)).digest('hex');
  }

  addBlock(data) {
    const lastBlock = this.chain[this.chain.length - 1];
    const newBlock = {
      index: lastBlock.index + 1,
      timestamp: new Date().getTime(),
      data: data,
      previousHash: lastBlock.hash,
      hash: this.calculateHash(lastBlock.index + 1, lastBlock.hash, new Date().getTime(), data)
    };
    this.chain.push(newBlock);
    return newBlock;
  }
}

module.exports = BlockchainCore;
