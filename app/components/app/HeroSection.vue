<script setup>
const appConfig = useAppConfig()
const socialLinks = computed(() => appConfig.footer?.links || [])
defineProps({
  name: {
    type: String,
    default: 'Maryam Zimal'
  },
  title: {
    type: String,
    default: 'Full Stack (Nuxt.Js) Developer'
  },
  description: {
    type: String,
    default: 'Crafting elegant, high-performance, and scalable web applications using modern frameworks — blending creativity with clean, optimized code.'
  }
})

// Generate random styles for floating particles
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
  <section class="min-h-screen flex items-center justify-center relative overflow-hidden">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-transparent to-purple-500/20" />
    <!-- Bottom gradient that flows into skills section -->
    <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-purple-500/20" />

    <!-- Animated Background Elements -->
    <div class="absolute inset-0">
      <!-- Floating geometric shapes -->
      <div class="absolute top-20 left-10 w-20 h-20 bg-primary-500/10 rounded-full animate-float-slow" />
      <div class="absolute top-40 right-20 w-16 h-16 bg-purple-500/10 rounded-lg rotate-45 animate-float-reverse" />
      <div class="absolute bottom-32 left-20 w-12 h-12 bg-pink-500/10 rounded-full animate-pulse-slow" />
      <div class="absolute bottom-20 right-32 w-24 h-24 bg-blue-500/10 rounded-lg animate-spin-slow" />

      <!-- Animated lines -->
      <div
        class="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent animate-slide-right" />
      <div
        class="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-slide-left" />

      <!-- Floating particles -->
      <div class="particles-container">
        <div v-for="i in 35" :key="i" class="particle" :style="getParticleStyle(i)" />
      </div>

      <!-- Grid pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="grid-bg" />
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <div class="space-y-8">
        <div class="flex justify-center w-full">
          <div class="group relative flex max-w-fit flex-row items-center justify-center rounded-full bg-white/40 px-4 py-1.5 text-xs sm:text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40">
            <div class="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-purple-500/50 via-green-400/50 to-orange-500/50 bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]" />
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center sm:text-left" data-v-8a7d99a5="">
              <div class="text-cyan-400 text-xl sm:text-lg animate-bounce font-semibold hidden lg:block" data-v-8a7d99a5="">
                &lt;/&gt;
              </div>
              <div class="flex flex-col items-center sm:items-start leading-tight" data-v-8a7d99a5="">
                <span class="font-bold text-cyan-400 uppercase tracking-wide text-sm sm:text-base" data-v-8a7d99a5="">Available for online projects</span>
                <span class="text-xs sm:text-sm bg-gradient-to-r from-teal-400 via-purple-400 to-emerald-300 text-transparent bg-clip-text" data-v-8a7d99a5=""> Ready to create something amazing </span>
              </div>
              <span class="hidden lg:block text-xs sm:text-sm font-medium text-green-200 border-t sm:border-t-0 sm:border-l border-cyan-500/40 mt-2 sm:mt-0 pt-1 sm:pt-0 px-2 sm:pl-3" data-v-8a7d99a5=""> Full-Stack Developer </span>
            </div>
          </div>
        </div>
        <!-- Main heading -->
        <div class="space-y-4">
          <h1
            class="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent animate-gradient-x">
            {{ name }}
          </h1>
          <h2 class="text-2xl md:text-3xl text-teal-400 font-light animate-fade-in-up">
            {{ title }}
          </h2>
        </div>

        <!-- Description -->
        <p class="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          {{ description }}
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-row sm:flex-row gap-4 justify-center items-center ">
          <UButton
            v-for="(link, index) in socialLinks"
            :key="index"
            :icon="link.icon"
            :to="link.to"
            :target="link.target"
            :aria-label="link['aria-label']"
            size="xl"
            variant="ghost"
            class="text-cyan-400 hover:text-fuchsia-400 hover:scale-110 transition-all duration-300 p-4 rounded-full" />
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <UIcon name="i-heroicons-chevron-down" class="w-6 h-6 text-gray-400" />
    </div>
  </section>
</template>

<style scoped>
/* Custom animations */
@keyframes gradient-x {

  0%,
  100% {
    background-size: 200% 200%;
    background-position: left center;
  }

  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}

@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float-slow {

  0%,
  100% {
    transform: translateY(0px) translateX(0px);
  }

  33% {
    transform: translateY(-20px) translateX(10px);
  }

  66% {
    transform: translateY(10px) translateX(-5px);
  }
}

@keyframes float-reverse {

  0%,
  100% {
    transform: translateY(0px) translateX(0px) rotate(45deg);
  }

  50% {
    transform: translateY(15px) translateX(-10px) rotate(45deg);
  }
}

@keyframes pulse-slow {

  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }

  50% {
    opacity: 0.8;
    transform: scale(1.2);
  }
}

@keyframes spin-slow {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes slide-right {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}

@keyframes slide-left {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
}

@keyframes particle-float {
  0% {
    opacity: 0;
    transform: translateY(100vh) translateX(0px);
  }

  10% {
    opacity: 1;
  }

  90% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translateY(-100px) translateX(50px);
  }
}

@keyframes grid-move {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(50px, 50px);
  }
}

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 3s ease infinite;
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out;
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animate-float-reverse {
  animation: float-reverse 6s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

.animate-slide-right {
  animation: slide-right 8s ease-in-out infinite;
}

.animate-slide-left {
  animation: slide-left 10s ease-in-out infinite;
}

/* Particles */
.particles-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.particle {
  position: absolute;
  background: rgba(59, 130, 246, 0.4);
  border-radius: 50%;
  animation: particle-float linear infinite;
  pointer-events: none;
}

.particle:nth-child(2n) {
  background: hwb(271 20% 8% / 0.3);
}

.particle:nth-child(3n) {
  background: rgba(236, 72, 153, 0.3);
}

.particle:nth-child(4n) {
  background: rgba(34, 197, 94, 0.2);
}

.particle:nth-child(5n) {
  background: rgba(251, 191, 36, 0.3);
}

/* Grid Background */
.grid-bg {
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: grid-move 25s linear infinite;
}
</style>
