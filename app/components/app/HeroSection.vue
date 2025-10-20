<script setup>
const appConfig = useAppConfig()
const socialLinks = computed(() => appConfig.footer?.links || [])
</script>

<template>
  <section
    class="relative flex items-center justify-center min-h-[90vh] px-6 py-20 overflow-hidden
           bg-[radial-gradient(ellipse_at_center,var(--gradient-from)_0%,var(--gradient-to)_100%)] transition-colors duration-500">
    <UContainer
      class="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20 relative z-10">
      <div class="lg:w-1/2 text-center lg:text-left space-y-6">
        <UBadge
          label="Available for online projects"
          variant="subtle"
          size="md"
          class="px-5 py-2 ring-1 ring-emerald-400/30 rounded-xl backdrop-blur-md" />

        <h1
          class="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight leading-tight text-shadow-teal-100 animate-fade-in-up">
          Hey, I'm
          <span
            class="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent whitespace-nowrap">
            Maryam Zimal
          </span>
          <br>
          <span
            class="text-2xl sm:text-4xl font-semibold text-shadow-teal-50">
            Full Stack Web Developer
          </span>
        </h1>

        <p
          class="text-md sm:text-xl text-toned leading-relaxed max-w-2xl mx-auto -mt-2 lg:mx-0 animate-fade-in-up delay-100">
          Building modern, scalable, and user-friendly web applications that turn complex ideas into stunning, high-performance digital experiences.
        </p>

        <div
          class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up delay-200">
          <UButton
            label="More About Me"
            icon="i-heroicons-arrow-right-20-solid"
            trailing
            size="lg"
            variant="soft"
            to="#about"
            class="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-primary-600 shadow-lg hover:shadow-primary-500/40 hover:scale-104 transition-transform duration-300 text-toned" />
        </div>

        <div
          class="flex justify-center lg:justify-start gap-2 animate-fade-in-up delay-300">
          <UButton
            v-for="(link, index) in socialLinks"
            :key="index"
            :icon="link.icon"
            :to="link.to"
            :target="link.target"
            :aria-label="link['aria-label']"
            size="lg"
            variant="subtle"
            class="bg-neutral-10 rounded-xl p-2 hover:bg-teal-700/10 transition-all duration-300 hover:scale-110" />
        </div>
      </div>

      <div class="lg:w-1/2 flex justify-center relative group animate-fade-in-right">
        <div
          class="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden ring-[6px] ring-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-[1.05]">
          <NuxtImg
            src="/img.jpeg"
            alt="Maryam Zimal Profile"
            class="w-full h-full object-cover rounded-full saturate-125 brightness-105"
            loading="lazy"
            :width="400"
            :height="400" />
        </div>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
/* === Animations === */
@keyframes fade-in-up {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
.animate-fade-in-up.delay-100 { animation-delay: 0.1s; }
.animate-fade-in-up.delay-200 { animation-delay: 0.2s; }
.animate-fade-in-up.delay-300 { animation-delay: 0.3s; }

@keyframes fade-in-right {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}
.animate-fade-in-right { animation: fade-in-right 0.8s ease-out forwards; opacity: 0; }
</style>
