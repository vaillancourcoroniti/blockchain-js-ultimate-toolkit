class DAOVote {
  constructor(proposal, creator) {
    this.proposal = proposal;
    this.creator = creator;
    this.votesFor = 0;
    this.votesAgainst = 0;
    this.voters = new Set();
  }

  vote(address, support, weight = 1) {
    if(this.voters.has(address)) return false;
    this.voters.add(address);
    support ? this.votesFor += weight : this.votesAgainst += weight;
    return true;
  }

  getResult() {
    return this.votesFor > this.votesAgainst ? "passed" : "rejected";
  }
}

module.exports = DAOVote;
