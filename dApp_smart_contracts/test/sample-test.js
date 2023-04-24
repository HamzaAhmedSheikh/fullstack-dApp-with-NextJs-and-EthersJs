"use strict";
/** This code is an example of a test case written using the Mocha testing framework and the Chai assertion library for a
 * Solidity smart contract called "Greeter".
 * **/
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const hardhat_1 = require("hardhat");
/***
 * The "describe" function is used to group related test cases together under a common heading, and the
 * "it" function is used to define individual test cases with a descriptive name. In this case, the test case is checking whether the
 *  contract's "greet" function returns the expected value after the contract's "setGreeting" function is called.
 * * */
describe("Greeter", function () {
    it("Should return the new greeting once it's changed", async function () {
        // We get the contract to deploy
        const Greeter = await hardhat_1.ethers.getContractFactory("Greeter");
        // Deploy the contract
        const greeter = await Greeter.deploy("Hello, world!");
        // Wait until the contract is deployed
        await greeter.deployed();
        // The "expect" function from the Chai library is then used to check whether the "greet" function returns the expected message.
        (0, chai_1.expect)(await greeter.greet()).to.equal("Hello, world!");
        // the "setGreeting" function is called on the contract instance to change the greeting message to "Hola, Panaverse!".
        const setGreetingTx = await greeter.setGreeting("Hola, Panaverse!");
        // The resulting transaction is then "waited" for using the "wait" function to ensure that it has been successfully mined.
        await setGreetingTx.wait();
        // the "expect" function is used again to check whether the "greet" function returns the updated greeting message of "Hola, Panaverse!".
        (0, chai_1.expect)(await greeter.greet()).to.equal("Hola, Panaverse!");
    });
});
