<template>
  <section class="py-12 px-4 sm:px-8 relative overflow-hidden">
    <UContainer class="relative z-10 text-center sm:text-left space-y-8">
      <!--  Heading -->
      <div class="flex flex-col gap-1.5 mb-2 sm:mb-4 text-center sm:text-left">
        <h1 class="text-primary text-2xl sm:text-3xl font-extrabold tracking-tight">
          Have an Idea? <span>Let's Build It.</span>
        </h1>
        <h2 class="text-dimmed max-w-xl leading-relaxed">
          Whether you’re starting something new or improving what you have — I’d love to collaborate and bring your ideas to life with clean, scalable, and creative code.
        </h2>
      </div>

      <UCard
        class="relative overflow-hidden p-5 sm:p-6 md:p-8
               rounded-2xl shadow-lg mt-8 sm:mt-10
               max-w-4xl mx-auto"
        variant="subtle">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <!-- Left Content -->
          <div class="space-y-2 sm:space-y-3 text-center sm:text-left flex-1">
            <div class="flex justify-center sm:justify-start items-center gap-2">
              <UIcon name="i-lucide-send" class="w-6 h-6" />
              <h3 class="text-lg font-bold text-shadow-indigo-50">
                Ready to discuss your next project?
              </h3>
            </div>
            <p class="text-sm sm:text-base text-muted max-w-md mx-auto sm:mx-0">
              Send me a quick message or schedule a call — I’m always open to hearing exciting new ideas.
            </p>
          </div>

          <!-- Button -->
          <div class="w-full sm:w-auto flex justify-center sm:justify-end">
            <UButton
              label="Email Me"
              icon="i-lucide-mail"
              size="lg"
              variant="subtle"
              class=" font-semibold px-6 py-3 rounded-xl "
              to="/contact" />
          </div>
        </div>
      </UCard>
    </UContainer>
  </section>
</template>
