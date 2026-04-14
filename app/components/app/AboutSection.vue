<script setup lang="ts">
const mouse = ref({ x: 0, y: 0 })
const handleMouseMove = (e: MouseEvent) => {
  mouse.value = { x: e.clientX, y: e.clientY }
}

const getParticleStyle = () => {
  const size = Math.random() * 8 + 2
  const left = Math.random() * 100
  const animationDelay = Math.random() * 6
  const animationDuration = Math.random() * 10 + 10
  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}%`,
    animationDelay: `${animationDelay}s`,
    animationDuration: `${animationDuration}s`,
  }
}

const highlights = [
  { title: 'Full-Stack Nuxt', icon: 'i-lucide-layers' },
  { title: 'Cloud Architecture', icon: 'i-lucide-cpu' },
  { title: 'Machine Learning', icon: 'i-lucide-brain-circuit' }
]
</script>

<template>
  <section
    id="about"
    class="relative py-16 px-6 sm:px-10 overflow-hidden 
           bg-gradient-to-br from-purple-600/20 via-purple-500/10 to-purple-700/20"
    @mousemove="handleMouseMove">
    
    <!-- background context -->
    <div class="absolute inset-0 z-0">
      <div class="particles-container">
        <div v-for="i in 25" :key="i" class="particle" :style="getParticleStyle()" />
      </div>
      <div class="absolute inset-0 opacity-5">
        <div class="grid-bg" />
      </div>
    </div>

    <UContainer class="relative z-10 max-w-4xl text-center space-y-10">
      <!-- Minimalist Header -->
      <div class="space-y-3 animate-fade-in-up">
        <h1 class="text-4xl sm:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-teal-400 to-pink-500 tracking-tight">
          About My Journey
        </h1>
        <div class="h-1 w-20 bg-gradient-to-r from-teal-400 to-purple-500 mx-auto rounded-full" />
      </div>

      <!-- Condensed Explanatory Bio -->
      <div class="max-w-3xl mx-auto animate-fade-in-up delay-100">
        <p class="text-purple-100/90 text-lg sm:text-xl leading-relaxed font-light">
          I am a <span class="text-teal-400 font-bold">Computer Science Graduate</span> dedicated to crafting high-performance web applications. 
          Specializing in <span class="text-cyan-400 font-semibold italic">Vue 3 and Nuxt.js</span>, I bridge the gap between frontend elegance and 
          backend robustness. Currently exploring <span class="text-pink-400 font-semibold">Machine Learning</span> to build more 
          intelligent, data-driven digital experiences.
        </p>
      </div>

      <!-- Minimalist Horizontal Highlights -->
      <div class="flex flex-wrap justify-center gap-6 animate-fade-in-up delay-200">
        <div
          v-for="item in highlights"
          :key="item.title"
          class="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-teal-400/30 transition-all duration-300 group">
          <div class="p-2 rounded-lg bg-teal-400/10 text-teal-400 group-hover:scale-110 transition-transform">
            <UIcon :name="item.icon" class="w-6 h-6" />
          </div>
          <span class="text-sm font-bold text-white uppercase tracking-wider">{{ item.title }}</span>
        </div>
      </div>

      <!-- Compact Actions -->
      <div class="flex justify-center gap-4 animate-fade-in-up delay-300 pt-4">
        <UButton
          label="Get Resume"
          size="lg"
          variant="solid"
          class="rounded-full px-8 bg-teal-500 hover:bg-teal-400 text-white font-bold transition-all hover:scale-105" />
        <UButton
          label="Contact"
          size="lg"
          variant="outline"
          class="rounded-full px-8 border-white/20 text-white hover:bg-white/5 transition-all"
          to="#contact" />
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
@keyframes particle-float {
  0% { opacity: 0; transform: translateY(100vh) translateX(0px); }
  10%, 90% { opacity: 1; }
  100% { opacity: 0; transform: translateY(-100px) translateX(50px); }
}

.particles-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.particle {
  position: absolute;
  background: rgba(139, 92, 246, 0.3);
  border-radius: 50%;
  animation: particle-float linear infinite;
}

.grid-bg {
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(rgba(139, 92, 246, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(139, 92, 246, 0.05) 1px, transparent 1px);
  background-size: 60px 60px;
}

@keyframes fade-in-up {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out forwards;
}

.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
</style>
