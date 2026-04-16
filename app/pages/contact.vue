<script setup lang="ts">
import { ref, reactive } from 'vue'
import { z } from 'zod'

useHead({
  title: 'Contact Me - Premium Portfolio',
  meta: [
    { name: 'description', content: 'Get in touch with me to discuss your next project.' }
  ]
})

const toast = useToast()

const categories = [
  'Web Development',
  'UI/UX Design',
  'Mobile App Development',
  'Consulting',
  'Other'
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
  category: z.string().min(1, 'Please select a category'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

const errors = ref<Record<string, string>>({})

const validate = () => {
  try {
    contactSchema.parse(form)
    errors.value = {}
    return true
  } catch (err) {
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
      description: 'Please fix the errors in the form before submitting.',
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
        color: 'green',
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
  } catch (err: any) {
    state.error = err.data?.statusMessage || 'An unexpected error occurred. Please try again.'
    toast.add({
      title: 'Error',
      description: state.error,
      color: 'red',
      icon: 'i-lucide-alert-triangle'
    })
  } finally {
    state.loading = false
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-950 relative overflow-hidden flex items-center justify-center pt-24 pb-16 px-4">
    <!-- Premium Background Effects -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px] animate-pulse-slow" />
      <div class="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] bg-purple-500/10 rounded-full blur-[120px] animate-float-slow" />
    </div>

    <UContainer class="relative z-10 w-full max-w-5xl">
      <div class="bg-gray-900/50 backdrop-blur-2xl border border-white/5 rounded-3xl shadow-2xl p-6 md:p-12 overflow-hidden relative">
        <!-- Top accent -->
        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-purple-500" />
        
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          
          <!-- Contact Info / Motivation Side (Split Layout) -->
          <div class="lg:col-span-2 space-y-8 h-full flex flex-col justify-between">
            <div>
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span class="text-xs font-bold text-green-300 uppercase tracking-widest">Available for work</span>
              </div>
              
              <h1 class="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                Let's start a <br/>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
                  project together
                </span>
              </h1>
              <p class="text-gray-400 text-lg leading-relaxed">
                Fill out the form and I'll get back to you within 24 hours. Whether it's a new opportunity, a collaboration, or just a chat, I'd love to hear from you.
              </p>
            </div>

            <div class="space-y-6 pt-8 mt-auto">
              <div class="flex items-center gap-4 text-gray-300">
                <div class="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  <UIcon name="i-lucide-mail" class="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p class="text-sm text-gray-500 font-medium">Email me at</p>
                  <a href="mailto:maryamzimal24@gmail.com" class="text-white hover:text-cyan-400 transition-colors font-medium">maryamzimal24@gmail.com</a>
                </div>
              </div>

              <div class="flex items-center gap-4 text-gray-300">
                <div class="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  <UIcon name="i-lucide-map-pin" class="w-6 h-6 text-fuchsia-400" />
                </div>
                <div>
                  <p class="text-sm text-gray-500 font-medium">Location</p>
                  <p class="text-white font-medium">Remote / Worldwide</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Form Side -->
          <div class="lg:col-span-3">
            <template v-if="state.success">
              <div class="bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-500/20 rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center animate-fade-in">
                <div class="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                  <UIcon name="i-lucide-check-circle" class="w-10 h-10 text-green-400" />
                </div>
                <h3 class="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p class="text-green-200 mb-6 max-w-sm">Thank you for reaching out. I've received your message and will get back to you shortly.</p>
                <UButton 
                  label="Send another message" 
                  variant="outline" 
                  color="green" 
                  class="rounded-xl px-6 py-3"
                  @click="state.success = false" 
                />
              </div>
            </template>
            
            <template v-else>
              <form @submit.prevent="submitForm" class="space-y-6">
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <!-- Name Field -->
                  <div class="space-y-2">
                    <label class="text-sm font-medium text-gray-300">Full Name</label>
                    <div class="relative group">
                      <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 blur-sm pointer-events-none" />
                      <input 
                        v-model="form.name"
                        type="text" 
                        placeholder="John Doe"
                        class="relative w-full bg-gray-950/50 border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-cyan-500/50 focus:bg-gray-900 transition-all placeholder:text-gray-600"
                        :class="errors.name ? 'border-red-500/50 focus:border-red-500/50' : ''"
                      />
                    </div>
                    <p v-if="errors.name" class="text-red-400 text-xs mt-1 animate-fade-in">{{ errors.name }}</p>
                  </div>

                  <!-- Email Field -->
                  <div class="space-y-2">
                    <label class="text-sm font-medium text-gray-300">Email Address</label>
                    <div class="relative group">
                      <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 blur-sm pointer-events-none" />
                      <input 
                        v-model="form.email"
                        type="email" 
                        placeholder="john@example.com"
                        class="relative w-full bg-gray-950/50 border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-cyan-500/50 focus:bg-gray-900 transition-all placeholder:text-gray-600"
                        :class="errors.email ? 'border-red-500/50 focus:border-red-500/50' : ''"
                      />
                    </div>
                    <p v-if="errors.email" class="text-red-400 text-xs mt-1 animate-fade-in">{{ errors.email }}</p>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <!-- Phone Field (Optional) -->
                  <div class="space-y-2">
                    <label class="text-sm font-medium text-gray-300">Phone Number <span class="text-gray-600 text-xs">(optional)</span></label>
                    <div class="relative group">
                      <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 blur-sm pointer-events-none" />
                      <input 
                        v-model="form.phone"
                        type="tel" 
                        placeholder="+1 (555) 000-0000"
                        class="relative w-full bg-gray-950/50 border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-cyan-500/50 focus:bg-gray-900 transition-all placeholder:text-gray-600"
                      />
                    </div>
                  </div>

                  <!-- Category Field -->
                  <div class="space-y-2">
                    <label class="text-sm font-medium text-gray-300">Category</label>
                    <div class="relative group">
                      <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 blur-sm pointer-events-none" />
                      <select 
                        v-model="form.category"
                        class="relative w-full bg-gray-950/50 border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-cyan-500/50 focus:bg-gray-900 transition-all appearance-none cursor-pointer"
                        :class="[errors.category ? 'border-red-500/50' : '', form.category ? 'text-white' : 'text-gray-600']"
                      >
                        <option value="" disabled hidden>Select an option</option>
                        <option v-for="cat in categories" :key="cat" :value="cat" class="bg-gray-900 text-white">{{ cat }}</option>
                      </select>
                      <div class="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-500">
                        <UIcon name="i-lucide-chevron-down" class="w-4 h-4" />
                      </div>
                    </div>
                    <p v-if="errors.category" class="text-red-400 text-xs mt-1 animate-fade-in">{{ errors.category }}</p>
                  </div>
                </div>

                <!-- Message Field -->
                <div class="space-y-2">
                  <label class="text-sm font-medium text-gray-300">Your Message</label>
                  <div class="relative group">
                    <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 blur-sm pointer-events-none" />
                    <textarea 
                      v-model="form.message"
                      rows="4"
                      placeholder="Tell me about your project..."
                      class="relative w-full bg-gray-950/50 border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-cyan-500/50 focus:bg-gray-900 transition-all placeholder:text-gray-600 resize-none"
                      :class="errors.message ? 'border-red-500/50 focus:border-red-500/50' : ''"
                    ></textarea>
                  </div>
                  <p v-if="errors.message" class="text-red-400 text-xs mt-1 animate-fade-in">{{ errors.message }}</p>
                </div>

                <!-- Anti-Spam Honeypot -->
                <input type="text" name="honeypot" v-model="form.honeypot" class="hidden" tabindex="-1" autocomplete="off" />

                <!-- Error Alert -->
                <div v-if="state.error" class="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3 animate-fade-in">
                  <UIcon name="i-lucide-alert-circle" class="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <p class="text-sm text-red-200">{{ state.error }}</p>
                </div>

                <!-- Submit Button -->
                <button 
                  type="submit" 
                  :disabled="state.loading"
                  class="w-full relative group overflow-hidden rounded-xl font-bold text-white transition-all duration-300"
                  :class="state.loading ? 'cursor-not-allowed opacity-80' : 'hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]'"
                >
                  <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 transition-transform duration-300 group-hover:scale-105" />
                  <div class="relative px-8 py-4 flex items-center justify-center gap-2">
                    <template v-if="state.loading">
                      <UIcon name="i-lucide-loader-2" class="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </template>
                    <template v-else>
                      <span>Send Message</span>
                      <UIcon name="i-lucide-send" class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </template>
                  </div>
                </button>

              </form>
            </template>
          </div>
          
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 0.3s ease-out forwards;
}

@keyframes float-slow {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-20px, 20px); }
}
.animate-float-slow {
  animation: float-slow 10s ease-in-out infinite;
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.1; }
  50% { opacity: 0.3; }
}
.animate-pulse-slow {
  animation: pulse-slow 8s ease-in-out infinite;
}
</style>
