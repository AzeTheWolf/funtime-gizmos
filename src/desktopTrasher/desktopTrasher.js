const { unlinkSync, writeFileSync } = require("fs");
const { homedir } = require("os");

const devFileNames = [
  "CON",
  "PRN",
  "AUX",
  "NUL",
  "COM1",
  "COM2",
  "COM3",
  "COM4",
  "COM5",
  "COM6",
  "COM7",
  "COM8",
  "COM9",
  "LPT1",
  "LPT2",
  "LPT3",
  "LPT4",
  "LPT5",
  "LPT6",
  "LPT7",
  "LPT8",
  "LPT9",
];

const target = `${homedir()}/desktop/`;

for (const name of devFileNames) {
  if (process.argv[2] === "clean") {
    unlinkSync(`${target}/${name}`);
  } else {
    writeFileSync(`${target}/${name}`, '');
  }
}
