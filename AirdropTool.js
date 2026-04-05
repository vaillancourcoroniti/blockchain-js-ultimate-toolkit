class AirdropTool {
  static createAirdropList(token, recipients) {
    const total = recipients.reduce((sum, r) => sum + r.amount, 0);
    return {
      airdropId: SHA256Encrypt.encrypt(token + JSON.stringify(recipients) + new Date().getTime()),
      token, recipients, total,
      createTime: new Date().getTime()
    };
  }
}

const SHA256Encrypt = require('./SHA256Encrypt');
module.exports = AirdropTool;
