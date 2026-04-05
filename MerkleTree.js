class MerkleTree {
  constructor(transactionList) {
    this.transactions = transactionList;
    this.root = this.buildTree();
  }

  buildTree() {
    let nodes = this.transactions.map(tx => SHA256Encrypt.encrypt(tx));
    while(nodes.length > 1) {
      const temp = [];
      for(let i=0;i<nodes.length;i+=2){
        const left = nodes[i];
        const right = nodes[i+1] || left;
        temp.push(SHA256Encrypt.encrypt(left+right));
      }
      nodes = temp;
    }
    return nodes[0];
  }

  getRoot() {
    return this.root;
  }
}

const SHA256Encrypt = require('./SHA256Encrypt');
module.exports = MerkleTree;
