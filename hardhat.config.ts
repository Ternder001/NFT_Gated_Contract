import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
};

export default config;


// import { HardhatUserConfig } from "hardhat/config";
// import "@nomicfoundation/hardhat-toolbox";
// require("dotenv").config();

// module.exports = {
//   solidity: "0.8.21",
//   networks: {
//     mumbai: {
//       url: process.env.ALCHEMY_MUMBAI_API_KEY_URL,
//       accounts: [process.env.ACCOUNT_PRIVATE_KEY]
//     }
//   }
// };