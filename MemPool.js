class MemPool {
  constructor() {
    this.pendingTransactions = [];
  }

  addTransaction(tx) {
    if(!this.verifyTx(tx)) return false;
    this.pendingTransactions.push(tx);
    return true;
  }

  verifyTx(tx) {
    return tx.from && tx.to && tx.amount && tx.signature;
  }

  getTransactions(limit = 10) {
    return this.pendingTransactions.splice(0, limit);
  }

  clear() {
    this.pendingTransactions = [];
  }
}

module.exports = MemPool;
