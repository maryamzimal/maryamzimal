<script setup lang="ts">
// --- About Content ---
const mouse = ref({ x: 0, y: 0 })
const handleMouseMove = (e: MouseEvent) => {
  mouse.value = { x: e.clientX, y: e.clientY }
}

const highlights = [
  { title: 'Full-Stack Nuxt', icon: 'i-lucide-layers' },
  { title: 'Cloud Architecture', icon: 'i-lucide-cpu' },
  { title: 'Machine Learning', icon: 'i-lucide-brain-circuit' }
]

// --- Background & Journey Content ---
const education = [
  {
    institution: 'Government College University, Faisalabad',
    degree: "Bachelor's degree, Computer Science",
    duration: 'Jan 2020 - Nov 2024',
    grade: 'CGPA 3.63 / 4.00',
    details: 'Developed a Property Dealing Website as the Final Year Project. Focused on software engineering, web development, and data-driven applications.'
  },
  {
    institution: 'Punjab Group Of Colleges',
    degree: 'Intermediate (ICS - Physics)',
    duration: 'Nov 2019 - Mar 2020',
    grade: 'Grade: B',
    details: 'Studied core computer and physics subjects that strengthened my analytical thinking and programming fundamentals.'
  }
]

const experience = [
  {
    company: 'Arch Technologies',
    role: 'Data Scientist (Internship)',
    duration: 'Nov 2025 - Dec 2025',
    location: 'Remote',
    skills: ['Python', 'EDA', 'Machine Learning']
  },
  {
    company: 'DevelopersHub Corporation©',
    role: 'Frontend Web Developer (Nuxt.js) (Internship)',
    duration: 'Oct 2025 - Dec 2025',
    location: 'Remote',
    skills: ['Nuxt.js', 'Vue.js', 'Tailwind CSS', 'Front-End Development']
  }
]

const activeTab = ref('about')

const getParticleStyle = () => {
  const size = Math.random() * 8 + 2
  const left = Math.random() * 100
  const animationDelay = Math.random() * 6
  const animationDuration = Math.random() * 10 + 10
  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}%`,
    animationDelay: `${animationDelay}s`,
    animationDuration: `${animationDuration}s`,
  }
}
</script>

<template>
  <section
    id="about"
    class="relative py-16 px-6 sm:px-10 overflow-hidden 
           bg-gradient-to-br from-purple-600/20 via-purple-500/10 to-purple-700/20"
    @mousemove="handleMouseMove">
    
    <!-- Unified Background -->
    <div class="absolute inset-0 z-0">
      <div class="particles-container">
        <div v-for="i in 35" :key="i" class="particle" :style="getParticleStyle()" />
      </div>
      <div class="absolute inset-0 opacity-5">
        <div class="grid-bg" />
      </div>
    </div>

    <UContainer class="relative z-10 max-w-4xl space-y-8">
      
      <!-- Standardized Header (Matching TechStack) -->
      <div class="flex flex-col gap-1.5 mb-11 text-center items-center justify-center animate-fade-in-up">
        <h1 class="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-teal-400 to-pink-500 tracking-tight">
          My Core Profile
        </h1>
        <h2 class="text-xl sm:text-2xl text-teal-100 mt-2">
          A deep dive into my technical identity and professional journey
        </h2>
      </div>
      <!-- Triple-Tab Switcher (Module Style) -->
      <div class="flex justify-center items-center animate-fade-in-up delay-200 pb-4">
        <div class="flex items-center gap-2 p-1.5 bg-[#0a101f] border border-[#10b981]/20 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.05)] backdrop-blur-xl max-w-full overflow-x-auto no-scrollbar">
          <!-- About Tab -->
          <button
            @click="activeTab = 'about'"
            class="flex items-center gap-2 px-6 py-2.5 rounded-lg transition-all duration-300 group whitespace-nowrap"
            :class="activeTab === 'about' ? 'bg-[#10b981] text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'text-gray-400 hover:text-emerald-400 hover:bg-emerald-400/5'">
            <UIcon name="i-lucide-user" class="w-5 h-5 transition-transform group-hover:scale-110" />
            <span class="font-bold tracking-widest text-xs sm:text-sm uppercase">About</span>
          </button>

          <!-- Experience Tab -->
          <button
            @click="activeTab = 'experience'"
            class="flex items-center gap-2 px-6 py-2.5 rounded-lg transition-all duration-300 group whitespace-nowrap"
            :class="activeTab === 'experience' ? 'bg-[#10b981] text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'text-gray-400 hover:text-emerald-400 hover:bg-emerald-400/5'">
            <UIcon name="i-lucide-briefcase" class="w-5 h-5 transition-transform group-hover:scale-110" />
            <span class="font-bold tracking-widest text-xs sm:text-sm uppercase">Experience</span>
          </button>

          <!-- Education Tab -->
          <button
            @click="activeTab = 'education'"
            class="flex items-center gap-2 px-6 py-2.5 rounded-lg transition-all duration-300 group whitespace-nowrap"
            :class="activeTab === 'education' ? 'bg-[#10b981] text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'text-gray-400 hover:text-emerald-400 hover:bg-emerald-400/5'">
            <UIcon name="i-lucide-graduation-cap" class="w-5 h-5 transition-transform group-hover:scale-110" />
            <span class="font-bold tracking-widest text-xs sm:text-sm uppercase">Education</span>
          </button>
        </div>
      </div>


      <!-- Unified Content Area -->
      <div class="relative min-h-[350px]">
        <Transition
          mode="out-in"
          enter-active-class="transition duration-500 ease-out"
          enter-from-class="opacity-0 translate-y-4"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-300 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-4">
          
          <!-- Tab 1: About Content -->
          <div v-if="activeTab === 'about'" key="about" class="text-center space-y-6">
            <div class="max-w-3xl mx-auto">
              <p class="text-purple-100/90 text-lg sm:text-2xl leading-relaxed font-light">
                I am a <span class="text-teal-400 font-bold">Computer Science Graduate</span> dedicated to crafting high-performance web applications. 
                Specializing in <span class="text-cyan-400 font-semibold italic">Vue 3 and Nuxt.js</span>, I bridge the gap between frontend elegance and 
                backend robustness. Currently exploring <span class="text-pink-400 font-semibold">Machine Learning</span> to build more 
                intelligent, data-driven digital experiences.
              </p>
            </div>

            <div class="flex flex-wrap justify-center gap-4 sm:gap-6">
              <div
                v-for="item in highlights"
                :key="item.title"
                class="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-teal-400/30 transition-all duration-300 group">
                <div class="p-2 rounded-lg bg-teal-400/10 text-teal-400 group-hover:scale-110 transition-transform">
                  <UIcon :name="item.icon" class="w-6 h-6" />
                </div>
                <span class="text-sm font-bold text-white uppercase tracking-wider">{{ item.title }}</span>
              </div>
            </div>

            <div class="flex justify-center gap-4 pt-2">
              <UButton
                label="Get Resume"
                size="lg"
                class="rounded-full px-8 bg-teal-500 text-white font-bold" />
              <UButton
                label="Contact Me"
                size="lg"
                variant="outline"
                class="rounded-full px-8 border-white/20 text-white"
                to="#contact" />
            </div>
          </div>

          <!-- Tab 2: Experience Content -->
          <div v-else-if="activeTab === 'experience'" key="experience" class="space-y-6">
            <UCard
              v-for="(job, index) in experience"
              :key="index"
              class="group bg-white/5 backdrop-blur-md border-white/10 hover:border-emerald-400/30 transition-all duration-300"
              :ui="{ body: { base: 'p-6 sm:p-8 text-left' } }">
              <div class="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div>
                  <h4 class="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">{{ job.company }}</h4>
                  <p class="text-emerald-400/80 font-medium text-lg">{{ job.role }}</p>
                </div>
                <span class="text-xs font-bold px-4 py-1.5 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 tracking-widest uppercase">
                  {{ job.duration }}
                </span>
              </div>
              <p class="text-sm text-purple-200/60 flex items-center gap-2 mt-2">
                <UIcon name="i-lucide-map-pin" class="w-4 h-4" />
                {{ job.location }}
              </p>
              <div class="flex flex-wrap gap-2 mt-4">
                <span
                  v-for="skill in job.skills"
                  :key="skill"
                  class="text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-lg bg-white/5 text-purple-300 border border-white/5">
                  {{ skill }}
                </span>
              </div>
            </UCard>
          </div>

          <!-- Tab 3: Education Content -->
          <div v-else-if="activeTab === 'education'" key="education" class="space-y-6">
            <UCard
              v-for="(edu, index) in education"
              :key="index"
              class="group bg-white/5 backdrop-blur-md border-white/10 hover:border-emerald-400/30 transition-all duration-300"
              :ui="{ body: { base: 'p-6 sm:p-8 text-left' } }">
              <div class="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div>
                  <h4 class="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">{{ edu.institution }}</h4>
                  <p class="text-emerald-400/80 font-medium text-lg">{{ edu.degree }}</p>
                </div>
                <span class="text-xs font-bold px-4 py-1.5 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 tracking-widest uppercase">
                  {{ edu.duration }}
                </span>
              </div>
              <div class="mt-4 p-5 rounded-xl bg-white/5 border border-white/5 space-y-3 font-light text-purple-200/70">
                 <p class="text-emerald-400 font-bold flex items-center gap-2">
                  <UIcon name="i-lucide-star" class="w-4 h-4" />
                  {{ edu.grade }}
                </p>
                <p>{{ edu.details }}</p>
              </div>
            </UCard>
          </div>
        </Transition>
      </div>

    </UContainer>
  </section>
</template>

<style scoped>
@keyframes particle-float {
  0% { opacity: 0; transform: translateY(100vh) translateX(0px); }
  10%, 90% { opacity: 1; }
  100% { opacity: 0; transform: translateY(-100px) translateX(50px); }
}

.particles-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.particle {
  position: absolute;
  background: rgba(139, 92, 246, 0.3);
  border-radius: 50%;
  animation: particle-float linear infinite;
}

.grid-bg {
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(rgba(139, 92, 246, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(139, 92, 246, 0.05) 1px, transparent 1px);
  background-size: 60px 60px;
}

@keyframes fade-in-up {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out forwards;
}

.delay-200 { animation-delay: 0.2s; }

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
