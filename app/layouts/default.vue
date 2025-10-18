<script setup lang="ts">
</script>

<template>
  <UContainer>
    <AppHeader :links="navLinks" />
    <slot />
    <AppFooter />
  </UContainer>
</template>
