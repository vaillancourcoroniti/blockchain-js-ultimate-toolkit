class ChainAnalytics {
  static getTotalTransactions(chain) {
    return chain.reduce((sum, block) => sum + (block.data.transactions?.length || 0), 0);
  }

  static getAddressActivity(chain, address) {
    let count = 0;
    for(const block of chain) {
      const txs = block.data.transactions || [];
      count += txs.filter(tx => tx.from === address || tx.to === address).length;
    }
    return count;
  }
}

module.exports = ChainAnalytics;
