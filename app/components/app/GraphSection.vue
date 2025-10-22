<script setup lang="ts">
import { ref } from 'vue'

// --- Auto-scroll logic for graph ---
const scrollContainer = ref<HTMLElement | null>(null)
let autoScrollInterval: any = null

const startAutoScroll = () => {
  const el = scrollContainer.value
  if (!el) return
  let direction = 1
  autoScrollInterval = setInterval(() => {
    el.scrollLeft += direction * 1.3
    if (el.scrollLeft + el.clientWidth >= el.scrollWidth) direction = -1
    if (el.scrollLeft <= 0) direction = 1
  }, 16)
}
const stopAutoScroll = () => clearInterval(autoScrollInterval)

// --- Particle & Parallax setup ---
const mouse = ref({ x: 0, y: 0 })
const handleMouseMove = (e: MouseEvent) => {
  mouse.value = { x: e.clientX, y: e.clientY }
}

const parallax = (strength = 25) => ({
  transform: `translate3d(${mouse.value.x / strength}px, ${mouse.value.y / strength}px, 0)`
})

const getParticleStyle = () => {
  const size = Math.random() * 6 + 3
  const left = Math.random() * 100
  const delay = Math.random() * 6
  const duration = Math.random() * 10 + 8
  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
  }
}
</script>

<template>
  <section
    id="contributions"
    class="relative min-h-[70vh] flex flex-col justify-center px-0 py-20 overflow-hidden transition-colors duration-500"
    @mousemove="handleMouseMove">
    <!-- ✨ Floating Particles Background -->
    <div class="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      <div
        v-for="i in 40"
        :key="i"
        class="particle"
        :style="getParticleStyle()" />
    </div>

    <!-- 🌌 Content -->
    <div class="relative z-10 w-full text-center sm:text-left animate-fade-in-smooth" :style="parallax(40)">
      <div class="max-w-[1600px] mx-auto px-6 sm:px-12 space-y-10">
        <div class=" flex flex-col space-y-2 justify-center ">
          <h2
            class=" text-3xl sm:text-4xl font-extrabold leading-tight mt-4
            bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
            Contribution Graph
          </h2>
          <p
            class="text-gray-600 dark:text-gray-400 text-base sm:text-lg animate-fade-in-up delay-200">
            Proof I exist — at least on GitHub.
          </p>
        </div>

        <!-- 🟩 Full-Width Graph -->
        <div
          ref="scrollContainer"
          class="relative overflow-x-auto bg-transparent transition-all duration-500 group animate-fade-in-up delay-300"
          @mouseenter="startAutoScroll"
          @mouseleave="stopAutoScroll">
          <NuxtImg
            src="/graph.png"
            alt="GitHub Contribution Graph"
            class="w-full h-auto object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.02]" />
        </div>

        <!-- 📝 Quote -->
        <p
          class="text-gray-600 dark:text-gray-400 text-sm mt-6 text-center md:text-right italic animate-subtle-float animate-fade-in-up delay-400">
          “Every green square tells a story of a late night.”
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 🌌 Particle Animation */
@keyframes particle-float {
  0% { opacity: 0; transform: translateY(100vh) scale(0.5); }
  10%, 90% { opacity: 1; }
  100% { opacity: 0; transform: translateY(-50px) scale(1); }
}
.particle {
  position: absolute;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 50%;
  animation: particle-float linear infinite;
  pointer-events: none;
  filter: blur(2px);
}
.particle:nth-child(2n) { background: rgba(168, 85, 247, 0.2); }
.particle:nth-child(3n) { background: rgba(34, 211, 238, 0.2); }
.particle:nth-child(4n) { background: rgba(236, 72, 153, 0.2); }

/* ✨ Fade & Motion Animations */
@keyframes fade-in-smooth {
  0% { opacity: 0; transform: translateY(30px) scale(0.96); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}
.animate-fade-in-smooth {
  animation: fade-in-smooth 1.4s ease-out both;
}

@keyframes fade-in-up {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fade-in-up 1s ease-out forwards;
}
.animate-fade-in-up.delay-100 { animation-delay: 0.1s; }
.animate-fade-in-up.delay-200 { animation-delay: 0.2s; }
.animate-fade-in-up.delay-300 { animation-delay: 0.3s; }
.animate-fade-in-up.delay-400 { animation-delay: 0.4s; }

@keyframes subtle-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
.animate-subtle-float {
  animation: subtle-float 6s ease-in-out infinite;
}
</style>
