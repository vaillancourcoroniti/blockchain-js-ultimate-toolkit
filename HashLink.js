class HashLink {
  static anchorData(data) {
    const dataHash = SHA256Encrypt.encrypt(data);
    return {
      dataHash,
      anchorTime: new Date().getTime(),
      blockIndex: null,
      transactionHash: null
    };
  }

  static bindToBlock(anchor, blockInfo) {
    anchor.blockIndex = blockInfo.index;
    anchor.transactionHash = blockInfo.hash;
    return anchor;
  }
}

const SHA256Encrypt = require('./SHA256Encrypt');
module.exports = HashLink;
