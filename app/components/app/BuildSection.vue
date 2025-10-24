<script setup lang="ts">
const highlights = [
  {
    title: 'Responsive & Modern Layouts',
    icon: 'i-lucide-monitor-smartphone',
    description:
      'Perfect display across mobile, tablet, and desktop — styled with Tailwind and Nuxt UI for a sleek, modern experience.',
  },
  {
    title: 'SEO & Performance Optimization',
    icon: 'i-lucide-rocket',
    description:
      'Optimized meta tags, fast loading speed, and efficient code to boost visibility and deliver lightning performance.',
  },
  {
    title: 'Scalable & Secure Architecture',
    icon: 'i-lucide-cloud-cog',
    description:
      'Powered by Node.js and Firebase — secure, fast, and designed to scale effortlessly as your app grows.',
  },
]

// Particle styles
const getParticleStyle = index => {
  const size = Math.random() * 8 + 2
  const left = Math.random() * 100
  const animationDelay = Math.random() * 6
  const animationDuration = Math.random() * 10 + 10

  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}%`,
    animationDelay: `${animationDelay}s`,
    animationDuration: `${animationDuration}s`
  }
}
</script>

<template>
  <section
    class="py-20 px-6 relative overflow-hidden min-h-screen
           bg-gradient-to-br from-purple-600/20 via-purple-500/10 to-purple-700/20">
    <!-- Particles & Grid -->
    <div class="absolute inset-0 z-0">
      <!-- 🪩 Particles (animated globally) -->
      <div class="particles-container">
        <div
          v-for="i in 35"
          :key="i"
          class="particle"
          :style="getParticleStyle(i)" />
      </div>

      <!-- 🧊 Grid background -->
      <div class="absolute inset-0 opacity-5">
        <div class="grid-bg" />
      </div>
    </div>

    <UContainer class="relative z-10 text-center space-y-12">
      <!-- Heading -->
      <div class="flex flex-col gap-1.5 mb-6 text-center items-center justify-center">
        <h1
          class="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text
                 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
          My Core Services
        </h1>
        <h2 class="text-xl sm:text-2xl text-teal-300 font-bold mt-2">
          Blending creativity and strategy to build digital experience
        </h2>
      </div>

      <!-- Cards -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mt-6 sm:mt-10">
        <UCard
          v-for="(item, index) in highlights"
          :key="index"
          class="group relative overflow-hidden p-6 text-left
                 bg-white/10 dark:bg-slate-900/50 backdrop-blur-xl
                 border border-transparent rounded-2xl
                 transition-all duration-300
                 hover:border-purple-300/50 hover:scale-[1.04]
                 hover:shadow-[0_0_25px_rgba(139,92,246,0.2)]
                 animate-fade-in-up">
          <!-- Icon -->
          <div
            class="flex items-center justify-center w-12 h-12 rounded-xl
                   bg-gradient-to-r from-purple-500 to-pink-500 text-white
                   shadow-md mb-4 group-hover:shadow-purple-400/40 transition-all duration-300">
            <UIcon :name="item.icon" class="w-6 h-6" />
          </div>

          <!-- Text -->
          <div class="relative z-10 space-y-1">
            <h3 class="font-semibold text-lg text-white">
              {{ item.title }}
            </h3>
            <p class="text-purple-200 text-sm leading-relaxed">
              {{ item.description }}
            </p>
          </div>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
/* Animations */
@keyframes particle-float {
  0% { opacity: 0; transform: translateY(100vh) translateX(0px); }
  10% { opacity: 1; }
  90% { opacity: 1; }
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

.particle:nth-child(2n) { background: rgba(236, 72, 153, 0.3); }
.particle:nth-child(3n) { background: rgba(34, 197, 94, 0.2); }
.particle:nth-child(4n) { background: rgba(251, 191, 36, 0.3); }
</style>
