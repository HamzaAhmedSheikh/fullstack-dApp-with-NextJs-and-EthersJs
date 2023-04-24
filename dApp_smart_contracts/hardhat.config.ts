import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from 'dotenv'
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    goreli: {
      url: "https://eth-goerli.g.alchemy.com/v2/j3NMfYc2T0K0JyMYZkPrLiJISrpbcvgD",
      accounts: ["addd98f1f38d863ff6f7b21fd6c18adda77ab71264d7bc3aec9ec750a4162bc2"]
    },
  },
};

export default config;

