import { ethers } from "hardhat";
async function main() { 
  
  // creates a contract factory for the Greeter contract.
  //  A contract factory is an object that can be used to create new instances of a smart contract. 
  const Greeter = await ethers.getContractFactory("Greeter");

  // it deploys a new instance of the Greeter contract to the Ethereum blockchain
  // The deploy() function takes a string as its argument, which is the greeting that will be printed when the contract is invoked.
  const greeter = await Greeter.deploy("Hello, Hardhat!");
 
  // 
  await greeter.deployed();
  
  console.log("Greeter deployed to:", greeter.address);
}

// We recommend this pattern to be able to use async/await everywhere and properly handle errors.

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });