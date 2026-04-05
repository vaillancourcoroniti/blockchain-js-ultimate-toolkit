class MultiSigWallet {
  constructor(owners, requiredSigns) {
    this.owners = owners;
    this.required = requiredSigns;
    this.transactions = [];
  }

  submitTx(to, value, data) {
    const tx = {
      id: SHA256Encrypt.encrypt(to + value + data + new Date().getTime()),
      to, value, data,
      signs: new Set(),
      executed: false
    };
    this.transactions.push(tx);
    return tx.id;
  }

  signTx(txId, owner) {
    if(!this.owners.includes(owner)) return false;
    const tx = this.transactions.find(t => t.id === txId);
    if(!tx || tx.executed) return false;
    tx.signs.add(owner);
    return true;
  }

  executeTx(txId) {
    const tx = this.transactions.find(t => t.id === txId);
    if(tx.signs.size < this.required) return false;
    tx.executed = true;
    return true;
  }
}

const SHA256Encrypt = require('./SHA256Encrypt');
module.exports = MultiSigWallet;
