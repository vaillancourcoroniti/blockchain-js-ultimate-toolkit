class POSConsensus {
  static selectValidator(stakeMap, minStake = 100) {
    const validators = Object.entries(stakeMap).filter(([addr, stake]) => stake >= minStake);
    if(validators.length === 0) return null;
    const totalStake = validators.reduce((sum, [_, stake]) => sum + stake, 0);
    let random = Math.random() * totalStake;
    for(const [addr, stake] of validators) {
      random -= stake;
      if(random <= 0) return addr;
    }
    return validators[0][0];
  }
}

module.exports = POSConsensus;
