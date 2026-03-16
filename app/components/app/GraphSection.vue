<script setup lang="ts">
const el = ref<HTMLElement | null>(null)

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
  <section id="contributions" ref="el" class="graph section-pad">
    <div class="section-container">
      <!-- Label -->
      <div class="section-label reveal">
        <span class="section-label__num">06</span>
        <span class="section-label__line" />
        <span class="section-label__text">GitHub activity</span>
      </div>

      <div class="graph__header">
        <h2 class="text-headline reveal reveal-delay-1">
          Active<br>
          <span class="text-gradient">since day one.</span>
        </h2>
        <p class="text-body-lg reveal reveal-delay-2" style="max-width:420px;">
          Consistent, committed, and always building. Every green square is a decision, a problem solved, a product improved.
        </p>
      </div>

      <!-- Graph image container -->
      <div class="graph__container reveal reveal-delay-3">
        <NuxtImg
          src="/graph.png"
          alt="Maryam Zimal — GitHub Contribution Graph"
          class="graph__img"
          loading="lazy" />
      </div>

      <p class="graph__quote reveal reveal-delay-4">
        "Every green square tells a story of a late night."
      </p>
    </div>
  </section>
</template>

<style scoped>
.graph {
  border-top: 1px solid var(--color-border);
}

.graph__header {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-bottom: 48px;
}

@media (min-width: 768px) {
  .graph__header {
    grid-template-columns: 1fr 1fr;
    align-items: end;
    gap: 40px;
  }
}

.graph__container {
  border: 1px solid var(--color-border);
  border-radius: 12px;
  overflow: hidden;
  background: var(--color-surface);
  padding: 4px;
}

.graph__img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
  opacity: 0.9;
  transition: opacity var(--duration-base);
}

.graph__container:hover .graph__img {
  opacity: 1;
}

.graph__quote {
  margin-top: 20px;
  font-size: 14px;
  font-style: italic;
  color: var(--color-text-muted);
  text-align: right;
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
