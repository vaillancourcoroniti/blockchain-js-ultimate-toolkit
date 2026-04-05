class ChainPeer {
  constructor() {
    this.peers = [];
  }

  addPeer(peerAddress) {
    if(!this.peers.includes(peerAddress)) this.peers.push(peerAddress);
  }

  removePeer(peerAddress) {
    this.peers = this.peers.filter(p => p !== peerAddress);
  }

  syncChain(localChain, peerChain) {
    if(peerChain.length > localChain.length && BlockValidator.isChainValid(peerChain)) {
      return peerChain;
    }
    return localChain;
  }
}

const BlockValidator = require('./BlockValidator');
module.exports = ChainPeer;
