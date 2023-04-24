"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const hardhat_1 = require("hardhat");
describe("WallOfPosts", function () {
    it("the hash of post created in contract is equal to the one we sent to contract", async function () {
        const ourContract = await hardhat_1.ethers.getContractFactory("WallOfPosts");
        const contract = await ourContract.deploy();
        await contract.deployed();
        const note = 'This is a note', imageHash = 'QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco';
        const newPost = await contract.newPost(note, imageHash);
        await newPost.wait();
        let posts = await contract.getAllPosts();
        console.log(posts[0].imageHash);
        (0, chai_1.expect)(posts[0].imageHash).to.equal(imageHash);
    });
});
