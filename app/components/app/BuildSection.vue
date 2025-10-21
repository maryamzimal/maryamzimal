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
</script>

<template>
  <section class="py-20 px-6 relative overflow-hidden">
    <UContainer class="relative z-10 text-center space-y-12">
      <!-- Heading -->
      <div class="flex flex-col gap-1.5 mb-6 text-center sm:text-left">
        <h1 class="text-primary text-2xl sm:text-3xl font-extrabold tracking-tight">
          What I Can Build
        </h1>
        <h2 class="text-dimmed text-base sm:text-lg font-medium">
          Scalable, optimized, and beautifully responsive web apps.
        </h2>
      </div>

      <!-- Cards -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mt-6 sm:mt-10">
        <UCard
          v-for="(item, index) in highlights"
          :key="index"
          class="group relative overflow-hidden p-6 text-left
                 bg-white/5 dark:bg-slate-900/50 backdrop-blur-xl
                 border border-transparent rounded-2xl
                 transition-all duration-300
                 hover:border-primary/50 hover:scale-[1.04]
                 hover:shadow-[0_0_25px_rgba(139,92,246,0.2)]">
          <!-- Icon -->
          <div
            class="flex items-center justify-center w-12 h-12 rounded-xl
                   bg-gradient-to-r from-primary to-purple-500 text-white
                   shadow-md mb-4 group-hover:shadow-primary/40 transition-all duration-300">
            <UIcon :name="item.icon" class="w-6 h-6" />
          </div>

          <!-- Text -->
          <div class="relative z-10 space-y-1">
            <h3 class="font-semibold text-lg text-foreground">
              {{ item.title }}
            </h3>
            <p class="text-sm text-toned leading-relaxed">
              {{ item.description }}
            </p>
          </div>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>
