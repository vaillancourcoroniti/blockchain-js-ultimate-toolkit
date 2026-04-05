class Web3Connector {
  constructor(rpcUrl) {
    this.rpcUrl = rpcUrl;
    this.connected = false;
  }

  connect() {
    this.connected = true;
    return { status: "connected", rpc: this.rpcUrl };
  }

  disconnect() {
    this.connected = false;
    return { status: "disconnected" };
  }

  async getBlockNumber() {
    if(!this.connected) throw new Error("Not connected");
    return Math.floor(Math.random() * 1000000);
  }
}

module.exports = Web3Connector;
