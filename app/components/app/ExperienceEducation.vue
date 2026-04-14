<script setup lang="ts">
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

const activeTab = ref('experience')

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
    id="resume"
    class="relative py-20 px-6 sm:px-10 overflow-hidden bg-gradient-to-br from-purple-600/10 via-purple-500/5 to-purple-700/10">
    <!-- Background Decor -->
    <div class="absolute inset-0 z-0">
      <div class="particles-container">
        <div v-for="i in 30" :key="i" class="particle" :style="getParticleStyle()" />
      </div>
      <div class="absolute inset-0 opacity-5">
        <div class="grid-bg" />
      </div>
    </div>

    <UContainer class="relative z-10 max-w-4xl space-y-12">
      <!-- Section Header -->
      <div class="text-center space-y-4 animate-fade-in-up">
        <h2 class="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
          Background & Journey
        </h2>
        <p class="text-purple-200/60 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Switch between modules to explore features designed specifically for each domain.
        </p>
      </div>

      <!-- Tab Switcher (Exact match to screenshot) -->
      <div class="flex justify-center items-center animate-fade-in-up delay-200">
        <div class="flex items-center gap-4 p-2 bg-[#1a2233] border border-white/5 rounded-[2rem] shadow-2xl backdrop-blur-xl">
          <!-- Experience Tab -->
          <button
            @click="activeTab = 'experience'"
            class="flex items-center gap-2 px-6 py-3 rounded-[1.5rem] transition-all duration-500 group"
            :class="activeTab === 'experience' ? 'bg-[#10b981] text-white shadow-lg shadow-emerald-500/20' : 'text-gray-400 hover:text-gray-200'">
            <UIcon name="i-lucide-briefcase" class="w-5 h-5 transition-transform group-hover:scale-110" />
            <span class="font-medium tracking-wide">Experience</span>
          </button>

          <!-- Dot Separator -->
          <div class="w-2 h-2 rounded-full bg-gray-600/50" />

          <!-- Education Tab -->
          <button
            @click="activeTab = 'education'"
            class="flex items-center gap-2 px-6 py-3 rounded-[1.5rem] transition-all duration-500 group"
            :class="activeTab === 'education' ? 'bg-[#10b981] text-white shadow-lg shadow-emerald-500/20' : 'text-gray-400 hover:text-gray-200'">
            <UIcon name="i-lucide-graduation-cap" class="w-5 h-5 transition-transform group-hover:scale-110" />
            <span class="font-medium tracking-wide">Education</span>
          </button>
        </div>
      </div>

      <!-- Content Area with Transition -->
      <div class="relative min-h-[400px]">
        <Transition
          mode="out-in"
          enter-active-class="transition duration-500 ease-out"
          enter-from-class="opacity-0 translate-y-4"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-300 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-4">
          
          <!-- Experience Content -->
          <div v-if="activeTab === 'experience'" key="experience" class="space-y-6">
            <UCard
              v-for="(job, index) in experience"
              :key="index"
              class="group bg-white/5 backdrop-blur-md border-white/10 hover:border-emerald-400/30 transition-all duration-300"
              :ui="{ body: { base: 'p-6 sm:p-8' } }">
              <div class="space-y-4">
                <div class="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div>
                    <h4 class="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">{{ job.company }}</h4>
                    <p class="text-emerald-400/80 font-medium text-lg">{{ job.role }}</p>
                  </div>
                  <span class="text-xs font-bold px-4 py-1.5 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 tracking-widest uppercase">
                    {{ job.duration }}
                  </span>
                </div>
                
                <p class="text-sm text-purple-200/60 flex items-center gap-2">
                  <UIcon name="i-lucide-map-pin" class="w-4 h-4" />
                  {{ job.location }}
                </p>

                <div class="flex flex-wrap gap-2 pt-2">
                  <span
                    v-for="skill in job.skills"
                    :key="skill"
                    class="text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-lg bg-white/5 text-purple-300 border border-white/5 group-hover:border-emerald-400/20 transition-colors">
                    {{ skill }}
                  </span>
                </div>
              </div>
            </UCard>
          </div>

          <!-- Education Content -->
          <div v-else-if="activeTab === 'education'" key="education" class="space-y-6">
            <UCard
              v-for="(edu, index) in education"
              :key="index"
              class="group bg-white/5 backdrop-blur-md border-white/10 hover:border-emerald-400/30 transition-all duration-300"
              :ui="{ body: { base: 'p-6 sm:p-8' } }">
              <div class="space-y-4">
                <div class="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div>
                    <h4 class="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">{{ edu.institution }}</h4>
                    <p class="text-emerald-400/80 font-medium text-lg">{{ edu.degree }}</p>
                  </div>
                  <span class="text-xs font-bold px-4 py-1.5 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 tracking-widest uppercase">
                    {{ edu.duration }}
                  </span>
                </div>

                <div class="p-5 rounded-xl bg-white/5 border border-white/5 space-y-3">
                  <p class="text-emerald-400 font-bold flex items-center gap-2">
                    <UIcon name="i-lucide-star" class="w-4 h-4" />
                    {{ edu.grade }}
                  </p>
                  <p class="text-purple-200/70 leading-relaxed text-sm sm:text-base">{{ edu.details }}</p>
                </div>
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
  background: rgba(139, 92, 246, 0.2);
  border-radius: 50%;
  animation: particle-float linear infinite;
}

.grid-bg {
  background-image: linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  width: 100%;
  height: 100%;
}

@keyframes fade-in-up {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out forwards;
}

.delay-200 { animation-delay: 0.2s; }
</style>
