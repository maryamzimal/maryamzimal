<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { Icon } from '@iconify/vue'

const isMenuOpen = ref(false)

defineProps<{
  links: NavigationMenuItem[]
}>()

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header
    class="fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-50
           w-[95%] sm:w-auto bg-white/10 dark:bg-slate-800/70
           backdrop-blur-xl border border-white/10 dark:border-white/5
           rounded-xl shadow-lg shadow-black/30
           transition-all duration-500 px-6 sm:px-8">
    <!--  Main Header Row -->
    <div class="flex items-center justify-between h-14">
      <!-- Left Section -->
      <NuxtLink
        to="/"
        class="flex items-center gap-3 text-lg sm:text-xl font-semibold text-foreground whitespace-nowrap">
        <Icon icon="lucide:code-2" class="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
        <span class="font-serif tracking-wide bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Maryam Zimal
        </span>
      </NuxtLink>

      <!-- Desktop Only -->
      <div class="hidden md:flex flex-1 items-center justify-center ml-8">
        <UNavigationMenu
          :items="links"
          variant="link"
          class="text-toned gap-8" />
      </div>

      <!-- Right Section -->
      <div class="flex items-center gap-2">
        <AppColorModeButton />
        <!-- Toggle Button -->
        <UButton
          :icon="isMenuOpen ? 'i-heroicons-x-mark-20-solid' : 'i-heroicons-bars-3-20-solid'"
          variant="ghost"
          class="md:hidden"
          aria-label="Toggle mobile menu"
          @click="toggleMenu" />
      </div>
    </div>

    <!--  Mobile Navigation -->
    <!-- <transition name="fade-slide"> -->
    <div
      v-if="isMenuOpen"
      class="md:hidden px-2 py-2 shadow-xl">
      <UNavigationMenu
        :items="links"
        orientation="vertical"
        variant="link"
        class="-mx-2.5"
        @click="closeMenu" />
    </div>
    <!-- </transition> -->
  </header>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
