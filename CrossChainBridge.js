class CrossChainBridge {
  static lockAsset(chainFrom, address, amount) {
    return {
      lockId: SHA256Encrypt.encrypt(chainFrom + address + amount + new Date().getTime()),
      chain: chainFrom,
      user: address,
      amount: amount,
      status: "locked"
    };
  }

  static mintAsset(chainTo, lockData) {
    if(lockData.status !== "locked") throw new Error("Asset not locked");
    return {
      mintId: SHA256Encrypt.encrypt(lockData.lockId + chainTo),
      chain: chainTo,
      user: lockData.user,
      amount: lockData.amount,
      status: "minted"
    };
  }
}

const SHA256Encrypt = require('./SHA256Encrypt');
module.exports = CrossChainBridge;
