<script setup lang="ts">
const mouse = ref({ x: 0, y: 0 })
const handleMouseMove = (e: MouseEvent) => {
  mouse.value = { x: e.clientX, y: e.clientY }
}

const parallax = (strength = 25) => ({
  transform: `translate3d(${mouse.value.x / strength}px, ${mouse.value.y / strength}px, 0)`
})

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
</script>

<template>
  <section
    id="about"
    class="relative min-h-screen flex flex-col lg:flex-row items-center justify-between gap-12 px-6 sm:px-12 py-8 overflow-hidden
           bg-gradient-to-br from-purple-600/20 via-purple-500/10 to-purple-700/20"
    @mousemove="handleMouseMove">
    <!-- 🪩 Particles Background -->
    <div class="absolute inset-0 z-0">
      <div class="particles-container">
        <div
          v-for="i in 40"
          :key="i"
          class="particle"
          :style="getParticleStyle()" />
      </div>
      <div class="absolute inset-0 opacity-5">
        <div class="grid-bg" />
      </div>
    </div>

    <!-- 💬 About Content -->
    <UContainer
      class="relative z-10 max-w-2xl flex-1 text-center lg:text-left space-y-5 animate-fade-in-smooth"
      :style="parallax(40)">
      <h2
        class="text-3xl sm:text-4xl font-extrabold leading-tight mt-4
               bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
        From Curiosity to Creation
      </h2>

      <p class="text-purple-100/90 leading-relaxed text-base sm:text-lg">
        My journey began with a spark of curiosity — turning ideas into something real on screen.
        Starting with <span class="text-cyan-400 font-semibold">HTML</span> and
        <span class="text-fuchsia-400 font-semibold">CSS</span>, I soon found passion in
        <span class="text-cyan-400 font-semibold">Vue.js</span> and
        <span class="text-fuchsia-400 font-semibold">Nuxt.js</span>, guided by a
        <span class="text-cyan-400 font-semibold">Computer Science degree</span> that shaped my approach to problem-solving.
      </p>

      <p class="text-purple-100/90 leading-relaxed text-base sm:text-lg">
        Now, I’m focused on building a <span class="text-cyan-400 font-semibold">Multivendor E-Commerce Platform</span> —
        combining elegant UI with scalable architecture.
      </p>

      <p class="italic text-purple-300">
        Every project reflects growth, creativity, and curiosity turned into creation.
      </p>
    </UContainer>

    <!-- 📊 Tech Component -->
    <div class="relative flex-1 w-full max-w-xl animate-fade-in-up delay-300">
      <AppTechStack />
    </div>
  </section>
</template>

<style scoped>
/* ✨ Background Animations */
@keyframes particle-float {
  0% { opacity: 0; transform: translateY(100vh) translateX(0px) scale(0.6); }
  10%, 90% { opacity: 1; }
  100% { opacity: 0; transform: translateY(-100px) translateX(50px) scale(1); }
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
  background: rgba(139, 92, 246, 0.25);
  border-radius: 50%;
  animation: particle-float linear infinite;
}
.particle:nth-child(2n) { background: rgba(236, 72, 153, 0.25); }
.particle:nth-child(3n) { background: rgba(34, 197, 94, 0.2); }
.particle:nth-child(4n) { background: rgba(251, 191, 36, 0.25); }

/* ✨ Grid Overlay */
.grid-bg {
  background-image: linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
  background-size: 40px 40px;
  width: 100%;
  height: 100%;
}

/* 🌟 Entrance Animations */
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
.animate-fade-in-up.delay-200 { animation-delay: 0.2s; }
.animate-fade-in-up.delay-300 { animation-delay: 0.3s; }
.animate-fade-in-up.delay-400 { animation-delay: 0.4s; }
.animate-fade-in-up.delay-500 { animation-delay: 0.5s; }
</style>
