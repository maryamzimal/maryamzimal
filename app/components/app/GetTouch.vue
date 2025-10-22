<script setup lang="ts">
// Reuse same particle animation logic as other sections
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
    class="py-20 px-6 relative overflow-hidden min-h-[80vh]
           bg-gradient-to-br from-purple-600/20 via-purple-500/10 to-purple-700/20">
    <!-- Particles + Grid Background -->
    <div class="absolute inset-0 z-0">
      <div class="particles-container">
        <div v-for="i in 30" :key="i" class="particle" :style="getParticleStyle(i)" />
      </div>
      <div class="absolute inset-0 opacity-5">
        <div class="grid-bg" />
      </div>
    </div>

    <UContainer class="relative z-10 text-center sm:text-left space-y-10">
      <!-- Heading -->
      <div class="flex flex-col justify-center gap-1.5 mb-6 sm:mb-4 text-center sm:text-left">
        <h1
          class="text-transparent text-center bg-clip-text bg-gradient-to-r
                 from-cyan-400 via-purple-500 to-pink-500
                 text-3xl sm:text-4xl font-extrabold tracking-tight animate-fade-in-up">
          Have an Idea? <span>Let's Build It.</span>
        </h1>
      </div>

      <!-- Contact Card -->
      <div
        class="relative overflow-hidden p-5 sm:p-6 md:p-8 rounded-2xl
               backdrop-blur-xl
               border border-transparent hover:border-purple-300/40
               shadow-[0_0_20px_rgba(139,92,246,0.15)]
               hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]
               transition-all duration-500 ease-in-out
               hover:scale-[1.03] animate-fade-in-up max-w-4xl mx-auto my-12">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <!-- Left Content -->
          <div class="space-y-2 sm:space-y-3 text-center sm:text-left flex-1">
            <div class="flex justify-center sm:justify-start items-center gap-2">
              <h3 class="text-lg font-bold text-white">
                Ready to discuss your next project?
              </h3>
            </div>
            <p class="text-sm sm:text-base text-purple-200 max-w-md mx-auto sm:mx-0">
              Send me a quick message or schedule a call — I’m always open to hearing exciting new ideas.
            </p>
          </div>

          <!-- Button -->
          <div class="w-full sm:w-auto flex justify-center sm:justify-center">
            <UButton
              label="Email Me"
              icon="i-lucide-mail"
              size="lg"
              class="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-50 transition font-semibold"
              href="mailto:maryamzimal24@gmail.com" />
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
/* --- Animations reused globally --- */
@keyframes particle-float {
  0% { opacity: 0; transform: translateY(100vh) translateX(0px); }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { opacity: 0; transform: translateY(-100px) translateX(50px); }
}

@keyframes grid-move {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

@keyframes fade-in-up {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* --- Classes for reusable animations --- */
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

.grid-bg {
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(rgba(139, 92, 246, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(139, 92, 246, 0.05) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: grid-move 25s linear infinite;
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out;
}
</style>
