<template>
  <div class="relative overflow-hidden bg-gradient-to-br from-purple-600/20 via-purple-500/10 to-purple-700/20">
    <!-- Unified Grid (Color is shared, particles moved to selective wrapper) -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute inset-0 opacity-5">
        <div class="grid-bg" />
      </div>
    </div>

    <!-- Content -->
    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>


<style scoped>


.grid-bg {
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(rgba(139, 92, 246, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(139, 92, 246, 0.05) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: grid-move 25s linear infinite;
}

@keyframes grid-move {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

/* Ensure no breaks between sections inside the wrapper */
:deep(section) {
  background: transparent !important;
}
</style>
