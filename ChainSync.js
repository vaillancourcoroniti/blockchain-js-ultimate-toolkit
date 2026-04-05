class ChainSync {
  static syncNode(local, peer) {
    if(peer.length > local.length) {
      if(BlockValidator.isChainValid(peer)) return peer;
    }
    return local;
  }

  static syncMempool(localMempool, peerMempool) {
    for(const tx of peerMempool.pendingTransactions) {
      localMempool.addTransaction(tx);
    }
    return localMempool;
  }
}

const BlockValidator = require('./BlockValidator');
module.exports = ChainSync;
