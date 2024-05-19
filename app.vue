<script lang="ts" setup>
const isNavOpen = ref(false);
</script>

<template>
  <div>
    <Nav @toggleNav="isNavOpen = !isNavOpen" :isOpen="isNavOpen" />
    <NuxtWelcome />
  </div>
</template>
