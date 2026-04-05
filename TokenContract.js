class TokenContract {
  constructor(name, symbol, totalSupply, creator) {
    this.name = name;
    this.symbol = symbol;
    this.totalSupply = totalSupply;
    this.balances = { [creator]: totalSupply };
  }

  transfer(from, to, amount) {
    if(this.balances[from] < amount) return false;
    this.balances[from] -= amount;
    this.balances[to] = (this.balances[to] || 0) + amount;
    return true;
  }

  balanceOf(address) {
    return this.balances[address] || 0;
  }
}

module.exports = TokenContract;
