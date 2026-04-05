class TransactionSign {
  static signTransaction(transaction, privateKey) {
    const crypto = require('crypto');
    const sign = crypto.createSign('SHA256');
    sign.update(JSON.stringify(transaction)).end();
    return sign.sign(privateKey, 'hex');
  }

  static verifyTransaction(transaction, signature, publicKey) {
    const crypto = require('crypto');
    const verify = crypto.createVerify('SHA256');
    verify.update(JSON.stringify(transaction)).end();
    return verify.verify(publicKey, signature, 'hex');
  }
}

module.exports = TransactionSign;
