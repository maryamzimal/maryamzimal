<script setup lang="ts">
const services = [
  {
    title: 'Frontend & UI/UX Development',
    icon: 'i-lucide-monitor',
    description:
      'Designing fast, responsive, and user-centered interfaces with Vue 3, Nuxt 3, and Tailwind CSS — where performance meets pixel-perfect design.',
    // features: [
    //   'Modern responsive layouts',
    //   'Reusable Nuxt components',
    //   'Figma-based design systems',
    //   'Smooth animations & transitions',
    // ],
  },
  {
    title: 'Backend & Full-Stack Solutions',
    icon: 'i-lucide-server',
    description:
      'Developing secure, scalable, and efficient server architectures — connecting powerful backends with interactive Nuxt-based frontends.',
    // features: [
    //   'RESTful API integration',
    //   'Drizzle ORM database management',
    //   'Authentication & route protection',
    //   'Nuxt Hub integration & data handling',
    // ],
  },
  {
    title: 'Hosting, Deployment & Optimization',
    icon: 'i-lucide-cloud',
    description:
      'Deploying and optimizing web apps with Nuxt Hub and Cloudflare — ensuring reliability, speed, and global performance.',
    // features: [
    //   'Nuxt Hub & Cloudflare setup',
    //   'Custom domain configuration',
    //   'Performance & scaling optimization',
    //   'SEO and Core Web Vitals improvements',
    // ],
  },
]

// Particle styles
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
    class="py-20 px-6 relative overflow-hidden min-h-screen
           bg-gradient-to-br from-purple-600/20 via-purple-500/10 to-purple-700/20">
    <!-- Particles & Grid -->
    <div class="absolute inset-0 z-0">
      <!-- 🪩 Particles (animated globally) -->
      <div class="particles-container">
        <div
          v-for="i in 35"
          :key="i"
          class="particle"
          :style="getParticleStyle(i)" />
      </div>

      <!-- 🧊 Grid background -->
      <div class="absolute inset-0 opacity-5">
        <div class="grid-bg" />
      </div>
    </div>

    <UContainer class="relative z-10 space-y-16">
      <!-- Header -->
      <div class="flex flex-col gap-1.5 mb-11 text-center items-center justify-center">
        <h1
          class="text-4xl sm:text-5xl font-extrabold  bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-teal-400 to-pink-500 tracking-tight">
          My Core Services
        </h1>
        <h2 class="text-xl sm:text-2xl text-teal-100 mt-2">
          Blending creativity and strategy to build digital experience
        </h2>
      </div>

      <!-- Service Cards -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
        <UCard
          v-for="(service, index) in services"
          :key="index"
          class="group w-full max-w-sm p-5 sm:p-6 rounded-2xl border border-purple-500/10
          bg-white/5 dark:bg-slate-900/40 backdrop-blur-xl shadow-md hover:shadow-purple-500/20
          hover:-translate-y-2 transition-all duration-300 ease-out">
          <!-- Icon -->
          <div
            class="w-12 h-12 flex items-center justify-center rounded-xl
            bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10
            text-cyan-400 group-hover:from-cyan-500/20 group-hover:to-pink-500/20
            transition-all duration-300">
            <UIcon :name="service.icon" class="w-6 h-6" />
          </div>

          <!-- Title -->
          <h2
            class="text-lg font-semibold mt-4 text-cyan-400 group-hover: transition-colors duration-300">
            {{ service.title }}
          </h2>

          <!-- Description -->
          <p class="text-sm text-purple-200/90 mt-2 leading-relaxed">
            {{ service.description }}
          </p>

          <!-- Features -->
          <ul
            v-if="service.features"
            class="mt-4 text-sm text-purple-300/90 space-y-1.5">
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
        </UCard>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
/* Animations */
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
</style>
