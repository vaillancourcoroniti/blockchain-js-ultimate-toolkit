class TokenLock {
  constructor(beneficiary, amount, unlockTime) {
    this.beneficiary = beneficiary;
    this.amount = amount;
    this.unlockTime = unlockTime;
    this.released = false;
  }

  release() {
    if(new Date().getTime() < this.unlockTime) return false;
    if(this.released) return false;
    this.released = true;
    return true;
  }

  getStatus() {
    const now = new Date().getTime();
    return now >= this.unlockTime ? "ready" : "locked";
  }
}

module.exports = TokenLock;
