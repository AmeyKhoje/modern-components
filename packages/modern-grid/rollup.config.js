const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const resolve = require("@rollup/plugin-node-resolve");
const commonJs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");

const packageJson = require("./package.json");

exports.default = [
  {
    input: "./src/index.ts",
    output: [
      {
        file: "./lib/cjs/index.js",
        format: "cjs",
      },
      {
        file: "./lib/esm/index.js",
        format: "es",
      },
    ],
    external: [Object.keys(packageJson.peerDependencies || {})],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonJs(),
      typescript({
        typescript: require("typescript"),
      }),
    ],
  },
];
