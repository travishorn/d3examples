<script setup>
import {
  min,
  minIndex,
  max,
  maxIndex,
  extent,
  mode,
  sum,
  mean,
  median,
  cumsum,
  quantile,
  rank,
  variance,
  deviation,
  fsum,
  fcumsum,
  Adder,
} from "d3-array";

import natGasPrices from "../data/natural-gas-prices-monthly.json";

console.log("%cArray", "font-size:1.5rem");
console.log("%cStatistics", "font-size:1.25rem");

console.log("min", min(natGasPrices, d => d.Price));
console.log("minIndex", minIndex(natGasPrices, d => d.Price));
console.log("max", max(natGasPrices, d => d.Price));
console.log("maxIndex", maxIndex(natGasPrices, d => d.Price));
console.log("extent", extent(natGasPrices, d => d.Price));
console.log("mode", mode(natGasPrices, d => d.Price));
console.log("sum", sum(natGasPrices, d => d.Price));
console.log("mean", mean(natGasPrices, d => d.Price));
console.log("median", median(natGasPrices, d => d.Price));
console.log("cumsum", cumsum(natGasPrices, d => d.Price));
console.log("quantile - p = 0.25", quantile(natGasPrices, 0.25, d => d.Price));
console.log("rank", rank(natGasPrices, d => d.Price));
console.log("variance", variance(natGasPrices, d => d.Price));
console.log("deviation", deviation(natGasPrices, d => d.Price));
console.log("fsum", fsum(natGasPrices, d => d.Price));
console.log("fcumsum", fcumsum(natGasPrices, d => d.Price));

const adder = new Adder();
adder.add(1).add(2).add(3);
console.log("Adder value", +adder);
</script>

<template>
  <h1 class="text-3xl">Array</h1>
  <h2 class="text-2xl">Statistics</h2>
  <p>
    Open up your browser's devtools console (Ctrl + Shift + I) to view output.
  </p>
</template>
