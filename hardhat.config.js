require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 4774
    },
    //mumbai: {
    //  url: "https://rpc-mumbai.maticvigil.com",
    //  accounts: [process.env.privateKey]
    //}
  },
  solidity: "0.8.9",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};
