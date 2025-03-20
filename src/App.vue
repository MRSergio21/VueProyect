<template>
  <HomeView />
</template>

<script setup>
import HomeView from './views/HomeView.vue';
</script>

<style scoped>
</style>

// src/main.js
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');