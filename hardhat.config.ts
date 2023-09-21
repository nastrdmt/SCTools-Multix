import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import fs from 'fs'

const privateKey = fs.readFileSync('.secret', 'utf8')


const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    taiko:{
      url:`https://endpoints.omniatech.io/v1/eth/sepolia/public`,
      accounts: [privateKey],
    },

    scroll:{
      url:`https://1rpc.io/scroll/sepolia`,
      accounts: [privateKey],     
    },

    linea:{
      url:`https://linea.drpc.org`,
      accounts: [privateKey],     
    },

    zora:{
      url:`https://zora.rpc.thirdweb.com`,
      accounts: [privateKey],     
    },
  },

  etherscan: {
    apiKey: "",  // для верификации
  },
};

export default config;
