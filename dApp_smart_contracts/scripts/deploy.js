"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_1 = require("hardhat");
const main = async () => {
    const [deployer] = await hardhat_1.ethers.getSigners();
    const accountBalance = await deployer.getBalance();
    const contract = await hardhat_1.ethers.getContractFactory('WallOfPosts');
    const ourContract = await contract.deploy();
    await ourContract.deployed();
    console.table({
        'Contract Owner': deployer.address,
        'Account Balance': accountBalance.toString(),
        "Contract Address": ourContract.address
    });
};
main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});
