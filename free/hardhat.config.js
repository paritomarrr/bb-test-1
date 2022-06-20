/**
 * @type import('hardhat/config').HardhatUserConfig
 */

 require('dotenv').config();

 require("@nomiclabs/hardhat-waffle");
// const {API_URL, PRIVATE_KEY} = process.env;
const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.1",
  defaultNetwork: "development",
  networks: {
    hardhat: {},
    development: {
      url: 'https://backend.buildbear.io/node/d906f123fab18f790f5580c609d2a141a0c7de02',
      // accounts: [`0x${PRIVATE_KEY}`]
  }
  }
};
