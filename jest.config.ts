import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  transform: { "^.+\\.ts?$": "ts-jest" },
  testEnvironment: "node",
  transformIgnorePatterns: ["./node_modules/"],
};

export default config;
