<script setup lang="ts">
const services = [
  {
    title: 'Frontend Development',
    icon: 'i-lucide-monitor',
    description:
      'I design and build beautiful, responsive, and high-performance interfaces using Nuxt 3, Vue.js, and TailwindCSS. Everything is crafted for usability and visual harmony.',
    features: [
      'Responsive layouts',
      'Component-driven architecture',
      'Modern animations and transitions',
    ],
  },
  {
    title: 'Backend & API Development',
    icon: 'i-lucide-server',
    description:
      'I develop fast, scalable, and secure APIs and backend logic using Node.js, Express, and MongoDB — ready to power modern apps.',
    features: [
      'RESTful & GraphQL APIs',
      'Authentication & authorization',
      'Performance and security optimization',
    ],
  },
  {
    title: 'UI/UX Design',
    icon: 'i-lucide-palette',
    description:
      'I create designs that balance function and form — ensuring every user interaction feels intuitive and engaging.',
    features: [
      'Figma-based design systems',
      'Wireframes & prototypes',
      'User testing and iteration',
    ],
  },
  {
    title: 'Deployment & Optimization',
    icon: 'i-lucide-cloud',
    description:
      'I handle everything from CI/CD pipelines to server deployment, ensuring your site runs smoothly and efficiently across environments.',
    features: [
      'Vercel / Netlify deployment',
      'Cloud optimization',
      'Monitoring & scaling setup',
    ],
  },
]
</script>

<template>
  <section class="py-24 px-6 relative overflow-hidden">
    <UContainer class="relative z-10 space-y-16 lg:space-y-20">
      <!-- Header -->
      <div class="text-center py-4 flex flex-col gap-3 ">
        <h1
          class="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
          My Core Services
        </h1>
        <p class="text-toned max-w-2xl mx-auto text-sm sm:text-base">
          A blend of creativity, precision, and strategy — I deliver complete digital experiences.
        </p>
      </div>

      <!-- Service Cards -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        <UCard
          v-for="(service, index) in services"
          :key="index"
          class="group p-6 border border-transparent hover:border-primary/30 transition-all duration-300 bg-white/5 dark:bg-slate-900/50 backdrop-blur-xl rounded-2xl shadow-md hover:shadow-primary/20">
          <!-- Icon -->
          <div
            class="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 text-primary group-hover:from-primary/20 group-hover:to-pink-500/20 transition-all duration-300">
            <UIcon :name="service.icon" class="w-7 h-7" />
          </div>

          <!-- Title -->
          <h2
            class="text-lg font-semibold mt-4 text-foreground group-hover:text-primary transition-colors">
            {{ service.title }}
          </h2>

          <!-- Description -->
          <p class="text-sm text-toned mt-2 leading-relaxed">
            {{ service.description }}
          </p>

          <!-- Features -->
          <ul
            v-if="service.features"
            class="mt-4 text-sm text-toned space-y-1.5">
            <li
              v-for="(feature, i) in service.features"
              :key="i"
              class="flex items-start gap-2">
              <UIcon name="i-lucide-check-circle" class="text-primary w-4 h-4 mt-0.5" />
              <span>{{ feature }}</span>
            </li>
          </ul>
        </UCard>
      </div>

      <div class="text-center pt-8">
        <UButton
          label="Let's Work Together"
          icon="i-lucide-arrow-right"
          size="lg"
          color="primary"
          variant="soft"
          class="rounded-xl hover:shadow-primary/30 transition-all"
          to="/contact" />
      </div>
    </UContainer>
  </section>
</template>
