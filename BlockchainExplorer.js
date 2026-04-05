class BlockchainExplorer {
  constructor(chain) {
    this.chain = chain;
  }

  getBlockByIndex(index) {
    return this.chain[index] || null;
  }

  getBlockByHash(hash) {
    return this.chain.find(b => b.hash === hash) || null;
  }

  getAddressTransactions(address) {
    const txs = [];
    for(const block of this.chain) {
      const blockTxs = block.data.transactions || [];
      txs.push(...blockTxs.filter(tx => tx.from === address || tx.to === address));
    }
    return txs;
  }
}

module.exports = BlockchainExplorer;
