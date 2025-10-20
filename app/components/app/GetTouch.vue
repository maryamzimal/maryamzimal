<template>
  <section class="py-12 px-4 sm:px-8 relative overflow-hidden">
    <UContainer class="relative z-10 text-center sm:text-left space-y-8">
      <!-- Heading -->
      <div class="flex flex-col gap-1.5 mb-2 sm:mb-4 text-center sm:text-left">
        <h1 class="text-primary text-2xl sm:text-3xl lg:text-4xl font-extrabold">
          Get in Touch
        </h1>
      </div>

      <!-- Contact Card -->
      <UCard
        class="relative overflow-hidden p-5 sm:p-6 md:p-8
               bg-white/5 dark:bg-slate-900/50 backdrop-blur-xl
               border border-white/10 dark:border-white/5
               rounded-2xl shadow-lg mt-8 sm:mt-10">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <!-- ✅ Left Text Content -->
          <div class="space-y-3 text-center sm:text-left flex-1">
            <div class="flex items-center justify-center sm:justify-start gap-2 font-bold">
              <UIcon name="i-lucide-rocket" class="w-5 h-5 text-primary" />
              <span class="text-md sm:text-lg font-extrabold">Let’s work together!</span>
            </div>
            <p class="text-toned max-w-3xl mx-auto sm:mx-0 text-sm sm:text-base leading-relaxed">
              I'm available for freelance projects and would love to explore potential collaborations.
              Feel free to email me — let’s discuss how we can build something amazing together!
            </p>
          </div>

          <!-- ✅ Right Button (desktop right, mobile bottom-center) -->
          <div
            class="w-full sm:w-auto flex justify-center sm:justify-end mt-4 sm:mt-0">
            <UButton
              label="Contact Me"
              size="lg"
              variant="subtle"
              color="primary"
              class="px-6 py-2 rounded-xl"
              to="/contact" />
          </div>
        </div>
      </UCard>
    </UContainer>
  </section>
</template>
