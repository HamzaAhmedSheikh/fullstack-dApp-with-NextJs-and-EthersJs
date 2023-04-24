"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@nomicfoundation/hardhat-toolbox");
const config = {
    solidity: "0.8.18",
    networks: {
        rinkeby: {
            url: process.env.GORELI_RPC_URL,
            accounts: [process.env.PRIVATE_GORELI_ACCOUNT_KEY],
        },
    },
};
exports.default = config;
