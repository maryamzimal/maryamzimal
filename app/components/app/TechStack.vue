<script setup lang="ts">
const techStack = [
  {
    category: 'Frontend & UI',
    items: [
      { name: 'Vue.js', icon: 'logos:vue' },
      { name: 'Nuxt 3', icon: 'logos:nuxt-icon' },
      { name: 'TypeScript', icon: 'logos:typescript-icon' },
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
      { name: 'Nuxt UI', icon: 'logos:nuxt-icon' },
      { name: 'HTML5', icon: 'logos:html-5' },
      { name: 'CSS3', icon: 'logos:css-3' },
      { name: 'JavaScript', icon: 'logos:javascript' },
    ]
  },
  {
    category: 'Backend & Tools',
    items: [
      { name: 'Node.js', icon: 'logos:nodejs-icon' },
      { name: 'SQLite', icon: 'logos:sqlite' },
      { name: 'Python', icon: 'logos:python' },
      { name: 'Git', icon: 'logos:git-icon' },
      { name: 'VS Code', icon: 'logos:visual-studio-code' },
      { name: 'Wrangler', icon: 'logos:cloudflare-workers-icon' },
    ]
  }
]

// Standardized particle logic for exact theme match
const getParticleStyle = (index: number) => {
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
    class="py-16 px-6 relative overflow-hidden
           bg-gradient-to-br from-purple-600/20 via-purple-500/10 to-purple-700/20">
    <!-- 🪩 Theme Decoration (Particles & Grid) -->
    <div class="absolute inset-0 z-0">
      <div class="particles-container">
        <div v-for="i in 35" :key="i" class="particle" :style="getParticleStyle(i)" />
      </div>
      <div class="absolute inset-0 opacity-5">
        <div class="grid-bg" />
      </div>
    </div>

    <UContainer class="relative z-10 space-y-16">
      <!-- Standardized Heading -->
      <div class="flex flex-col gap-1.5 mb-11 text-center items-center justify-center animate-fade-in-up">
        <h1
          class="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-teal-400 to-pink-500 tracking-tight">
          Tech Stack & Expertise
        </h1>
        <h2 class="text-xl sm:text-2xl text-teal-100 mt-2">
          Modern tools for high-performance scaleable web apps
        </h2>
      </div>

      <!-- Categories Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <div
          v-for="(group, gIdx) in techStack"
          :key="group.category"
          class="space-y-6 animate-fade-in-up"
          :style="{ animationDelay: `${gIdx * 0.1}s` }">
          
          <div class="flex items-center gap-4">
            <h3 class="text-xl font-bold text-teal-400 whitespace-nowrap">
              {{ group.category }}
            </h3>
            <div class="h-px bg-white/10 w-full" />
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <UCard
              v-for="(tech, tIdx) in group.items"
              :key="tech.name"
              class="group relative text-center items-center justify-center p-0 rounded-xl border border-white/5
                     bg-white/5 backdrop-blur-md shadow-lg 
                     transition-all duration-300 hover:-translate-y-1.5 hover:shadow-cyan-400/10 hover:border-cyan-400/20"
              :ui="{ body: { base: 'flex flex-col items-center gap-4 p-4 sm:p-5' } }">
              
              <div class="relative transition-transform duration-300 group-hover:scale-110">
                <Icon :name="tech.icon" size="32" />
                <!-- Glow Effect -->
                <div class="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-40 transition-opacity rounded-full" />
              </div>
              
              <span class="text-xs font-semibold text-gray-300 group-hover:text-cyan-400 transition-colors">
                {{ tech.name }}
              </span>
            </UCard>
          </div>
        </div>
      </div>

      <!-- Subtle Footer -->
      <div class="text-center pt-10">
        <p class="text-gray-400/60 text-sm tracking-widest uppercase italic font-light animate-pulse-slow">
          Exploring New Frontiers Every Day
        </p>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
/* 🌌 Theme Animations & Styles (Standardized) */
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

@keyframes fade-in-up {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out forwards;
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.7; }
}
.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}
</style>
