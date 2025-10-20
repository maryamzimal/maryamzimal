<template>
  <section class="py-15 px-6 relative overflow-hidden">
    <UContainer class="relative z-10 text-center space-y-12">
      <!-- Heading -->
      <div class="flex flex-col gap-1.5 mb-6 text-center sm:text-left">
        <h1 class="text-primary text-2xl sm:text-3xl font-extrabold">
          What I've been working on
        </h1>
        <h2 class="text-dimmed text-base sm:text-lg">
          Highlighted Projects
        </h2>
      </div>

      <!-- Project Cards -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mt-6 sm:mt-10">
        <UCard
          v-for="(project, index) in featuredProjects"
          :key="index"
          class="group relative overflow-hidden p-0 rounded-2xl  backdrop-blur-xl hover:scale-[1.03] hover:border-primary/40 transition-all duration-300">
          <!-- Project Image -->
          <div class="relative h-48 overflow-hidden rounded-t-2xl">
            <NuxtImg
              :src="project.image"
              :alt="project.title"
              class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300" />
          </div>

          <!-- Content -->
          <div class="p-5 text-left space-y-2">
            <h3 class="font-semibold text-lg text-foreground">
              {{ project.title }}
            </h3>
            <p class="text-sm text-toned line-clamp-2">
              {{ project.description }}
            </p>
            <div class="flex items-center justify-between mt-3">
              <div class="flex gap-2">
                <UBadge
                  v-for="(tag, tIndex) in project.tags"
                  :key="tIndex"
                  :label="tag"
                  size="xs"
                  variant="subtle"
                  class="backdrop-blur-sm" />
              </div>
              <UButton
                :to="project.link"
                icon="i-lucide-arrow-up-right"
                variant="ghost"
                size="xs"
                target="_blank"
                aria-label="See all" />
            </div>
          </div>
        </UCard>
      </div>

      <!-- CTA -->
      <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
        <UButton
          label="View All Projects"
          icon="i-lucide-arrow-right"
          trailing
          variant="subtle"
          size="lg"
          to="/projects"
          class="px-4 py-2 rounded-xl" />
      </div>
    </UContainer>
  </section>
</template>

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
    title: 'Todo App',
    description:
      'Web app that allows users to generate and download AI images instantly using OpenAI APIs.',
    image: '/images.jpg',
    link: 'https://aigenapp.com',
    tags: ['Nuxt', 'OpenAI', 'API'],
  },
]
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
