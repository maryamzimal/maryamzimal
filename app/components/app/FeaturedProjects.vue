<script setup lang="ts">
const featuredProjects = [
  {
    title: 'Portfolio Website',
    description:
      'A sleek and responsive personal portfolio built with Nuxt 3, TailwindCSS, and Nuxt UI.',
    image: '/images.jpg',
    link: 'https://yourportfolio.com',
    tags: ['Nuxt', 'Tailwind', 'UI'],
  },
  {
    title: 'E-Commerce Dashboard',
    description:
      'An admin dashboard for managing products, orders, and analytics in real time.',
    image: '/images.jpg',
    link: 'https://github.com/yourname/dashboard',
    tags: ['Vue', 'Node', 'MongoDB'],
  },
  {
    title: 'Simple Todo App',
    description:
      'A minimal and elegant Todo application built with Vue 3 and local storage for managing daily tasks efficiently.',
    image: '/images.jpg',
    link: 'https://github.com/yourname/todo-app',
    tags: ['Tailwind css', 'Vue', 'Nuxt UI'],
  },
]

// Particles
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
    class="py-16 px-6 relative overflow-hidden
           bg-gradient-to-br from-purple-600/20 via-purple-500/10 to-purple-700/20">
    <!-- Particles & Grid -->
    <div class="absolute inset-0 z-0">
      <div class="particles-container">
        <div v-for="i in 35" :key="i" class="particle" :style="getParticleStyle(i)" />
      </div>
      <div class="absolute inset-0 opacity-5">
        <div class="grid-bg" />
      </div>
    </div>

    <UContainer class="relative z-10 text-center space-y-10">
      <!-- Heading -->
      <div class="flex flex-col gap-1.5 mb-2 text-center items-center justify-center">
        <h1
          class="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text
                 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
          What I've been working on
        </h1>
        <h2 class="text-xl sm:text-2xl text-teal-300 font-bold mt-2">
          Highlighted Projects
        </h2>
      </div>

      <!-- Project Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mt-6 sm:mt-10">
        <UCard
          v-for="(project, index) in featuredProjects"
          :key="index"
          class="group relative overflow-hidden rounded-2xl p-0
                 backdrop-blur-xl border border-white/10
                 bg-white/5 dark:bg-slate-900/50
                 shadow-[0_0_20px_rgba(255,255,255,0.05)]
                 hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]
                 hover:border-primary/50 transition-all duration-500 ease-in-out
                 hover:scale-[1.03] animate-fade-in-up">
          <!-- Project Image -->
          <div class="relative h-52 overflow-hidden rounded-t-2xl">
            <NuxtImg
              :src="project.image"
              :alt="project.title"
              class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent
                     opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
          </div>

          <!-- Content -->
          <div class="p-6 text-left space-y-3">
            <h3 class="font-semibold text-lg sm:text-xl text-white tracking-tight">
              {{ project.title }}
            </h3>
            <p class="text-sm sm:text-base text-gray-300/90 leading-relaxed line-clamp-2">
              {{ project.description }}
            </p>

            <!-- Tags -->
            <div class="flex items-center justify-between mt-4">
              <div class="flex gap-2 flex-wrap">
                <UBadge
                  v-for="(tag, tIndex) in project.tags"
                  :key="tIndex"
                  :label="tag"
                  size="xs"
                  variant="subtle"
                  class="text-[11px] uppercase tracking-wide
                         bg-gradient-to-r from-primary/40 to-cyan-400/30
                         border border-white/10 text-white
                         backdrop-blur-md rounded-full px-2 py-1" />
              </div>
            </div>
          </div>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Particles & Animations */
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

/* Faint grid */
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

/* Fade-in-up animation */
@keyframes fade-in-up {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out;
}
</style>
