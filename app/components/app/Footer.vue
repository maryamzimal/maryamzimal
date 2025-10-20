<script setup lang="ts">
const { footer } = useAppConfig()
</script>

<template>
  <div>
    <div class="w-screen relative left-1/2 right-1/2 -translate-x-1/2">
      <USeparator size="sm" color="neutral" />
    </div>

    <div class="mx-auto">
      <UFooter
        class="z-10 bg-default text-dimmed">
        {{ footer.credits }}

        <!-- <template #right>
          <template v-if="footer?.links">
            <UButton
              v-for="(link, index) in footer?.links"
              :key="index"
              v-bind="{
                size: 'md',
                color: 'primary',
                variant: 'ghost',
                ...link,
              }"
              class="px-2" />
          </template>
        </template> -->
      </UFooter>
    </div>
  </div>
</template>
