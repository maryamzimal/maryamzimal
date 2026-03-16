<script setup lang="ts">
const el = ref<HTMLElement | null>(null)

const metrics = [
  { value: '3+', label: 'Years coding' },
  { value: '10+', label: 'Projects shipped' },
  { value: '5+', label: 'Core technologies' },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        el.value?.querySelectorAll('.reveal').forEach(node => node.classList.add('visible'))
        observer.disconnect()
      }
    },
    { threshold: 0.15 }
  )
  if (el.value) observer.observe(el.value)
  onUnmounted(() => observer.disconnect())
})
</script>

<template>
  <section id="about" ref="el" class="identity section-pad">
    <div class="section-container">
      <!-- Label -->
      <div class="section-label reveal">
        <span class="section-label__num">02</span>
        <span class="section-label__line" />
        <span class="section-label__text">About me</span>
      </div>

      <div class="identity__layout">
        <!-- Left: narrative prose -->
        <div class="identity__prose">
          <h2 class="text-headline reveal reveal-delay-1">
            Engineer,<br>
            thinker, <span class="text-gradient">builder.</span>
          </h2>

          <p class="text-body-lg reveal reveal-delay-2" style="margin-top: 28px;">
            My journey began with a spark of curiosity — figuring out how things work by taking them apart and putting them back together, better. What started with HTML and CSS became a passion for building real products that serve real people.
          </p>

          <p class="text-body-lg reveal reveal-delay-3" style="margin-top: 16px;">
            I specialize in <strong class="identity__highlight">Nuxt 3</strong> and the Vue ecosystem, building full-stack applications from design to deployment. I care deeply about every detail: the performance, the interaction, the architecture underneath.
          </p>

          <p class="text-body-lg reveal reveal-delay-3" style="margin-top: 16px;">
            Right now I'm building a multivendor e-commerce platform — combining elegant UI with a scalable backend. I believe great software is a product of both craft and clarity of thought.
          </p>

          <p class="identity__quote reveal reveal-delay-4">
            "Every project is a problem worth solving with intention."
          </p>
        </div>

        <!-- Right: metrics -->
        <div class="identity__right">
          <div class="identity__metrics">
            <div
              v-for="(m, i) in metrics"
              :key="m.label"
              :class="['identity__metric', 'reveal', `reveal-delay-${i + 2}`]">
              <span class="identity__metric-value">{{ m.value }}</span>
              <span class="identity__metric-label">{{ m.label }}</span>
            </div>
          </div>

          <div class="identity__stack-note reveal reveal-delay-4">
            <div class="identity__stack-label">
              Based in
            </div>
            <div class="identity__stack-value">
              Pakistan · Remote worldwide
            </div>
          </div>
          <div class="identity__stack-note reveal reveal-delay-5">
            <div class="identity__stack-label">
              Focus
            </div>
            <div class="identity__stack-value">
              Full-stack · Frontend-led
            </div>
          </div>
          <div class="identity__stack-note reveal reveal-delay-5">
            <div class="identity__stack-label">
              Degree
            </div>
            <div class="identity__stack-value">
              B.S. Computer Science
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.identity {
  position: relative;
}

.identity__layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 56px;
  margin-top: 0;
}

@media (min-width: 900px) {
  .identity__layout {
    grid-template-columns: 1fr 340px;
    gap: 80px;
  }
}

/* ── Prose ─────────────────────────────── */
.identity__prose {
  display: flex;
  flex-direction: column;
}

.identity__highlight {
  color: var(--color-text);
  font-weight: 600;
}

.identity__quote {
  margin-top: 32px;
  font-size: clamp(14px, 1.4vw, 17px);
  font-style: italic;
  color: var(--color-text-muted);
  padding-left: 20px;
  border-left: 2px solid rgba(99, 102, 241, 0.35);
  line-height: 1.6;
}

/* ── Right column ───────────────────────── */
.identity__right {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 0;
}

@media (min-width: 900px) {
  .identity__right {
    padding-top: 80px;
  }
}

/* ── Metrics ────────────────────────────── */
.identity__metrics {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.identity__metric {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  border-bottom: 1px solid var(--color-border);
}

.identity__metric:first-child {
  border-top: 1px solid var(--color-border);
}

.identity__metric-value {
  font-size: clamp(36px, 5vw, 52px);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.04em;
  background: linear-gradient(135deg, #6366f1 0%, #a78bfa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.identity__metric-label {
  font-size: 13px;
  color: var(--color-text-muted);
  margin-top: 4px;
  font-family: var(--font-mono);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

/* ── Stack Notes ────────────────────────── */
.identity__stack-note {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.identity__stack-label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.identity__stack-value {
  font-size: 15px;
  font-weight: 500;
  color: var(--color-text-2);
}

/* Reveal transition (triggered by IntersectionObserver) */
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
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.32s; }
.reveal-delay-4 { transition-delay: 0.44s; }
.reveal-delay-5 { transition-delay: 0.56s; }
</style>
