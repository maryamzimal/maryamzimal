<script setup lang="ts">
const techStack = ref([
  { name: 'HTML5', icon: 'logos:html-5' },
  { name: 'CSS', icon: 'logos:css-3' },
  { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'Javascript', icon: 'logos:javascript' },
  { name: 'Vue', icon: 'logos:vue' },
  { name: 'Nuxt UI', icon: 'logos:nuxt-icon' },
  { name: 'Git', icon: 'logos:git-icon' },
  { name: 'Node.js', icon: 'logos:nodejs' },
  { name: 'SQLite', icon: 'logos:sqlite' },
  { name: 'Nuxt Hub', icon: 'logos:nuxt-icon' },
  { name: 'Python', icon: 'logos:python' },
  { name: 'Visual Studio', icon: 'logos:visual-studio-code' },
])
</script>

<template>
  <section
    class="relative overflow-hidden rounded-3xl p-20 bg-gradient-to-b from-transparent to-purple-500/20 shadow-2xl">
    <!-- Heading -->
    <h3
      class="text-4xl sm:text-5xl font-extrabold text-center mb-10
             bg-clip-text text-transparent bg-gradient-to-r from-purple via-teal-500 to-pink-500 tracking-tight">
      Tech Stack and Tools
    </h3>

    <div class="space-y-8">
      <!-- Row 1 -->
      <div class="tech-slider">
        <div class="tech-track">
          <div
            v-for="(t, i) in [...techStack, ...techStack]"
            :key="'row1-' + i"
            class="tech-item">
            <div
              class="flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                     border border-slate-200 dark:border-slate-700
                     bg-white/90 dark:bg-slate-800/80 shadow-md
                     hover:shadow-xl hover:scale-105
                     transition-all duration-300">
              <Icon :name="t.icon" size="25" />
              <span class="text-sm font-semibold text-slate-700 dark:text-slate-200">
                {{ t.name }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Row 2 (reverse scroll) -->
      <div class="tech-slider">
        <div class="tech-track reverse">
          <div
            v-for="(t, i) in [...techStack, ...techStack]"
            :key="'row2-' + i"
            class="tech-item">
            <div
              class="flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                     border border-slate-200 dark:border-slate-700
                     bg-white/90 dark:bg-slate-800/80 shadow-md
                     hover:shadow-xl hover:scale-105
                     transition-all duration-300">
              <Icon :name="t.icon" size="25" />
              <span class="text-sm font-semibold text-slate-700 dark:text-slate-200">
                {{ t.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Fade edges -->
    <div class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-slate-900" />
    <div class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-slate-900" />
  </section>
</template>

<style scoped>
.tech-slider {
  overflow: hidden;
  position: relative;
  width: 100%;
}

.tech-track {
  display: flex;
  width: max-content;
  animation: scroll-left 30s linear infinite;
}

.tech-track.reverse {
  animation: scroll-right 32s linear infinite;
}

.tech-item {
  flex: 0 0 auto;
  margin-right: 1.5rem;
}

/* Hover pause (optional but smooth) */
.tech-slider:hover .tech-track {
  animation-play-state: paused;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes scroll-right {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
