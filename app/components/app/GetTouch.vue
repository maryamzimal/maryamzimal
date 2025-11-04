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
    class="py-20 px-6 relative overflow-hidden min-h-screen
       bg-gradient-to-br from-purple-600/20 via-purple-500/10 to-purple-700/20
       flex flex-col justify-center items-center text-center">
    <!-- Particles + Grid Background -->
    <div class="absolute inset-0 z-0">
      <div class="particles-container">
        <div v-for="i in 30" :key="i" class="particle" :style="getParticleStyle(i)" />
      </div>
      <div class="absolute inset-0 opacity-5">
        <div class="grid-bg" />
      </div>
    </div>

    <!-- Centered Content -->
    <UContainer class="relative z-10 max-w-5xl flex flex-col justify-center items-center">
      <div class="flex flex-col items-center text-center space-y-8">
        <!-- Heading -->
        <h1
          class="text-2xl sm:text-3xl md:text-5xl font-extrabold
           text-transparent bg-clip-text bg-gradient-to-r
           from-cyan-400 via-teal-500 to-purple-500
           animate-fade-in-up leading-tight">
          Have an Idea?
          <br class="sm:hidden">
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r
           from-cyan-400 via-fuchsia-500 to-purple-500">
            Let's Build It
          </span>
        </h1>

        <!-- Paragraph -->
        <p class="text-purple-200 text-lg sm:text-xl  mx-auto opacity-90 mt-4 leading-relaxed text-nowrap">
          Got a project in mind? I craft engaging, user-focused experiences.
        </p>

        <!-- Buttons -->
        <div class="flex justify-center gap-6 mt-4">
          <UButton
            label="Email Me"
            icon="i-lucide-mail"
            size="lg"
            class="px-8 py-3 rounded-2xl font-semibold
               bg-gradient-to-r from-purple-500 via-teal-500 to-pink-600
               text-white shadow-lg hover:shadow-xl hover:scale-105
               transition-all duration-300"
            href="mailto:maryamzimal24@gmail.com" />

          <UButton
            label="LinkedIn"
            icon="i-simple-icons-linkedin"
            variant="subtle"
            size="lg"
            class="px-8 py-3 rounded-2xl font-semibold
               text-white shadow-lg hover:shadow-xl hover:scale-105
               transition-all duration-300"
            href="https://www.linkedin.com/in/your-linkedin-maryam-shahid"
            target="_blank" />
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
