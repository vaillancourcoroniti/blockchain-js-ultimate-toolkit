class DIDGenerator {
  static generateDID(blockchainAddress) {
    if(!AddressCheck.isValidAddress(blockchainAddress)) return null;
    const did = `did:web3:${blockchainAddress}`;
    return {
      did,
      address: blockchainAddress,
      createTime: new Date().getTime(),
      proof: SHA256Encrypt.encrypt(did)
    };
  }
}

const AddressCheck = require('./AddressCheck');
const SHA256Encrypt = require('./SHA256Encrypt');
module.exports = DIDGenerator;
