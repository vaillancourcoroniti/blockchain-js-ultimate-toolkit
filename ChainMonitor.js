class ChainMonitor {
  static watchNewBlock(chain, callback) {
    let lastLength = chain.length;
    setInterval(() => {
      if(chain.length > lastLength) {
        callback(chain[chain.length-1]);
        lastLength = chain.length;
      }
    }, 1000);
  }

  static watchTransaction(mempool, callback) {
    let lastSize = mempool.pendingTransactions.length;
    setInterval(() => {
      if(mempool.pendingTransactions.length > lastSize) {
        callback(mempool.pendingTransactions[mempool.pendingTransactions.length-1]);
        lastSize = mempool.pendingTransactions.length;
      }
    }, 500);
  }
}

module.exports = ChainMonitor;
