<script setup>
const scrollContainer = ref(null)
</script>

<template>
  <section class="px-4 sm:px-6 py-10">
    <UContainer>
      <!-- Section Title -->
      <div class="flex flex-col gap-1.5 mb-6 text-center sm:text-left">
        <h1 class="text-primary text-xl sm:text-2xl font-extrabold">
          Contribution Graph
        </h1>
        <h2 class="text-dimmed text-base sm:text-lg">
          Proof I exist — at least on GitHub.
        </h2>
      </div>

      <!-- Scrollable Graph (No Arrows) -->
      <div
        ref="scrollContainer"
        class="overflow-x-auto scrollbar scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-800 hover:scrollbar-thumb-gray-400 rounded-md pb-3 max-w-full mx-auto mt-6 sm:mt-8">
        <div class="min-w-[900px] sm:min-w-[1100px] md:min-w-[1300px]">
          <NuxtImg
            src="/graph.png"
            alt="GitHub Contribution Graph"
            class="w-full h-auto object-contain rounded-md"
            loading="lazy" />
        </div>
      </div>

      <!-- Footer Quote -->
      <p class="text-toned text-sm mt-4 text-center md:text-right italic">
        “Every green square tells a story of a late night.”
      </p>
    </UContainer>
  </section>
</template>
