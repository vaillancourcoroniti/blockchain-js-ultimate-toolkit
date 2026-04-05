class BlockTime {
  static adjustBlockTime(chain, targetInterval = 10000) {
    const lastBlock = chain[chain.length-1];
    const prevBlock = chain[chain.length-2] || lastBlock;
    const actual = lastBlock.timestamp - prevBlock.timestamp;
    return {
      actualInterval: actual,
      targetInterval,
      adjustment: actual > targetInterval ? "slow down" : "speed up"
    };
  }
}

module.exports = BlockTime;
