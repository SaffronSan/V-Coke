<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import FooterC from './components/FooterC.vue';
</script>
<template>
  <Navbar />
  <main class="grow-1">
    <RouterView />
  </main>
  <FooterC />
</template>
