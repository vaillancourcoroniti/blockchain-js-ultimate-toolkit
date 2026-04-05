class BlockMiner {
  static mineBlockWithConsensus(block, consensusType = "pow", difficulty = 4) {
    if(consensusType === "pow") {
      return POWConsensus.mineBlock(block, difficulty);
    } else if(consensusType === "pos") {
      return { hash: SHA256Encrypt.encrypt(JSON.stringify(block)), nonce: 0 };
    }
  }
}

const POWConsensus = require('./POWConsensus');
const SHA256Encrypt = require('./SHA256Encrypt');
module.exports = BlockMiner;
