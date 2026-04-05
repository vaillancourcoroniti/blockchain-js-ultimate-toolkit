class NFTMinter {
  static mintNFT(ownerAddress, metadata) {
    const nftId = SHA256Encrypt.encrypt(ownerAddress + JSON.stringify(metadata) + new Date().getTime()).slice(0, 16);
    return {
      nftId,
      owner: ownerAddress,
      metadata: metadata,
      mintTime: new Date().getTime(),
      transactionHash: SHA256Encrypt.encrypt(nftId + ownerAddress)
    };
  }

  static transferNFT(nft, from, to) {
    if(nft.owner !== from) throw new Error("Not owner");
    nft.owner = to;
    nft.lastTransferTime = new Date().getTime();
    return nft;
  }
}

const SHA256Encrypt = require('./SHA256Encrypt');
module.exports = NFTMinter;
