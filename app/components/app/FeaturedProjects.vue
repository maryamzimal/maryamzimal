<script setup lang="ts">
const featuredProjects = [
  {
    title: 'MovieFlix - Cinematic Experience',
    description:
      'A high-performance cinematic streaming platform built with Nuxt 3. Designed for speed and immersive user experience, it features real-time movie insights and a pixel-perfect dark UI.',
    image: '/movieflix.png',
    link: 'https://github.com/maryamzimal',
    tags: ['Nuxt 3', 'Tailwind', 'TMDB API', 'Pinia'],
    features: [
      'Real-time Movie Search & Discovery',
      'Dynamic Category Filtering',
      'Detailed Movie Insights & Metadata',
      'Fully Responsive Video Overlays'
    ],
    glow: 'from-cyan-500/20 to-blue-600/20'
  },
  {
    title: 'Veloura - E-Commerce Ecosystem',
    description:
      'A sophisticated multivendor marketplace designed for modern retail. Veloura bridges the gap between vendors and customers with a seamless, scalable architectural approach.',
    image: '/Veloura.png',
    link: 'https://github.com/maryamzimal',
    tags: ['Vue 3', 'Tailwind', 'Drizzle ORM', 'State Mgmt'],
    features: [
      'Multi-vendor Shop Management',
      'Live Inventory Tracking',
      'Secure Multi-step Checkout Flow',
      'Interactive Product Review System'
    ],
    glow: 'from-purple-500/20 to-fuchsia-600/20'
  },
  {
    title: 'Thirst - Wellness & Hydration',
    description:
      'A premium lifestyle companion focusing on healthy hydration habits. Thirst combines habit-tracking logic with a vibrant, refreshing user interface.',
    image: 'https://dummyimage.com/1200x800/111827/4b5563&text=Thirst+Coming+Soon',
    comingSoon: true,
    tags: ['Next.js', 'Framer Motion', 'Wellness'],
    features: [
      'Custom Hydration Goal Setting',
      'Detailed Daily Habit Analytics',
      'Curated Beverage Discovery',
      'Dark-Mode Optimized Animations'
    ],
    glow: 'from-teal-500/20 to-emerald-600/20'
  },
]

// Particles logic (matches theme)
const getParticleStyle = () => {
  const size = Math.random() * 6 + 2
  const left = Math.random() * 100
  const animationDelay = Math.random() * 6
  const animationDuration = Math.random() * 12 + 8
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
  <section id="projects" class="py-12 px-6 relative overflow-hidden bg-gradient-to-br from-purple-600/20 via-purple-500/10 to-purple-700/20 border-y border-white/5">
    <!-- ✨ Theme Decoration -->
    <div class="absolute inset-0 z-0">
      <div class="particles-container">
        <div v-for="i in 40" :key="i" class="particle" :style="getParticleStyle()" />
      </div>
      <div class="absolute inset-0 opacity-10">
        <div class="grid-bg" />
      </div>
    </div>

    <UContainer class="relative z-10 space-y-12">
      <!-- Section Heading -->
      <div class="flex flex-col gap-2 text-center items-center justify-center animate-fade-in-up">
        <h1 class="text-3xl sm:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-teal-400 to-pink-500 tracking-tighter">
          Featured Work
        </h1>
        <p class="text-lg text-teal-100 max-w-2xl opacity-80 font-light">
          A selection of projects where I’ve combined creative design with technical excellence.
        </p>
      </div>

      <!-- Project Stack -->
      <div class="space-y-12">
        <div 
          v-for="(project, index) in featuredProjects" 
          :key="index"
          class="group flex flex-col gap-8 items-center"
          :class="[index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse']"
        >
          <!-- Project Visual (Mockup) -->
          <div class="w-full lg:w-[55%] relative transform transition-all duration-700 group-hover:scale-[1.01]">
            <!-- Subtle Glow Background -->
            <div 
              class="absolute -inset-4 rounded-[2rem] bg-gradient-to-br opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
              :class="project.glow"
            />
            
            <div class="relative rounded-xl border border-white/10 bg-gray-900/40 backdrop-blur-sm overflow-hidden shadow-2xl">
              <!-- Browser Header -->
              <div class="bg-gray-800/80 border-b border-white/10 p-2 flex items-center gap-2 px-4">
                <div class="flex gap-1">
                  <div class="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div class="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div class="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <div class="ml-4 px-4 py-0.5 rounded bg-black/20 border border-white/5 text-[9px] text-gray-500 w-full max-w-[150px] truncate">
                  {{ project.title.split(' ')[0].toLowerCase() }}.app
                </div>
              </div>

              <!-- Full Image Area -->
              <div class="relative aspect-[21/9] bg-black flex items-center justify-center overflow-hidden">
                <ULink :to="project.comingSoon ? '' : project.link" :target="project.comingSoon ? '' : '_blank'" class="w-full h-full">
                  <NuxtImg
                    :src="project.image"
                    :alt="project.title"
                    class="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                  <!-- Coming Soon Overlay -->
                  <div v-if="project.comingSoon" class="absolute inset-0 bg-gray-950/80 backdrop-blur-md flex flex-col items-center justify-center">
                    <div class="px-6 py-2 border border-primary/30 rounded-full bg-primary/10 mb-2">
                       <span class="text-xs font-bold text-primary-400 uppercase tracking-[0.3em] animate-pulse">Coming Soon</span>
                    </div>
                  </div>
                </ULink>
              </div>
            </div>
          </div>

          <!-- Project Details -->
          <div class="w-full lg:w-[45%] space-y-4 text-left animate-fade-in-up" :style="{ transitionDelay: `${index * 0.1}s` }">
            <h3 class="text-2xl sm:text-3xl font-black text-white leading-tight">
              {{ project.title }}
            </h3>
            
            <p class="text-gray-400 text-base leading-relaxed line-clamp-2">
              {{ project.description }}
            </p>

            <!-- Feature Checklist -->
            <ul class="space-y-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1">
              <li v-for="feature in project.features" :key="feature" class="flex items-center gap-2 text-gray-300">
                <div class="flex-shrink-0 w-4 h-4 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <UIcon name="i-heroicons-check" class="w-3 h-3 text-primary-400" />
                </div>
                <span class="text-xs font-medium opacity-90">{{ feature }}</span>
              </li>
            </ul>

            <div class="flex flex-wrap items-center gap-4 pt-2">
              <!-- Tech Tags -->
              <div class="flex gap-1.5 flex-wrap">
                <UBadge
                  v-for="tag in project.tags"
                  :key="tag"
                  :label="tag"
                  variant="subtle"
                  class="px-2 py-0.5 text-[9px] uppercase tracking-wider bg-white/5 border border-white/10 text-primary-300 rounded-md"
                />
              </div>

              <!-- CTA Link -->
              <div v-if="!project.comingSoon" class="ml-auto lg:ml-0">
                <UButton
                  :to="project.link"
                  target="_blank"
                  label="View on GitHub"
                  icon="i-simple-icons-github"
                  trailing
                  variant="link"
                  class="text-primary-400 hover:text-primary-300 p-0 font-bold text-sm tracking-tight transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
/* Standardized Theme Decor */
.particles-container {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.particle {
  position: absolute;
  background: rgba(139, 92, 246, 0.3);
  border-radius: 50%;
  animation: particle-float linear infinite;
  pointer-events: none;
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

@keyframes particle-float {
  0% { opacity: 0; transform: translateY(100vh) translateX(0px); }
  10%, 90% { opacity: 1; }
  100% { opacity: 0; transform: translateY(-50px) translateX(50px); }
}

@keyframes fade-in-up {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out forwards;
}
</style>
