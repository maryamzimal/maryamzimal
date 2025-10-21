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
</script>

<template>
  <section class="py-16 px-6 relative overflow-hidden">
    <UContainer class="relative z-10 text-center space-y-12">
      <!-- Heading -->
      <div class="flex flex-col gap-1.5 mb-6 text-center sm:text-left">
        <h1 class="text-primary text-2xl sm:text-3xl font-extrabold tracking-tight">
          What I've Been Working On
        </h1>
        <h2 class="text-dimmed text-base sm:text-lg font-medium">
          Highlighted Projects
        </h2>
      </div>

      <!-- Project Cards -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mt-6 sm:mt-10">
        <UCard
          v-for="(project, index) in featuredProjects"
          :key="index"
          class="group relative overflow-hidden rounded-2xl p-0
                 backdrop-blur-xl border border-white/10
                 bg-white/5 dark:bg-slate-900/50
                 shadow-[0_0_20px_rgba(255,255,255,0.05)]
                 hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]
                 hover:border-primary/50 transition-all duration-500 ease-in-out hover:scale-[1.03]">
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

            <!-- Tags + Button -->
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
              <!-- <UButton
                :to="project.link"
                icon="i-lucide-arrow-up-right"
                variant="ghost"
                size="xs"
                target="_blank"
                class="hover:text-primary transition-colors"
                aria-label="See project" /> -->
            </div>
          </div>
        </UCard>
      </div>

      <!-- CTA -->
      <div class="flex justify-start mt-10">
        <UButton
          label="View All Projects"
          icon="i-lucide-arrow-right"
          trailing
          variant="subtle"
          size="lg"
          class="px-6 py-2 rounded-xl bg-primary/10 hover:bg-primary/20 backdrop-blur-md transition" />
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
</style>
