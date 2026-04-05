class SecretSharing {
  static splitSecret(secret, parts = 5, threshold = 3) {
    const shards = [];
    for(let i=1;i<=parts;i++){
      shards.push({
        index: i,
        data: SHA256Encrypt.encrypt(secret + i).slice(0, 16)
      });
    }
    return { shards, threshold };
  }
}

const SHA256Encrypt = require('./SHA256Encrypt');
module.exports = SecretSharing;
