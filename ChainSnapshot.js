class ChainSnapshot {
  static takeSnapshot(chain) {
    return {
      snapshotId: SHA256Encrypt.encrypt(new Date().getTime() + JSON.stringify(chain[chain.length-1].hash)),
      snapshotTime: new Date().getTime(),
      lastBlockIndex: chain.length-1,
      chainHash: chain[chain.length-1].hash,
      data: JSON.stringify(chain)
    };
  }

  static restoreSnapshot(snapshot) {
    return JSON.parse(snapshot.data);
  }
}

const SHA256Encrypt = require('./SHA256Encrypt');
module.exports = ChainSnapshot;
