import "dotenv/config";
import { task } from "hardhat/config";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-web3";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-tracer";
import "hardhat-gas-reporter";
import "hardhat-spdx-license-identifier";
import { account, ether, web3 } from "@defi.org/web3-candies";
import { deploy } from "@defi.org/web3-candies/dist/hardhat/deploy";
import { hardhatDefaultConfig } from "@defi.org/web3-candies/dist/hardhat";
import _ from "lodash";

task("deploy").setAction(async () => {
  console.log("deploying example Greeter contract:");
  const ac = web3().eth.accounts.create();
  console.log("pk:", ac.privateKey);
  await web3().eth.sendTransaction({ from: await account(), to: ac.address, value: ether });

  await deploy("Greeter", ["Hello, world!"], 5_000_000, 0, true, 1);
});

export default _.merge(hardhatDefaultConfig(), {});
