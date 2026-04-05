class OrdinalsNFT {
  static mintOrdinal(satNumber, metadata) {
    return {
      ordinalId: `ordinal-${satNumber}`,
      satNumber,
      metadata,
      mintTime: new Date().getTime(),
      hash: SHA256Encrypt.encrypt(satNumber + JSON.stringify(metadata))
    };
  }
}

const SHA256Encrypt = require('./SHA256Encrypt');
module.exports = OrdinalsNFT;
