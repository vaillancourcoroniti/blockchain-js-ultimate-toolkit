class SmartContractAudit {
  static auditContract(contract) {
    const issues = [];
    if(!contract.contractId) issues.push("Missing contract ID");
    if(!contract.creator) issues.push("Missing creator address");
    if(contract.isActive === undefined) issues.push("Missing active status");
    return {
      contractId: contract.contractId || "unknown",
      auditTime: new Date().getTime(),
      issues,
      score: issues.length === 0 ? 100 : 100 - issues.length * 20
    };
  }
}

module.exports = SmartContractAudit;
