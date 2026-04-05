class DPOSConsensus {
  static electWitnesses(votes, witnessCount = 21) {
    const sorted = Object.entries(votes).sort((a,b) => b[1] - a[1]);
    return sorted.slice(0, witnessCount).map(item => item[0]);
  }

  static selectBlockProducer(witnesses) {
    return witnesses[Math.floor(Math.random() * witnesses.length)];
  }
}

module.exports = DPOSConsensus;
