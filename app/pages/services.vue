<script setup lang="ts">
const services = [
  {
    title: 'Frontend Development',
    icon: 'i-lucide-monitor',
    description:
      'Beautiful, high-performance interfaces built with Nuxt 3, Vue, and Tailwind — crafted for clarity, motion, and responsiveness.',
    features: [
      'Responsive layouts',
      'Component-driven UI',
      'Modern animations',
    ],
  },
  {
    title: 'Backend & API Development',
    icon: 'i-lucide-server',
    description:
      'Powerful Node.js and Express backends — secure, scalable, and ready to serve your modern applications.',
    features: [
      'RESTful / GraphQL APIs',
      'JWT Authentication',
      'High performance design',
    ],
  },
  {
    title: 'UI/UX Design',
    icon: 'i-lucide-palette',
    description:
      'User-centered designs that combine beauty with usability, ensuring intuitive and delightful experiences.',
    features: [
      'Design systems in Figma',
      'Wireframes & prototypes',
      'Interactive testing',
    ],
  },
  {
    title: 'Deployment & Optimization',
    icon: 'i-lucide-cloud',
    description:
      'From CI/CD to cloud scaling — I deploy and optimize your apps for speed, uptime, and reliability.',
    features: [
      'Vercel / Netlify',
      'Cloud optimization',
      'Monitoring & scaling',
    ],
  },
]
</script>

<template>
  <section class="py-24 px-6 relative overflow-hidden">
    <div
      class="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-slate-900/50 to-purple-800/40 blur-3xl opacity-50" />

    <UContainer class="relative z-10 space-y-20">
      <!-- Header -->
      <div class="text-center space-y-3">
        <h1
          class="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
          My Core Services
        </h1>
        <p class="text-purple-200/80 max-w-2xl mx-auto text-base sm:text-lg">
          A blend of creativity, precision, and engineering — built for performance and beauty.
        </p>
      </div>

      <!-- Cards -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="group relative p-[1px] rounded-2xl bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 hover:from-cyan-400 hover:to-pink-400 transition-all duration-500 w-full max-w-sm">
          <!-- Inner Card -->
          <div
            class="h-full rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/10
            hover:border-white/20 transition-all duration-500 p-6 sm:p-7 flex flex-col items-start
            shadow-[0_0_30px_rgba(139,92,246,0.15)] group-hover:shadow-[0_0_40px_rgba(236,72,153,0.25)]">
            <!-- Floating Icon -->
            <div
              class="relative w-12 h-12 flex items-center justify-center rounded-xl mb-4
              bg-gradient-to-br from-cyan-500/20 to-pink-500/20 text-cyan-400 group-hover:scale-110 transition-transform duration-500">
              <UIcon :name="service.icon" class="w-6 h-6" />
              <div
                class="absolute inset-0 rounded-xl bg-gradient-to-tr from-cyan-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />
            </div>

            <!-- Title -->
            <h2
              class="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
              {{ service.title }}
            </h2>

            <!-- Description -->
            <p class="text-sm text-purple-200/80 leading-relaxed mb-4">
              {{ service.description }}
            </p>

            <!-- Features -->
            <ul class="space-y-1.5 text-sm text-purple-300/80">
              <li
                v-for="(feature, i) in service.features"
                :key="i"
                class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-check-circle"
                  class="text-cyan-400 w-4 h-4 mt-0.5" />
                <span>{{ feature }}</span>
              </li>
            </ul>

            <!-- Glow effect -->
            <div
              class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 bg-gradient-to-tr from-cyan-500 via-fuchsia-500 to-pink-500 blur-xl transition-opacity duration-700" />
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center pt-8">
        <UButton
          label="Let's Build Something Amazing"
          icon="i-lucide-sparkles"
          size="lg"
          color="primary"
          variant="soft"
          class="rounded-xl hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:scale-105 transition-all"
          to="/contact" />
      </div>
    </UContainer>
  </section>
</template>
