<script setup lang="ts">
const el = ref<HTMLElement | null>(null)

const stackCategories = [
  {
    label: 'Core Web',
    items: [
      { name: 'HTML5', icon: 'logos:html-5' },
      { name: 'CSS3', icon: 'logos:css-3' },
      { name: 'JavaScript', icon: 'logos:javascript' },
      { name: 'TypeScript', icon: 'logos:typescript-icon' },
    ],
  },
  {
    label: 'Frameworks',
    items: [
      { name: 'Vue.js', icon: 'logos:vue' },
      { name: 'Nuxt 3', icon: 'logos:nuxt-icon' },
      { name: 'Tailwind', icon: 'logos:tailwindcss-icon' },
    ],
  },
  {
    label: 'Tools & Infra',
    items: [
      { name: 'Node.js', icon: 'logos:nodejs-icon' },
      { name: 'SQLite', icon: 'logos:sqlite' },
      { name: 'Python', icon: 'logos:python' },
      { name: 'Git', icon: 'logos:git-icon' },
      { name: 'VS Code', icon: 'logos:visual-studio-code' },
    ],
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
  <section id="stack" ref="el" class="stack section-pad">
    <div class="section-container">
      <!-- Label -->
      <div class="section-label reveal">
        <span class="section-label__num">03</span>
        <span class="section-label__line" />
        <span class="section-label__text">My stack</span>
      </div>

      <div class="stack__header">
        <h2 class="text-headline reveal reveal-delay-1">
          Tools I work<br>
          with <span class="text-gradient">daily.</span>
        </h2>
        <p class="text-body-lg reveal reveal-delay-2" style="max-width:440px; margin-top: 0;">
          I pick the right tools for the job, not the most popular ones. My stack is lean, fast, and battle-tested.
        </p>
      </div>

      <div class="stack__grid">
        <div
          v-for="(cat, ci) in stackCategories"
          :key="cat.label"
          :class="['stack__category', 'reveal', `reveal-delay-${ci + 2}`]">
          <div class="stack__cat-label">
            {{ cat.label }}
          </div>
          <div class="stack__items">
            <div
              v-for="item in cat.items"
              :key="item.name"
              class="stack__item">
              <Icon :name="item.icon" size="22" />
              <span class="stack__item-name">{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stack {
  position: relative;
  border-top: 1px solid var(--color-border);
}

.stack__header {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-bottom: 56px;
}

@media (min-width: 768px) {
  .stack__header {
    grid-template-columns: 1fr 1fr;
    align-items: end;
    gap: 40px;
  }
}

/* ── Grid ─────────────────────────────── */
.stack__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
}

@media (min-width: 640px) {
  .stack__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .stack__grid { grid-template-columns: repeat(3, 1fr); }
}

/* ── Category ─────────────────────────── */
.stack__category {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 28px;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  background: var(--color-surface);
  transition: border-color var(--duration-base);
}

.stack__category:hover {
  border-color: var(--color-border-hover);
}

.stack__cat-label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-accent);
}

/* ── Items ─────────────────────────────── */
.stack__items {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.stack__item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 10px;
  border-radius: 8px;
  transition: background var(--duration-fast);
  cursor: default;
}

.stack__item:hover {
  background: rgba(255,255,255,0.04);
}

.stack__item-name {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-2);
  transition: color var(--duration-fast);
}

.stack__item:hover .stack__item-name {
  color: var(--color-text);
}

/* Reveal */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition:
    opacity 0.7s var(--ease-smooth),
    transform 0.7s var(--ease-smooth);
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.22s; }
.reveal-delay-3 { transition-delay: 0.34s; }
.reveal-delay-4 { transition-delay: 0.46s; }
</style>
