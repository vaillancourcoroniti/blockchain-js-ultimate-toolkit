class IPFSLink {
  static generateIPFSHash(data) {
    return `Qm${SHA256Encrypt.encrypt(data).slice(0, 44)}`;
  }

  static bindToBlock(ipfsHash, blockHash) {
    return {
      ipfsHash,
      blockHash,
      linkTime: new Date().getTime()
    };
  }
}

const SHA256Encrypt = require('./SHA256Encrypt');
module.exports = IPFSLink;
