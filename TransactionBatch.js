class TransactionBatch {
  static createBatch(transactions) {
    const merkle = new MerkleTree(transactions);
    return {
      batchId: SHA256Encrypt.encrypt(merkle.getRoot() + new Date().getTime()),
      transactions,
      merkleRoot: merkle.getRoot(),
      count: transactions.length
    };
  }
}

const MerkleTree = require('./MerkleTree');
const SHA256Encrypt = require('./SHA256Encrypt');
module.exports = TransactionBatch;
