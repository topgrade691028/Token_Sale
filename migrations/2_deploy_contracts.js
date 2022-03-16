var DappToken = artifacts.require("./DappToken.sol");
var DappTokenSale = artifacts.require("./DappTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(DappToken, 1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 10000000000;
    console.log(DappToken.address);
    return deployer.deploy(DappTokenSale, DappToken.address, tokenPrice);
  });
};
