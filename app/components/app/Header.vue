<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { Icon } from '@iconify/vue'

defineProps<{
  links: NavigationMenuItem[]
}>()
</script>

<template>
  <div class="fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-10">
    <UNavigationMenu
      :items="links"
      variant="link"
      color="neutral"
      class="bg-muted/80 backdrop-blur-sm rounded-full px-4 sm:px-6 border border-muted/50 shadow-lg shadow-neutral-950/5 flex items-center gap-3"
      :ui="{
        link: 'px-4 py-2 text-[15px] font-medium transition-all hover:text-primary',
        linkLeadingIcon: 'hidden',
      }">
      <template #list-leading>
        <NuxtLink
          to="/"
          class="flex items-center gap-3 text-lg font-semibold text-foreground transition-all duration-500">
          <Icon
            icon="lucide:code-2"
            class="w-6 h-6 text-primary drop-shadow-[0_0_8px_rgba(139,92,246,0.5)] transition-transform duration-1000 animate-[pulse_3s_ease-in-out_infinite]" />

          <span
            class="font-serif tracking-wide bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(147,51,234,0.4)]">
            Maryam Zimal
          </span>
        </NuxtLink>
      </template>

      <!-- Color Mode -->
      <template #list-trailing>
        <AppColorModeButton />
      </template>
    </UNavigationMenu>
  </div>
</template>
