<script setup lang="ts">
const featuredProjects = [
  {
    title: 'MovieFlix - Full-Stack Movie Catalog',
    description:
      'A full-stack movie catalog application using Nuxt 4 that demonstrates authentication, API integration, and freemium access control. Built with a focus on real-world application structure and scalable development.',
    image: '/movieflix.png',
    link: 'https://github.com/maryamzimal/MovieFlix',
    tags: ['Nuxt 4', 'TypeScript', 'Drizzle ORM', 'NuxtHub', 'D1'],
    features: [
      'Custom Auth with Email & Password',
      'Secure nuxt-auth-utils Sessions',
      'Freemium Access Model Control',
      'TMDB API & Server API Layer'
    ],
    glow: 'from-cyan-500/20 to-blue-600/20'
  },
  {
    title: 'Veloura Dining - Premium Experience',
    description:
      'A luxury restaurant web experience focused on elegance, performance, and real usability. Built with a focus on spacing, typography, and subtle accents for a premium feel.',
    image: '/Veloura.png',
    link: 'https://github.com/maryamzimal/Veloura',
    tags: ['Nuxt 3', 'Tailwind', 'Auth Flows', 'Micro-interactions'],
    features: [
      'Responsive UI & Clean Components',
      'Luxury Dark Theme Design',
      'Complete Authentication Flows',
      'Smart State-Based Navigation'
    ],
    glow: 'from-purple-500/20 to-fuchsia-600/20'
  },
  {
    title: 'Pharma Curate - Clinical Pharmacy Platform',
    description:
      'A professional, clinical-grade e-commerce and pharmacy management platform. Provides a seamless experience for patients to manage their health and for pharmacists to handle clinical workflows — from prescription verification to multi-step order fulfillment.',
    image: '/curate.png',
    link: 'https://github.com/maryamzimal/curate',
    tags: ['Nuxt 4', 'Tailwind CSS', 'Drizzle ORM', 'NuxtHub Blob', 'SQLite', 'Nitro'],
    features: [
      'Role-Based Access Control',
      'Prescription Upload & Verification Workflow',
      'Multi-Step Clinical Order Lifecycle',
      'Secure Medical Document Storage',
      'Digital Pharmacy with Category Browsing',
      'Inventory Control & Expiry Tracking'
    ],
    glow: 'from-teal-500/20 to-emerald-600/20'
  },
]

// Particles logic (matches theme)
</script>

<template>
  <section id="projects" class="py-12 px-6 relative overflow-hidden border-y border-white/5">
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
          :class="[index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse']">
          <!-- Project Visual (Mockup) -->
          <div class="w-full lg:w-[55%] relative transform transition-all duration-700 group-hover:scale-[1.01]">
            <!-- Subtle Glow Background -->
            <div
              class="absolute -inset-4 rounded-[2rem] bg-gradient-to-br opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
              :class="project.glow" />

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
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01]" />
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
                  class="px-2 py-0.5 text-[9px] uppercase tracking-wider bg-white/5 border border-white/10 text-primary-300 rounded-md" />
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
                  class="text-primary-400 hover:text-primary-300 p-0 font-bold text-sm tracking-tight transition-all" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>

</style>
