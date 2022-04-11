<script setup>
import { routes } from "./router.js";
</script>

<template>
  <div class="container my-5 mx-auto flex">
    <nav class="flex flex-col w-60">
      <router-link
        active-class="font-bold"
        v-for="route in routes"
        :key="route.path"
        :to="route.path"
      >{{ route.name }}</router-link>
    </nav>

    <div>
      <router-view />
    </div>
  </div>
</template>
