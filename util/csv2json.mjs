// USAGE:
// node csv2json.mjs [input file] [output file]

// EXAMPLE:
// node csv2json.mjs ../src/data/barley.csv ../src/data/barley.json

import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { readFileSync, writeFileSync } from "node:fs";
import Papa from "papaparse";

const __dirname = dirname(fileURLToPath(import.meta.url));

const csvContent = readFileSync(
  join(__dirname, process.argv[2]),
  "utf8",
);

const parsed = Papa.parse(csvContent, {
  header: true,
  dynamicTyping: true,
});

writeFileSync(
  join(__dirname, process.argv[3]),
  JSON.stringify(parsed.data),
);
