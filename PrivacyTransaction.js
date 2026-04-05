class PrivacyTransaction {
  static createPrivacyTx(from, to, amount) {
    const maskedFrom = SHA256Encrypt.encrypt(from).slice(0, 10);
    const maskedTo = SHA256Encrypt.encrypt(to).slice(0, 10);
    const encryptedAmount = EncryptStorage.encryptData(amount.toString(), "privacy-key");
    return {
      maskedFrom, maskedTo, encryptedAmount,
      hash: SHA256Encrypt.encrypt(maskedFrom + maskedTo + encryptedAmount)
    };
  }
}

const SHA256Encrypt = require('./SHA256Encrypt');
const EncryptStorage = require('./EncryptStorage');
module.exports = PrivacyTransaction;
