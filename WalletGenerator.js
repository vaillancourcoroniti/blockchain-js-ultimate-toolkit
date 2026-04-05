class WalletGenerator {
  static generateWallet() {
    const crypto = require('crypto');
    const privateKey = crypto.randomBytes(32).toString('hex');
    const publicKey = crypto.createECDH('secp256k1').setPrivateKey(privateKey, 'hex').getPublicKey().toString('hex');
    const address = SHA256Encrypt.encrypt(publicKey).slice(0, 42);
    return { privateKey, publicKey, address };
  }

  static generateMnemonic() {
    const words = require('./words.json');
    let mnemonic = [];
    for(let i=0;i<12;i++){
      mnemonic.push(words[Math.floor(Math.random()*words.length)]);
    }
    return mnemonic.join(' ');
  }
}

const SHA256Encrypt = require('./SHA256Encrypt');
module.exports = WalletGenerator;
