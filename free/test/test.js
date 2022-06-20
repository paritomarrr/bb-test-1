const { expect } = require("chai");
const {ethers} = require('hardhat')

// ethers.getContractFactory
describe("MyCryptoLions", function () {
  it("Should return the right name and symbol", async function () {
    const MyCryptoLions = await ethers.getContractFactory("MyCryptoLions");
    const myCryptoLions = await MyCryptoLions.deploy("MyCryptoLions", "MCL");

    await myCryptoLions.deployed();
    expect(await myCryptoLions.name()).to.equal("MyCryptoLions");
    expect(await myCryptoLions.symbol()).to.equal("MCL");
  });
});