import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";



const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    goreli: {
      url: process.env.GORELI_RPC_URL,
      accounts: [process.env.PRIVATE_GORELI_ACCOUNT_KEY!], 
    },
  },
};

export default config;

