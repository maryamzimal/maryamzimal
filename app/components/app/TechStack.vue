<script setup lang="ts">
const techStack = ref([
  { name: 'HTML5', icon: 'logos:html-5' },
  { name: 'CSS', icon: 'logos:css-3' },
  { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'JavaScript', icon: 'logos:javascript' },
  { name: 'Vue.js', icon: 'logos:vue' },
  { name: 'Nuxt UI', icon: 'logos:nuxt-icon' },
  { name: 'Git', icon: 'logos:git-icon' },
  { name: 'Node.js', icon: 'logos:nodejs-icon' },
  { name: 'SQLite', icon: 'logos:sqlite' },
  { name: 'Python', icon: 'logos:python' },
  { name: 'VS Code', icon: 'logos:visual-studio-code' },
])

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
</script>

<template>
  <section
    class="relative overflow-hidden
          bg-gradient-to-br from-purple-600/20 via-purple-500/10 to-purple-700/20  py-1.5 sm:py-3"
    @mousemove="handleMouseMove">
    <!-- 🌌 Particle Background -->
    <div class="absolute inset-0 z-0">
      <div class="particles-container">
        <div
          v-for="i in 40"
          :key="i"
          class="particle"
          :style="getParticleStyle()" />
      </div>
    </div>

    <!-- Heading -->
    <h3
      class="relative z-10 text-3xl sm:text-5xl font-extrabold text-center m-10
             bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-teal-400 to-pink-500 tracking-tight">
      Tech Stack & Tools
    </h3>

    <!-- Rows -->
    <div class="relative z-10 space-y-8 mb-10">
      <!-- Row 1 -->
      <div class="tech-slider">
        <div class="tech-track">
          <div
            v-for="(t, i) in [...techStack, ...techStack]"
            :key="'row1-' + i"
            class="tech-item">
            <div
              class="group flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-7 py-3 sm:py-4 rounded-xl
                      bg-white/5 border border-white/10
                     hover:-translate-y-1 transition-all duration-300 ease-out">
              <Icon :name="t.icon" class="transition-transform group-hover:scale-110" size="22" />
              <span class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">
                {{ t.name }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Row 2 (reverse scroll) -->
      <div class="tech-slider">
        <div class="tech-track reverse">
          <div
            v-for="(t, i) in [...techStack, ...techStack]"
            :key="'row2-' + i"
            class="tech-item">
            <div
              class="group flex items-center justify-center gap-2 sm:gap-3  px-5 sm:px-7 py-3 sm:py-4 rounded-xl
                   bg-white/5 border border-white/10
                     hover:-translate-y-1 transition-all duration-300 ease-out">
              <Icon :name="t.icon" class="transition-transform group-hover:scale-110" size="22" />
              <span class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">
                {{ t.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 🔹 Particle Animation */
@keyframes particle-float {
  0% { transform: translate3d(0, 100vh, 0) rotate(0deg); }
  50% { transform: translate3d(30px, -50vh, 0) rotate(180deg); }
  100% { transform: translate3d(-30px, -100vh, 0) rotate(360deg); }
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
  bottom: -10px;
  background: rgba(139, 92, 246, 0.25);
  border-radius: 50%;
  animation: particle-float linear infinite;
  will-change: transform, opacity;
}

.particle:nth-child(3n) { background: rgba(236, 72, 153, 0.25); }
.particle:nth-child(4n) { background: rgba(34, 197, 94, 0.25); }
.particle:nth-child(5n) { background: rgba(56, 189, 248, 0.25); }
.particle:nth-child(2n) { background: rgba(251, 191, 36, 0.25); }

/* 🔹 Tech Slider */
.tech-slider { overflow: hidden; width: 100%; position: relative; }
.tech-track { display: flex; width: max-content; animation: scroll-left 35s linear infinite; will-change: transform; }
.tech-track.reverse { animation: scroll-right 38s linear infinite; }
.tech-item { flex: 0 0 auto; margin-right: 1.25rem; }

.tech-slider:hover .tech-track { animation-play-state: paused; }

@keyframes scroll-left {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); }
}
@keyframes scroll-right {
  0% { transform: translate3d(-50%, 0, 0); }
  100% { transform: translate3d(0, 0, 0); }
}
</style>
