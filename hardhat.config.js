require('@nomiclabs/hardhat-waffle');
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config({path: 'C:/Users/Kévin/Documents/dApp/epic-nfts/keys.env'});

module.exports = {
  solidity: '0.8.0',

  networks: {
    rinkeby: {
      url: process.env.STAGING_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  },

  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY,
  }
};
