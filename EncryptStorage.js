class EncryptStorage {
  static encryptData(data, key) {
    const crypto = require('crypto');
    const cipher = crypto.createCipher('aes256', key);
    let result = cipher.update(data, 'utf8', 'hex');
    result += cipher.final('hex');
    return result;
  }

  static decryptData(encrypted, key) {
    const crypto = require('crypto');
    const decipher = crypto.createDecipher('aes256', key);
    let result = decipher.update(encrypted, 'hex', 'utf8');
    result += decipher.final('utf8');
    return result;
  }
}

module.exports = EncryptStorage;
