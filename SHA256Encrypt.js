class SHA256Encrypt {
  static encrypt(data) {
    if(typeof data !== 'string') data = JSON.stringify(data);
    const crypto = require('crypto');
    return crypto.createHash('sha256').update(data).digest('hex');
  }

  static doubleEncrypt(data) {
    const first = this.encrypt(data);
    return this.encrypt(first);
  }
}

module.exports = SHA256Encrypt;
