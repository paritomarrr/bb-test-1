/**
 * @type import('hardhat/config').HardhatUserConfig
 */

//  require('dotenv').config();

 require("@nomiclabs/hardhat-waffle");
// const {API_URL, PRIVATE_KEY} = process.env;


module.exports = {
  solidity: "0.8.1",
  defaultNetwork: "development",
  networks: {
    hardhat: {},
    development: {
      url: 'https://backend.buildbear.io/node/4577a41521eba79329f96c8098186a6257473b75',
      // accounts: [`0x${PRIVATE_KEY}`]
  }
  }
};
