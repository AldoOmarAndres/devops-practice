import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/tests/**/*.test.ts"],
  extensionsToTreatAsEsm: [".ts"],
  transform: {
    "^.+\\.ts$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
  testTimeout: 10000,
  // Detect open handles to help debug hanging tests
  detectOpenHandles: true,
  // Force exit after tests
  forceExit: true,
};

export default config;
