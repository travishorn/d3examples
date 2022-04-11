<script setup>
import {
  least,
  leastIndex,
  greatest,
  greatestIndex,
  bisectLeft,
  bisect,
  bisectRight,
  bisectCenter,
  bisector,
  quickselect,
  ascending,
  descending,
} from "d3-array";

import natGasPrices from "../data/natural-gas-prices-monthly.json";

const prices = natGasPrices.map(d => d.Price);

console.log("%cArray", "font-size:1.5rem");
console.log("%cSearch", "font-size:1.25rem");

console.log("least", least(natGasPrices, d => d.Price));
console.log("leastIndex", leastIndex(natGasPrices, d => d.Price));
console.log("greatest", greatest(natGasPrices, d => d.Price));
console.log("greatestIndex", greatestIndex(natGasPrices, d => d.Price));
console.log("bisectLeft", bisectLeft(prices, 7.64));
console.log("bisect", bisect(prices, 7.64));
console.log("bisectRight", bisectRight(prices, 7.64));
console.log("bisectCenter", bisectCenter(prices, 7.64));

const bisectPrice = bisector(d => d.Price).right;
console.log("bisector", bisectPrice(natGasPrices, 7.64));

console.log("quickselect", quickselect(prices, 8));
console.log("sortAscending", prices.sort(ascending));
console.log("sortDescending", prices.sort(descending));
</script>

<template>
  <h1 class="text-3xl">Array</h1>
  <h2 class="text-2xl">Search</h2>
  <p>
    Open up your browser's devtools console (Ctrl + Shift + I) to view output.
  </p>
</template>
