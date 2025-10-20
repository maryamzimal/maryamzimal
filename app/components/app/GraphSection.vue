<script setup>
const scrollContainer = ref(null)

function scrollLeft() {
  scrollContainer.value?.scrollBy({ left: -200, behavior: 'smooth' })
}

function scrollRight() {
  scrollContainer.value?.scrollBy({ left: 200, behavior: 'smooth' })
}
</script>

<template>
  <section class="px-6 py-10">
    <UContainer>
      <div class="flex flex-col gap-1.5 mb-6">
        <h1 class="text-primary  text-2xl sm:text-3xl font-extrabold">
          Contribution Graph
        </h1>
        <h2 class="text-dimmed text-base sm:text-lg">
          Proof I exist — at least on GitHub.
        </h2>
      </div>

      <!-- Scrollable Graph Section with Arrows at Ends -->
      <div class="flex items-center gap-3 max-w-[1150px] mx-auto mt-8">
        <!-- Left Arrow -->
        <UButton
          color="neutral"
          variant="ghost"
          class="flex-shrink-0 bg-black/40 hover:bg-black/60 text-highlighted p-2 rounded-full shadow-md"
          aria-label="Scroll left"
          @click="scrollLeft">
          <UIcon name="i-lucide-chevron-left" class="w-5 h-5" />
        </UButton>

        <!-- Scrollable area -->
        <div
          ref="scrollContainer"
          class="prose prose-invert overflow-x-auto scrollbar scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-800 hover:scrollbar-thumb-gray-400 rounded-md pb-2 flex-1">
          <div class="min-w-[1200px]">
            <NuxtImg
              src="/graph.png"
              alt="GitHub Contribution Graph"
              class="w-full h-auto object-contain rounded-md"
              loading="lazy" />
          </div>
        </div>

        <!-- Right Arrow -->
        <UButton
          color="neutral"
          variant="ghost"
          class="flex-shrink-0 bg-black/40 hover:bg-black/60 text-highlighted p-2 rounded-full shadow-md"
          aria-label="Scroll right"
          @click="scrollRight">
          <UIcon name="i-lucide-chevron-right" class="w-5 h-5" />
        </UButton>
      </div>

      <p class="text-toned text-sm mt-4 text-center md:text-right italic">
        “Every green square tells a story of a late night.”
      </p>
    </UContainer>
  </section>
</template>
