<script setup lang="ts">
import { ref, reactive } from 'vue'
import { z } from 'zod'

const mouse = ref({ x: 0, y: 0 })
const handleMouseMove = (e: MouseEvent) => {
  mouse.value = { x: e.clientX, y: e.clientY }
}

const parallax = (strength = 35) => ({
  transform: `translate3d(${mouse.value.x / strength}px, ${mouse.value.y / strength}px, 0)`
})

const toast = useToast()

const categories = [
  'Web Development',
  'Data Science / Analytics',
  'Machine Learning Model',
  'Python / Flask Integration',
  'General Inquiry'
]

const form = reactive({
  name: '',
  email: '',
  phone: '',
  category: '',
  message: '',
  honeypot: ''
})

const state = reactive({
  loading: false,
  success: false,
  error: ''
})

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  category: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

const errors = ref<Record<string, string>>({})

const validate = () => {
  try {
    contactSchema.parse(form)
    errors.value = {}
    return true
  }
  catch (err) {
    if (err instanceof z.ZodError) {
      const fieldErrors: Record<string, string> = {}
      err.errors.forEach(e => {
        if (e.path[0]) fieldErrors[e.path[0].toString()] = e.message
      })
      errors.value = fieldErrors
    }
    return false
  }
}

const submitForm = async () => {
  state.error = ''

  if (!validate()) {
    toast.add({
      title: 'Validation Error',
      description: 'Please fix the highlighted fields.',
      color: 'red',
      icon: 'i-lucide-alert-circle'
    })
    return
  }

  state.loading = true

  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: form
    })

    if (response.success) {
      state.success = true
      toast.add({
        title: 'Success!',
        description: 'Your message has been sent successfully.',
        color: 'emerald',
        icon: 'i-lucide-check-circle'
      })

      // Reset form
      form.name = ''
      form.email = ''
      form.phone = ''
      form.category = ''
      form.message = ''
      form.honeypot = ''
    }
  }
  catch (err: any) {
    state.error = err.data?.statusMessage || 'An unexpected error occurred. Please try again.'
    toast.add({
      title: 'Error',
      description: state.error,
      color: 'red',
      icon: 'i-lucide-alert-triangle'
    })
  }
  finally {
    state.loading = false
  }
}
</script>

<template>
  <section
    id="contact"
    class="py-24 px-4 relative flex items-center justify-center bg-gray-950"
    @mousemove="handleMouseMove">
    <!-- Background Design -->
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] animate-pulse-slow" />
      <div class="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-500/5 rounded-full blur-[150px] animate-float-slow" />
      <div class="absolute inset-0 opacity-[0.02]" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px;" />
    </div>

    <!-- Shrunk to max-w-4xl for medium size -->
    <UContainer
      class="relative z-10 w-full max-w-4xl transition-transform duration-500 ease-out space-y-12"
      :style="parallax(140)">
      <!-- Center Aligned Header -->
      <div class="flex flex-col items-center text-center space-y-4 animate-fade-in-up">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-2">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span class="text-xs font-semibold text-emerald-400 tracking-widest uppercase">Available for work</span>
        </div>

        <h2 class="text-3xl md:text-5xl font-black text-white tracking-tight">
          Let's build something <br class="hidden sm:block">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
            exceptional
          </span>
        </h2>
        <!-- <p class="text-gray-400 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
           Whether it's deploying machine learning models, integrating Python/Flask backends, or crafting modern frontend experiences, I am ready to collaborate.
        </p> -->
      </div>

      <!-- Main Design Container -->
      <div class="bg-gray-900/40 backdrop-blur-2xl border border-white/5 rounded-3xl p-6 md:p-10 shadow-2xl overflow-hidden relative">
        <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

        <!-- Simplified Split Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start">
          <!-- Contact Details (Replaced previous text with more fitting one) -->
          <div class="flex flex-col justify-between h-full space-y-8">
            <div>
              <h3 class="text-xl sm:text-2xl font-bold text-white mb-4">
                Get in Touch
              </h3>
              <p class="text-gray-400 text-sm leading-relaxed mb-8">
                Have an exciting project or idea? I'm always open to discussing web development arrays, data-driven applications, or new opportunities. Let's make it happen.
              </p>
            </div>

            <div class="space-y-4 border-t border-white/5 pt-6 mt-auto">
              <!-- Detail Items -->
              <a href="mailto:maryamzimal24@gmail.com" class="group flex items-center gap-4 p-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-emerald-500/20 transition-all">
                <div class="w-10 h-10 rounded-lg bg-emerald-400/10 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <UIcon name="i-lucide-mail" class="w-5 h-5 text-emerald-400" />
                </div>
                <div class="overflow-hidden">
                  <p class="text-white text-sm font-medium group-hover:text-emerald-400 transition-colors truncate">maryamzimal24@gmail.com</p>
                  <p class="text-xs text-gray-500 font-semibold uppercase tracking-wider mt-0.5">Drop an email</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/your-linkedin-maryam-shahid" target="_blank" class="group flex items-center gap-4 p-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-cyan-500/20 transition-all">
                <div class="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <UIcon name="i-simple-icons-linkedin" class="w-4 h-4 text-cyan-400" />
                </div>
                <div class="overflow-hidden">
                  <p class="text-white text-sm font-medium group-hover:text-cyan-400 transition-colors truncate">Maryam Zimal Shahid</p>
                  <p class="text-xs text-gray-500 font-semibold uppercase tracking-wider mt-0.5">Let's Connect</p>
                </div>
              </a>
            </div>
          </div>

          <!-- Form Area -->
          <div class="w-full">
            <template v-if="state.success">
              <div class="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 text-center h-full flex flex-col items-center justify-center animate-fade-in-up">
                <div class="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 ring-4 ring-emerald-500/10">
                  <UIcon name="i-lucide-check" class="w-8 h-8 text-emerald-400" />
                </div>
                <h3 class="text-xl font-bold text-white mb-2">
                  Inquiry Submitted
                </h3>
                <p class="text-sm text-emerald-200/80 mb-6 max-w-xs mx-auto">
                  Thank you for getting in touch. Your message has been successfully delivered and I'll respond shortly.
                </p>
                <UButton
                  label="Send Another Message"
                  variant="ghost"
                  color="gray"
                  size="sm"
                  class="rounded-lg text-emerald-400 hover:text-emerald-300 hover:bg-emerald-400/10 font-medium"
                  @click="state.success = false" />
              </div>
            </template>

            <template v-else>
              <form class="space-y-4 animate-fade-in-up" @submit.prevent="submitForm">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <!-- Name Field -->
                  <div class="space-y-1.5">
                    <label class="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Full Name</label>
                    <div class="relative">
                      <input
                        v-model="form.name"
                        type="text"
                        placeholder="Your Name"
                        class="w-full bg-white/5 backdrop-blur-md text-white border border-white/10 hover:border-emerald-400/30 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all placeholder:text-gray-500 text-sm"
                        :class="errors.name ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''">
                    </div>
                    <p v-if="errors.name" class="text-red-400 text-xs mt-1 ml-1">
                      {{ errors.name }}
                    </p>
                  </div>

                  <!-- Email Field -->
                  <div class="space-y-1.5">
                    <label class="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Email Address</label>
                    <div class="relative">
                      <input
                        v-model="form.email"
                        type="email"
                        placeholder="hello@example.com"
                        class="w-full bg-white/5 backdrop-blur-md text-white border border-white/10 hover:border-emerald-400/30 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all placeholder:text-gray-500 text-sm"
                        :class="errors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''">
                    </div>
                    <p v-if="errors.email" class="text-red-400 text-xs mt-1 ml-1">
                      {{ errors.email }}
                    </p>
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <!-- Phone Field -->
                  <div class="space-y-1.5">
                    <label class="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Phone <span class="text-gray-500 font-normal normal-case tracking-normal">(Optional)</span></label>
                    <div class="relative">
                      <input
                        v-model="form.phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        class="w-full bg-white/5 backdrop-blur-md text-white border border-white/10 hover:border-emerald-400/30 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all placeholder:text-gray-500 text-sm">
                    </div>
                  </div>

                  <!-- Category Field -->
                  <div class="space-y-1.5">
                    <label class="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Inquiry Type <span class="text-gray-500 font-normal normal-case tracking-normal">(Optional)</span></label>
                    <div class="relative group">
                      <select
                        v-model="form.category"
                        class="w-full bg-white/5 backdrop-blur-md text-white border border-white/10 hover:border-emerald-400/30 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all appearance-none cursor-pointer text-sm"
                        :class="[errors.category ? 'border-red-500 focus:ring-red-500' : '', form.category ? 'text-white' : 'text-gray-400']">
                        <option value="" disabled hidden class="text-gray-500">
                          Select inquiry type
                        </option>
                        <!-- Matching the deep dark UI of the card for options -->
                        <option v-for="cat in categories" :key="cat" :value="cat" class="bg-gray-900 text-white py-2">
                          {{ cat }}
                        </option>
                      </select>
                      <div class="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400 group-hover:text-white transition-colors">
                        <UIcon name="i-lucide-chevron-down" class="w-4 h-4" />
                      </div>
                    </div>
                    <p v-if="errors.category" class="text-red-400 text-xs mt-1 ml-1">
                      {{ errors.category }}
                    </p>
                  </div>
                </div>

                <!-- Message Field -->
                <div class="space-y-1.5">
                  <label class="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Message Details</label>
                  <div class="relative">
                    <textarea
                      v-model="form.message"
                      rows="4"
                      placeholder="Please describe your project, timeline, or requirements..."
                      class="w-full bg-white/5 backdrop-blur-md text-white border border-white/10 hover:border-emerald-400/30 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all placeholder:text-gray-500 resize-none text-sm"
                      :class="errors.message ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''" />
                  </div>
                  <p v-if="errors.message" class="text-red-400 text-xs mt-1 ml-1">
                    {{ errors.message }}
                  </p>
                </div>

                <!-- Anti-Spam Honeypot -->
                <input
                  v-model="form.honeypot"
                  type="text"
                  name="honeypot"
                  class="hidden"
                  tabindex="-1"
                  autocomplete="off">

                <!-- Error Alert -->
                <div v-if="state.error" class="p-3 bg-red-950/30 border border-red-500/20 rounded-xl flex items-start gap-3 mt-2">
                  <UIcon name="i-lucide-alert-circle" class="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <p class="text-xs text-red-300 font-medium">
                    {{ state.error }}
                  </p>
                </div>

                <!-- Submit Button -->
                <button
                  type="submit"
                  :disabled="state.loading"
                  class="w-full font-bold text-white transition-all duration-300 mt-2 rounded-xl px-6 py-3 flex items-center justify-center gap-2 border border-transparent shadow-[0_4px_14px_0_rgba(16,185,129,0.39)]"
                  :class="state.loading ? 'bg-emerald-600/50 cursor-not-allowed' : 'bg-[#10b981] hover:bg-[#0ea5e9] hover:shadow-[0_4px_14px_0_rgba(14,165,233,0.39)] hover:-translate-y-0.5'">
                  <template v-if="state.loading">
                    <UIcon name="i-lucide-loader-2" class="w-4 h-4 animate-spin" />
                    <span>Processing...</span>
                  </template>
                  <template v-else>
                    <span>Submit Inquiry</span>
                    <UIcon name="i-lucide-arrow-right" class="w-4 h-4 ml-1" />
                  </template>
                </button>
              </form>
            </template>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
@keyframes fade-in-up {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fade-in-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes float-slow {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-10px, 10px); }
}
.animate-float-slow {
  animation: float-slow 10s ease-in-out infinite;
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.05; }
  50% { opacity: 0.15; }
}
.animate-pulse-slow {
  animation: pulse-slow 8s ease-in-out infinite;
}

/* Custom Webkit scrollbar for text area */
textarea::-webkit-scrollbar {
  width: 6px;
}
textarea::-webkit-scrollbar-track {
  background: transparent;
}
textarea::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}
textarea::-webkit-scrollbar-thumb:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
