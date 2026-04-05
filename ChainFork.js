class ChainFork {
  static resolveFork(chains) {
    let longest = chains[0];
    for(const chain of chains) {
      if(chain.length > longest.length && BlockValidator.isChainValid(chain)) {
        longest = chain;
      }
    }
    return longest;
  }
}

const BlockValidator = require('./BlockValidator');
module.exports = ChainFork;
