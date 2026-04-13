<script setup lang="ts">
import { ref } from 'vue'

const mouse = ref({ x: 0, y: 0 })
const handleMouseMove = (e: MouseEvent) => {
  mouse.value = { x: e.clientX, y: e.clientY }
}

const parallax = (strength = 25) => ({
  transform: `translate3d(${mouse.value.x / strength}px, ${mouse.value.y / strength}px, 0)`
})

// Standard particle logic for exact theme match
const getParticleStyle = () => {
  const size = Math.random() * 6 + 2
  const left = Math.random() * 100
  const animationDelay = Math.random() * 6
  const animationDuration = Math.random() * 12 + 8

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
    id="contact"
    class="py-16 px-6 relative overflow-hidden bg-gradient-to-br from-purple-600/20 via-purple-500/10 to-purple-700/20"
    @mousemove="handleMouseMove"
  >
    <!-- ✨ Background Elements -->
    <div class="absolute inset-0 z-0">
      <div class="particles-container">
        <div
          v-for="i in 25"
          :key="i"
          class="particle"
          :style="getParticleStyle()" />
      </div>
      <div class="absolute inset-0 opacity-5">
        <div class="grid-bg" />
      </div>
      <!-- Compact Background Blobs -->
      <div class="absolute top-1/2 left-1/3 w-64 h-64 bg-primary-500/10 rounded-full blur-[80px] animate-pulse-slow" />
      <div class="absolute bottom-1/3 right-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] animate-float-slow" />
    </div>

    <!-- 🌌 Compact Content Card -->
    <UContainer
      class="relative z-10 max-w-4xl"
      :style="parallax(80)">
      <div
        class="group relative p-6 md:p-10 text-center ">
        <!-- Status Badge -->
        <div class="flex justify-center mb-6 animate-fade-in-up">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span class="relative flex h-1.5 w-1.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
            </span>
            <span class="text-[10px] font-bold text-green-300 uppercase tracking-[0.2em]">Available</span>
          </div>
        </div>

        <!-- Heading -->
        <h2
          class="text-3xl md:text-5xl font-black mb-4 tracking-tight animate-fade-in-up delay-100">
          <span class="text-white">Have an Idea?</span>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 animate-gradient-x ml-3">
            Let's Build It
          </span>
        </h2>

        <!-- Paragraph -->
        <p
          class="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed animate-fade-in-up delay-200">
          Got a project in mind? I craft engaging, user-focused experiences that bring ideas to life with precision.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up delay-300">
          <UButton
            label="Email Me"
            icon="i-lucide-mail"
            size="lg"
            class="w-full sm:w-auto px-8 py-3 rounded-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-cyan-500/20"
            href="mailto:maryamzimal24@gmail.com" />

          <UButton
            label="LinkedIn"
            icon="i-simple-icons-linkedin"
            variant="ghost"
            size="lg"
            class="w-full sm:w-auto px-8 py-3 rounded-xl font-bold text-gray-400 hover:text-white hover:bg-white/5 border border-white/5 transition-all duration-300"
            href="https://www.linkedin.com/in/your-linkedin-maryam-shahid"
            target="_blank" />
        </div>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
/* --- Theme Animations --- */
@keyframes gradient-x {
  0%, 100% { background-size: 200% 200%; background-position: left center; }
  50% { background-size: 200% 200%; background-position: right center; }
}

@keyframes particle-float {
  0% { opacity: 0; transform: translateY(100vh) scale(0.5); }
  10%, 90% { opacity: 1; }
  100% { opacity: 0; transform: translateY(-50px) scale(1); }
}

@keyframes grid-move {
  0% { transform: translate(0, 0); }
  100% { transform: translate(40px, 40px); }
}

@keyframes fade-in-up {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes float-slow {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-10px, 10px); }
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.1; }
  50% { opacity: 0.2; }
}

/* --- Decoration --- */
.particles-container {
  position: absolute;
  inset: 0;
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

.animate-gradient-x {
  animation: gradient-x 3s ease infinite;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 6s ease-in-out infinite;
}

.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
</style>
