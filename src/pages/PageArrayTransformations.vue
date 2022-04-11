<script setup>
import {
  group,
  groups,
  flatGroup,
  index,
  indexes,
  rollup,
  rollups,
  flatRollup,
  groupSort,
  median,
  count,
  cross,
  merge,
  pairs,
  permute,
  shuffle,
  shuffler,
  ticks,
  max,
  tickStep,
  tickIncrement,
  range,
  transpose,
  zip
} from "d3-array";

import { randomLcg } from "d3-random";

import barley from "../data/barley.json";
import barleyMeta from "../data/barley-meta.json";
import natGasPrices from "../data/natural-gas-prices-monthly-untransposed.json";

console.log("%cArray", "font-size:1.5rem");
console.log("%cTransformations", "font-size:1.25rem");

console.log("group", group(barley, d => d.variety));
console.log("groups", groups(barley, d => d.variety));
console.log("flatGroup", flatGroup(barley, d => d.variety));
console.log("index", index(barley, d => d.variety, d => d.year, d => d.yield));
console.log(
  "indexes",
  indexes(barley, d => d.variety, d => d.year, d => d.yield),
);
console.log("rollup", rollup(barley, d => d.length, d => d.variety));
console.log("rollups", rollups(barley, d => d.length, d => d.variety));
console.log("flatRollup", flatRollup(barley, d => d.length, d => d.variety));
console.log(
  "groupSort",
  groupSort(barley, g => median(g, d => d.yield), d => d.variety),
);
console.log("count", count(barley, d => d.yield));
console.log("cross", cross(barleyMeta.varieties, barleyMeta.sites));
console.log("merge", merge([[1], [2, 3]]));
console.log("pairs", pairs(barleyMeta.varieties));
console.log("permute", permute(barley[0], ["site", "variety", "yield"]));
console.log("shuffle", shuffle(barley));

const shuf = shuffler(randomLcg(0.6073881886794961));
console.log("shuffler", shuf(barley));

const maxYield = max(barley, d => d.yield);
console.log("ticks", ticks(0, maxYield, 6));
console.log("tickStep", tickStep(0, maxYield, 6));
console.log("tickIncrement", tickIncrement(0, maxYield, 6));
console.log("range", range(0, maxYield, 5));

console.log("transpose", transpose([natGasPrices.Months, natGasPrices.Prices]));
console.log("zip", zip(natGasPrices.Months, natGasPrices.Prices));
</script>

<template>
  <h1 class="text-3xl">Array</h1>
  <h2 class="text-2xl">Transformations</h2>
  <p>
    Open up your browser's devtools console (Ctrl + Shift + I) to view output.
  </p>
</template>
