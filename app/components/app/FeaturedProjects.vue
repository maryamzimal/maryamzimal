<script setup lang="ts">
const el = ref<HTMLElement | null>(null)

const projects = [
  {
    num: '01',
    title: 'Curate — Pharmacy SaaS',
    role: 'Full-Stack Developer',
    year: '2026',
    description: 'A multi-role pharmacy platform with prescription workflows, order lifecycle management, real-time in-app notifications, and secure authentication — built from the ground up.',
    tags: ['Nuxt 3', 'Drizzle ORM', 'SQLite', 'NuxtHub', 'Cloudflare'],
    link: 'https://github.com/maryamzimal',
    featured: true,
  },
  {
    num: '02',
    title: 'Multivendor E-Commerce',
    role: 'Full-Stack Developer',
    year: '2025',
    description: 'A scalable multivendor marketplace with vendor dashboards, product management, real-time order tracking, and payment integration.',
    tags: ['Nuxt 3', 'Vue', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/maryamzimal',
    featured: false,
  },
  {
    num: '03',
    title: 'This Portfolio',
    role: 'Designer & Developer',
    year: '2026',
    description: 'A world-class personal brand website — built with editorial design principles, a custom CSS design system, and motion-forward scroll reveals.',
    tags: ['Nuxt 3', 'Nuxt UI', 'Custom CSS'],
    link: '/',
    featured: false,
  },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        el.value?.querySelectorAll('.reveal').forEach(node => node.classList.add('visible'))
        observer.disconnect()
      }
    },
    { threshold: 0.08 }
  )
  if (el.value) observer.observe(el.value)
  onUnmounted(() => observer.disconnect())
})
</script>

<template>
  <section id="projects" ref="el" class="projects section-pad">
    <div class="section-container">
      <!-- Label -->
      <div class="section-label reveal">
        <span class="section-label__num">05</span>
        <span class="section-label__line" />
        <span class="section-label__text">Featured work</span>
      </div>

      <div class="projects__header">
        <h2 class="text-headline reveal reveal-delay-1">
          Selected<br>
          <span class="text-gradient">projects.</span>
        </h2>
        <p class="text-body-lg reveal reveal-delay-2" style="max-width:420px">
          Real products built with care — each one a lesson in engineering, design, and product thinking.
        </p>
      </div>

      <!-- Featured project (large) -->
      <div class="projects__featured-wrap">
        <a
          :href="projects[0]?.link"
          target="_blank"
          :class="['project-featured', 'reveal', 'reveal-delay-2']">
          <div class="project-featured__content">
            <div class="project-featured__meta">
              <span class="project-num">{{ projects[0]?.num }}</span>
              <span class="project-year">{{ projects[0]?.year }}</span>
              <span class="project-role">{{ projects[0]?.role }}</span>
            </div>
            <h3 class="project-featured__title">{{ projects[0]?.title }}</h3>
            <p class="project-featured__desc">{{ projects[0]?.description }}</p>
            <div class="project-tags">
              <span
                v-for="tag in projects[0]?.tags"
                :key="tag"
                class="project-tag">
                {{ tag }}
              </span>
            </div>
          </div>
          <div class="project-featured__indicator">
            <span class="project-arrow">↗</span>
          </div>
        </a>
      </div>

      <!-- Smaller projects grid -->
      <div class="projects__grid">
        <a
          v-for="(project, i) in projects.slice(1)"
          :key="project.num"
          :href="project.link"
          target="_blank"
          :class="['project-card', 'reveal', `reveal-delay-${i + 3}`]">
          <div class="project-card__meta">
            <span class="project-num">{{ project.num }}</span>
            <span class="project-year">{{ project.year }}</span>
          </div>
          <h3 class="project-card__title">{{ project.title }}</h3>
          <p class="project-card__role">{{ project.role }}</p>
          <p class="project-card__desc">{{ project.description }}</p>
          <div class="project-tags">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="project-tag">
              {{ tag }}
            </span>
          </div>
          <div class="project-card__arrow">↗</div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  border-top: 1px solid var(--color-border);
}

.projects__header {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-bottom: 48px;
}

@media (min-width: 768px) {
  .projects__header {
    grid-template-columns: 1fr 1fr;
    align-items: end;
    gap: 40px;
  }
}

/* ── Featured Project ─────────────────── */
.projects__featured-wrap {
  margin-bottom: 24px;
}

.project-featured {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 24px;
  align-items: start;
  padding: 36px;
  border: 1px solid var(--color-border);
  border-radius: 16px;
  background: var(--color-surface);
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition:
    border-color var(--duration-base) var(--ease-smooth),
    background var(--duration-base) var(--ease-smooth),
    transform var(--duration-base) var(--ease-smooth);
}

.project-featured::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent);
  opacity: 0;
  transition: opacity var(--duration-base);
}

.project-featured:hover {
  border-color: var(--color-border-hover);
  background: var(--color-surface-2);
  transform: translateY(-2px);
}

.project-featured:hover::before {
  opacity: 1;
}

.project-featured__content {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.project-featured__meta {
  display: flex;
  align-items: center;
  gap: 16px;
}

.project-num {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-accent);
  letter-spacing: 0.08em;
}

.project-year {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-text-muted);
}

.project-role {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-text-muted);
  padding-left: 16px;
  border-left: 1px solid var(--color-border);
}

.project-featured__title {
  font-size: clamp(24px, 3.5vw, 40px);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--color-text);
  margin: 0;
  line-height: 1.1;
}

.project-featured__desc {
  font-size: 15px;
  line-height: 1.7;
  color: var(--color-text-2);
  max-width: 620px;
  margin: 0;
}

.project-featured__indicator {
  display: flex;
  align-items: flex-start;
  padding-top: 4px;
}

.project-arrow {
  font-size: 24px;
  color: var(--color-text-muted);
  transition: color var(--duration-fast), transform var(--duration-base);
  display: block;
}

.project-featured:hover .project-arrow {
  color: var(--color-accent);
  transform: translate(4px, -4px);
}

/* ── Project Tags ─────────────────────── */
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.project-tag {
  font-family: var(--font-mono);
  font-size: 10.5px;
  color: var(--color-text-2);
  padding: 4px 10px;
  border: 1px solid var(--color-border);
  border-radius: 100px;
  letter-spacing: 0.03em;
  background: rgba(255,255,255,0.03);
  transition: border-color var(--duration-fast), color var(--duration-fast);
}

/* ── Smaller Project Grid ─────────────── */
.projects__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

@media (min-width: 640px) {
  .projects__grid { grid-template-columns: repeat(2, 1fr); }
}

.project-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 28px;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  background: var(--color-surface);
  text-decoration: none;
  position: relative;
  transition:
    border-color var(--duration-base),
    background var(--duration-base),
    transform var(--duration-base);
}

.project-card:hover {
  border-color: var(--color-border-hover);
  background: var(--color-surface-2);
  transform: translateY(-2px);
}

.project-card__meta {
  display: flex;
  align-items: center;
  gap: 12px;
}

.project-card__title {
  font-size: clamp(18px, 2vw, 22px);
  font-weight: 600;
  letter-spacing: -0.025em;
  color: var(--color-text);
  margin: 0;
}

.project-card__role {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-text-muted);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin: 0;
}

.project-card__desc {
  font-size: 14px;
  line-height: 1.65;
  color: var(--color-text-2);
  margin: 0;
  flex: 1;
}

.project-card__arrow {
  position: absolute;
  top: 24px;
  right: 24px;
  font-size: 18px;
  color: var(--color-text-muted);
  transition: color var(--duration-fast), transform var(--duration-base);
}

.project-card:hover .project-card__arrow {
  color: var(--color-accent);
  transform: translate(3px, -3px);
}

/* Reveal */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.7s var(--ease-smooth), transform 0.7s var(--ease-smooth);
}

.reveal.visible { opacity: 1; transform: translateY(0); }
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.22s; }
.reveal-delay-3 { transition-delay: 0.34s; }
.reveal-delay-4 { transition-delay: 0.46s; }
</style>
