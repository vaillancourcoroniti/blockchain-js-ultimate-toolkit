class AddressCheck {
  static isValidAddress(address) {
    if(typeof address !== 'string') return false;
    if(address.length !== 42) return false;
    return /^[0-9a-fA-F]+$/.test(address);
  }

  static formatAddress(address) {
    if(!this.isValidAddress(address)) return null;
    return address.toLowerCase();
  }
}

module.exports = AddressCheck;
