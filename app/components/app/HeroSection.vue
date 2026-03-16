<script setup lang="ts">
const appConfig = useAppConfig()
const socialLinks = computed(() => appConfig.footer?.links || [])

const el = ref<HTMLElement | null>(null)
const mouseX = ref(0)
const mouseY = ref(0)

const handleMouseMove = (e: MouseEvent) => {
  if (!el.value) return
  const rect = el.value.getBoundingClientRect()
  mouseX.value = (e.clientX - rect.left) / rect.width
  mouseY.value = (e.clientY - rect.top) / rect.height
}

const glowStyle = computed(() => ({
  background: `radial-gradient(ellipse 80% 60% at ${mouseX.value * 100}% ${mouseY.value * 100}%, rgba(99,102,241,0.14) 0%, transparent 65%)`
}))
</script>

<template>
  <section
    ref="el"
    class="hero"
    @mousemove="handleMouseMove">
    <!-- Mouse-tracking ambient glow -->
    <div class="hero__glow" :style="glowStyle" />
    <!-- Static base ambient -->
    <div class="ambient-bg" />
    <!-- Faint grid -->
    <div class="hero__grid" />

    <div class="hero__inner section-container">
      <!-- Availability badge -->
      <div class="hero__badge reveal reveal-delay-1">
        <span class="pulse-dot" />
        <span class="hero__badge-text">Available for new projects</span>
      </div>

      <!-- Main identity block -->
      <div class="hero__identity">
        <h1 class="hero__name reveal reveal-delay-2">
          Maryam<br>
          <span class="text-gradient">Zimal</span>
        </h1>
        <div class="hero__role reveal reveal-delay-3">
          <span class="hero__role-bar" />
          <span class="hero__role-text">Full-Stack Developer · Nuxt.js Specialist</span>
        </div>
      </div>

      <!-- Description -->
      <p class="hero__desc text-body-lg reveal reveal-delay-4">
        I craft elegant, high-performance web applications — blending product thinking with clean engineering. From pixel-perfect interfaces to scalable architectures.
      </p>

      <!-- CTA row -->
      <div class="hero__cta reveal reveal-delay-5">
        <a href="#projects" class="btn-primary">
          View my work
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
        <a href="mailto:maryamzimal24@gmail.com" class="btn-ghost">
          Let's talk
        </a>
      </div>

      <!-- Social links -->
      <div class="hero__social reveal reveal-delay-5">
        <a
          v-for="link in socialLinks"
          :key="link.to"
          :href="link.to"
          :target="link.target"
          class="hero__social-link"
          :aria-label="link['aria-label'] || link.to">
          <UIcon :name="link.icon" class="w-4 h-4" />
        </a>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="hero__scroll reveal">
      <div class="hero__scroll-line" />
      <span class="hero__scroll-label">scroll</span>
    </div>
  </section>
</template>

<style scoped>
/* ── Hero Shell ─────────────────────────── */
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  padding-top: 100px;
  padding-bottom: 80px;
}

/* ── Glow / Grid BG ─────────────────────── */
.hero__glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  transition: background 0.1s ease;
  z-index: 0;
}

.hero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
  pointer-events: none;
  z-index: 0;
}

/* ── Inner Layout ───────────────────────── */
.hero__inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding-top: 0;
  padding-bottom: 0;
}

/* ── Availability Badge ─────────────────── */
.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  padding: 7px 14px;
  border: 1px solid rgba(34, 197, 94, 0.2);
  border-radius: 100px;
  background: rgba(34, 197, 94, 0.06);
}

.hero__badge-text {
  font-family: var(--font-mono);
  font-size: 11.5px;
  letter-spacing: 0.06em;
  color: #86efac;
  text-transform: uppercase;
}

/* ── Name ─────────────────────────────── */
.hero__identity {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.hero__name {
  font-size: clamp(64px, 10vw, 130px);
  font-weight: 800;
  line-height: 0.92;
  letter-spacing: -0.045em;
  color: var(--color-text);
  margin: 0;
}

/* ── Role ─────────────────────────────── */
.hero__role {
  display: flex;
  align-items: center;
  gap: 14px;
}

.hero__role-bar {
  display: block;
  width: 28px;
  height: 1.5px;
  background: var(--color-accent);
  flex-shrink: 0;
}

.hero__role-text {
  font-size: clamp(14px, 1.5vw, 18px);
  font-weight: 400;
  color: var(--color-text-2);
  letter-spacing: -0.01em;
}

/* ── Description ───────────────────────── */
.hero__desc {
  max-width: 560px;
  margin: 0;
}

/* ── CTA Buttons ───────────────────────── */
.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  align-items: center;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 24px;
  background: var(--color-accent);
  color: white;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 8px;
  letter-spacing: -0.01em;
  transition: background var(--duration-fast), transform var(--duration-fast), box-shadow var(--duration-fast);
}

.btn-primary:hover {
  background: #4f46e5;
  transform: translateY(-1px);
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.35);
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 24px;
  background: transparent;
  color: var(--color-text-2);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  letter-spacing: -0.01em;
  transition: color var(--duration-fast), border-color var(--duration-fast), background var(--duration-fast);
}

.btn-ghost:hover {
  color: var(--color-text);
  border-color: var(--color-border-hover);
  background: rgba(255,255,255,0.03);
}

/* ── Social Links ───────────────────────── */
.hero__social {
  display: flex;
  gap: 18px;
  margin-top: 0;
}

.hero__social-link {
  color: var(--color-text-muted);
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: color var(--duration-fast), transform var(--duration-fast);
}

.hero__social-link:hover {
  color: var(--color-text);
  transform: translateY(-2px);
}

/* ── Scroll Indicator ───────────────────── */
.hero__scroll {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

@keyframes scroll-line {
  0% { transform: scaleY(0); transform-origin: top; }
  50% { transform: scaleY(1); transform-origin: top; }
  51% { transform: scaleY(1); transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}

.hero__scroll-line {
  width: 1px;
  height: 40px;
  background: var(--color-text-muted);
  animation: scroll-line 2s ease-in-out infinite;
}

.hero__scroll-label {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

/* ── Reveal Init on Mount ───────────────── */
.hero .reveal {
  animation: reveal-up 0.8s var(--ease-smooth) both;
}

.hero .reveal.reveal-delay-1 { animation-delay: 0.1s; }
.hero .reveal.reveal-delay-2 { animation-delay: 0.25s; }
.hero .reveal.reveal-delay-3 { animation-delay: 0.4s; }
.hero .reveal.reveal-delay-4 { animation-delay: 0.55s; }
.hero .reveal.reveal-delay-5 { animation-delay: 0.7s; }

@keyframes reveal-up {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
