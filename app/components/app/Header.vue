<script setup lang="ts">
const isScrolled = ref(false)
const isMenuOpen = ref(false)

const navItems = [
  { label: 'Work', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
]

const toggleMenu = () => { isMenuOpen.value = !isMenuOpen.value }
const closeMenu  = () => { isMenuOpen.value = false }

onMounted(() => {
  const handleScroll = () => { isScrolled.value = window.scrollY > 40 }
  window.addEventListener('scroll', handleScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})
</script>

<template>
  <header :class="['site-header', { 'site-header--scrolled': isScrolled }]">
    <div class="header-inner">
      <!-- Brand -->
      <NuxtLink to="/" class="brand" @click="closeMenu">
        <span class="brand__mark">MZ</span>
        <span class="brand__name">Maryam Zimal</span>
      </NuxtLink>

      <!-- Desktop nav -->
      <nav class="desktop-nav">
        <a
          v-for="item in navItems"
          :key="item.label"
          :href="item.href"
          class="nav-link link-reveal">
          {{ item.label }}
        </a>
        <a
          href="mailto:maryamzimal24@gmail.com"
          class="nav-cta">
          Hire me
        </a>
      </nav>

      <!-- Mobile toggle -->
      <button
        class="mobile-toggle"
        :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
        @click="toggleMenu">
        <span :class="['toggle-line', { open: isMenuOpen }]" />
        <span :class="['toggle-line', { open: isMenuOpen }]" />
      </button>
    </div>

    <!-- Mobile nav drawer -->
    <Transition name="drawer">
      <nav v-if="isMenuOpen" class="mobile-nav">
        <a
          v-for="item in navItems"
          :key="item.label"
          :href="item.href"
          class="mobile-nav__link"
          @click="closeMenu">
          {{ item.label }}
        </a>
        <a
          href="mailto:maryamzimal24@gmail.com"
          class="mobile-nav__cta"
          @click="closeMenu">
          Hire me →
        </a>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
/* ── Header Shell ─────────────────────────── */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 0 clamp(20px, 5vw, 60px);
  background: transparent;
  transition: background var(--duration-base) var(--ease-smooth),
              border-color var(--duration-base) var(--ease-smooth),
              backdrop-filter var(--duration-base) var(--ease-smooth);
  border-bottom: 1px solid transparent;
}

.site-header--scrolled {
  background: rgba(8, 8, 14, 0.85);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border-bottom-color: var(--color-border);
}

.header-inner {
  max-width: var(--max-w);
  margin: 0 auto;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

/* ── Brand ─────────────────────────────────── */
.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

.brand__mark {
  width: 34px;
  height: 34px;
  background: var(--color-accent-soft);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  color: var(--color-accent);
  letter-spacing: 0.05em;
}

.brand__name {
  font-size: 15px;
  font-weight: 600;
  color: var(--color-text);
  letter-spacing: -0.02em;
}

/* ── Desktop Nav ───────────────────────────── */
.desktop-nav {
  display: none;
  align-items: center;
  gap: 32px;
}

@media (min-width: 768px) {
  .desktop-nav { display: flex; }
}

.nav-link {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-2);
  text-decoration: none;
  transition: color var(--duration-fast);
}

.nav-link:hover {
  color: var(--color-text);
}

.nav-cta {
  font-size: 13px;
  font-weight: 600;
  color: var(--color-accent);
  text-decoration: none;
  padding: 8px 18px;
  border: 1px solid rgba(99, 102, 241, 0.35);
  border-radius: 6px;
  background: var(--color-accent-soft);
  transition: background var(--duration-fast), border-color var(--duration-fast), color var(--duration-fast);
  letter-spacing: -0.01em;
}

.nav-cta:hover {
  background: rgba(99, 102, 241, 0.15);
  border-color: rgba(99, 102, 241, 0.6);
  color: #a5b4fc;
}

/* ── Mobile Toggle ─────────────────────────── */
.mobile-toggle {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 28px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px 0;
}

@media (min-width: 768px) {
  .mobile-toggle { display: none; }
}

.toggle-line {
  display: block;
  width: 100%;
  height: 1.5px;
  background: var(--color-text-2);
  transition: transform var(--duration-base) var(--ease-smooth),
              opacity var(--duration-base) var(--ease-smooth),
              width var(--duration-base) var(--ease-smooth);
  transform-origin: center;
}

.toggle-line.open:first-child {
  transform: translateY(3.5px) rotate(45deg);
}
.toggle-line.open:last-child {
  transform: translateY(-3.5px) rotate(-45deg);
}

/* ── Mobile Nav ────────────────────────────── */
.mobile-nav {
  padding: 16px 0 24px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-top: 1px solid var(--color-border);
}

.mobile-nav__link {
  font-size: 18px;
  font-weight: 500;
  color: var(--color-text-2);
  text-decoration: none;
  padding: 12px 0;
  border-bottom: 1px solid var(--color-border);
  transition: color var(--duration-fast);
}

.mobile-nav__link:hover { color: var(--color-text); }

.mobile-nav__cta {
  margin-top: 16px;
  font-size: 16px;
  font-weight: 600;
  color: var(--color-accent);
  text-decoration: none;
  padding: 12px 0;
}

/* ── Drawer Transition ─────────────────────── */
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity var(--duration-base) var(--ease-smooth),
              transform var(--duration-base) var(--ease-smooth);
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
