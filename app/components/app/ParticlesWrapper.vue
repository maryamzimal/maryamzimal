<script setup lang="ts">
const getParticleStyle = () => {
  const size = Math.random() * 8 + 2
  const left = Math.random() * 100
  const animationDelay = Math.random() * 8
  const animationDuration = Math.random() * 15 + 10
  
  const colors = [
    'rgba(139, 92, 246, 0.3)', // Purple
    'rgba(236, 72, 153, 0.3)', // Pink
    'rgba(34, 197, 94, 0.2)',  // Green
    'rgba(251, 191, 36, 0.3)', // Amber
    'rgba(6, 182, 212, 0.3)'   // Cyan
  ]
  const bgColor = colors[Math.floor(Math.random() * colors.length)]

  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}%`,
    backgroundColor: bgColor,
    animationDelay: `${animationDelay}s`,
    animationDuration: `${animationDuration}s`,
  }
}
</script>

<template>
  <div class="relative overflow-hidden">
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="particles-container">
        <div v-for="i in 50" :key="i" class="particle" :style="getParticleStyle()" />
      </div>
    </div>
    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>

<style scoped>
@keyframes particle-float {
  0% { 
    opacity: 0; 
    transform: translateY(100vh) translateX(0px); 
  }
  10%, 90% { 
    opacity: 1; 
  }
  100% { 
    opacity: 0; 
    transform: translateY(-100px) translateX(50px); 
  }
}

.particles-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.particle {
  position: absolute;
  border-radius: 50%;
  animation: particle-float linear infinite;
}
</style>
