import _ from "lodash";
import { expect } from "chai";
import { useChaiBN } from "@defi.org/web3-candies";
import { deployer, greeter } from "./base.test";

useChaiBN();

describe("Greeter", async () => {
  it("Should return the new greeting once it's changed", async () => {
    expect(await greeter.methods.greet().call()).eq("Hello, world!");
    await greeter.methods.setGreeting("Hola, mundo!").send({ from: deployer });
    expect(await greeter.methods.greet().call()).eq("Hola, mundo!");
  });
});
