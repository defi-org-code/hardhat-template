import { Greeter } from "../typechain-hardhat";
import { deployArtifact, tag } from "@defi.org/web3-candies/dist/hardhat";
import { account } from "@defi.org/web3-candies";

export let deployer: string;
export let greeter: Greeter;

beforeEach("deploy Greeter", async () => {
  deployer = await account(9);
  tag(deployer, "deployer");

  greeter = await deployArtifact("Greeter", { from: deployer }, ["Hello, world!"]);
});
