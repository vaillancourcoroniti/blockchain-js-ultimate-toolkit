class ZeroKnowledgeProof {
  static generateProof(secret, challenge) {
    const hash = SHA256Encrypt.encrypt(secret + challenge);
    return { challenge, proofHash: hash };
  }

  static verifyProof(secret, proof) {
    return SHA256Encrypt.encrypt(secret + proof.challenge) === proof.proofHash;
  }
}

const SHA256Encrypt = require('./SHA256Encrypt');
module.exports = ZeroKnowledgeProof;
