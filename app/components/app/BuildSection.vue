<script setup lang="ts">
const el = ref<HTMLElement | null>(null)

const services = [
  {
    num: '01',
    title: 'Frontend & UI Development',
    description: 'Pixel-perfect interfaces with Vue 3 and Nuxt — built for clarity, performance, and delight. From design systems to micro-interactions.',
  },
  {
    num: '02',
    title: 'Full-Stack Architecture',
    description: 'Scalable, secure backends and APIs integrated seamlessly with modern Nuxt frontends. Drizzle ORM, SQLite, JWT auth — production-ready from day one.',
  },
  {
    num: '03',
    title: 'Deployment & Optimization',
    description: 'End-to-end deployment on Cloudflare and NuxtHub. Performance tuning, Core Web Vitals, CI/CD pipelines, and global edge delivery.',
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
    { threshold: 0.1 }
  )
  if (el.value) observer.observe(el.value)
  onUnmounted(() => observer.disconnect())
})
</script>

<template>
  <section id="services" ref="el" class="services section-pad">
    <div class="section-container">
      <!-- Label -->
      <div class="section-label reveal">
        <span class="section-label__num">04</span>
        <span class="section-label__line" />
        <span class="section-label__text">Services</span>
      </div>

      <div class="services__header">
        <h2 class="text-headline reveal reveal-delay-1">
          What I build<br>
          <span class="text-gradient">for you.</span>
        </h2>
      </div>

      <!-- Editorial numbered list -->
      <div class="services__list">
        <div
          v-for="(service, i) in services"
          :key="service.num"
          :class="['service-row', 'reveal', `reveal-delay-${i + 2}`]">
          <span class="service-row__num">{{ service.num }}</span>
          <div class="service-row__content">
            <h3 class="service-row__title">
              {{ service.title }}
            </h3>
            <p class="service-row__desc">
              {{ service.description }}
            </p>
          </div>
          <div class="service-row__arrow">
            ↗
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  border-top: 1px solid var(--color-border);
}

.services__header {
  margin-bottom: 56px;
}

/* ── Service List ─────────────────────── */
.services__list {
  display: flex;
  flex-direction: column;
}

.service-row {
  display: grid;
  grid-template-columns: 60px 1fr 36px;
  gap: 24px;
  align-items: start;
  padding: 32px 0;
  border-bottom: 1px solid var(--color-border);
  cursor: default;
  transition: background var(--duration-base);
}

.service-row:first-child {
  border-top: 1px solid var(--color-border);
}

@media (min-width: 768px) {
  .service-row {
    grid-template-columns: 80px 1fr 48px;
    gap: 40px;
    padding: 40px 0;
  }
}

.service-row:hover {
  padding-left: 12px;
  padding-right: 12px;
  margin-left: -12px;
  margin-right: -12px;
  background: rgba(255,255,255,0.02);
  border-radius: 8px;
}

.service-row__num {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--color-accent);
  padding-top: 4px;
  letter-spacing: 0.05em;
}

.service-row__content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.service-row__title {
  font-size: clamp(20px, 2.5vw, 28px);
  font-weight: 700;
  letter-spacing: -0.025em;
  color: var(--color-text);
  margin: 0;
  line-height: 1.2;
}

.service-row__desc {
  font-size: 15px;
  line-height: 1.7;
  color: var(--color-text-2);
  max-width: 580px;
  margin: 0;
}

.service-row__arrow {
  font-size: 22px;
  color: var(--color-text-muted);
  padding-top: 2px;
  transition: color var(--duration-fast), transform var(--duration-base);
}

.service-row:hover .service-row__arrow {
  color: var(--color-accent);
  transform: translate(4px, -4px);
}

/* Reveal */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.7s var(--ease-smooth), transform 0.7s var(--ease-smooth);
}

.reveal.visible { opacity: 1; transform: translateY(0); }
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.32s; }
.reveal-delay-4 { transition-delay: 0.44s; }
</style>
