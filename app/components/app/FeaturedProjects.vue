<script setup lang="ts">
const featuredProjects = [
  {
    title: 'MovieFlix',
    description:
      'A cinematic streaming experience with a sleek UI, powered by Nuxt 3 and TMDB API for real-time movie insights.',
    image: '/movieflix.png',
    link: 'https://movieflix-theta-two.vercel.app/',
    tags: ['Nuxt 3', 'Tailwind', 'TMDB API'],
  },
  {
    title: 'Veloura',
    description:
      'A premium multivendor e-commerce platform designed for elegance and scalability, featuring a seamless shopping experience.',
    image: '/Veloura.png',
    link: '#',
    tags: ['Vue 3', 'Pinia', 'E-Commerce'],
  },
  {
    title: 'Thirst',
    description:
      'A modern hydration tracking and beverage discovery platform. Stay tuned for a refreshing digital experience.',
    image: 'https://dummyimage.com/600x400/111827/4b5563&text=Coming+Soon',
    comingSoon: true,
    tags: ['Coming Soon'],
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
          class="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-teal-400 to-pink-500 tracking-tight">
          My Featured Work
        </h1>
        <h2 class="text-xl sm:text-2xl text-teal-100 mt-2">
          Projects that showcase innovation and creativity
        </h2>
      </div>

      <!-- Project Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mt-6 sm:mt-10">
        <UCard
          v-for="(project, index) in featuredProjects"
          :key="index"
          class="relative group hover:shadow-2xl w-full max-w-[800px] h-full flex flex-col overflow-hidden transition-all duration-300"
          :ui="{ header: 'p-0 sm:p-0 overflow-hidden' }">
          <!-- Browser Mockup Image Container -->
          <template #header>
            <div class="relative bg-gray-800/80 border-b border-white/10 p-2 flex items-center gap-1.5 px-3 z-20">
              <div class="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div class="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div class="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <div class="ml-2 px-3 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] text-gray-400 w-full max-w-[120px] truncate">
                {{ project.title.toLowerCase() }}.com
              </div>
            </div>
            <div class="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-gray-900 to-black p-4 flex items-center justify-center group-hover:bg-primary-500/5 transition-colors duration-500">
              <ULink :to="project.comingSoon ? '' : project.link" :target="project.comingSoon ? '' : '_blank'" class="relative w-full h-full flex items-center justify-center">
                <NuxtImg
                  :src="project.image"
                  :alt="project.title"
                  class="max-w-full max-h-full object-contain shadow-2xl transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-primary-500/20" />
                
                <!-- Coming Soon Overlay -->
                <div v-if="project.comingSoon" class="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300">
                   <div class="px-6 py-2 border border-white/20 rounded-full bg-white/5 backdrop-blur-md">
                      <span class="text-xs font-bold text-white uppercase tracking-[0.2em] animate-pulse">Coming Soon</span>
                   </div>
                </div>
              </ULink>
            </div>
          </template>

          <div class="flex flex-col flex-grow">
            <h2 class="font-bold text-lg sm:text-xl text-white tracking-tight mb-2 group-hover:text-primary-400 transition-colors">
              {{ project.title }}
            </h2>
            <h3 class="text-sm sm:text-base text-gray-400 leading-relaxed line-clamp-2">
              {{ project.description }}
            </h3>
          </div>
          <div class="flex justify-center gap-2 flex-wrap mt-6 pb-2">
            <UBadge
              v-for="(tag, tIndex) in project.tags"
              :key="tIndex"
              :label="tag"
              size="xs"
              variant="subtle"
              :class="[
                'text-[10px] sm:text-[11px] uppercase tracking-wider border border-white/10 text-white backdrop-blur-md rounded-full px-3 py-1',
                project.comingSoon ? 'bg-white/5 shadow-inner' : 'bg-primary-500/10 hover:bg-primary-500/20 shadow-md shadow-primary-500/5'
              ]" />
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

/* Ensure object-position is transitionable */
img {
  transition: object-position 4s ease-in-out;
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
