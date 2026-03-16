<script setup lang="ts">
const appConfig = useAppConfig()
const year = new Date().getFullYear()
const socialLinks = computed(() => appConfig.footer?.links || [])
</script>

<template>
  <footer class="site-footer">
    <div class="footer-inner section-container">
      <div class="divider" />
      <div class="footer-content">
        <div class="footer-left">
          <span class="footer-monogram">MZ</span>
          <span class="footer-copy">© {{ year }} Maryam Zimal. All rights reserved.</span>
        </div>
        <div class="footer-right">
          <a
            v-for="link in socialLinks"
            :key="link.to"
            :href="link.to"
            :target="link.target"
            class="footer-icon"
            :aria-label="link['aria-label'] || link.to">
            <UIcon :name="link.icon" class="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  padding-bottom: 40px;
  padding-top: 16px;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  padding-top: 24px;
}

.footer-left {
  display: flex;
  align-items: center;
  gap: 14px;
}

.footer-monogram {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  color: var(--color-accent);
  background: var(--color-accent-soft);
  border: 1px solid rgba(99, 102, 241, 0.25);
  border-radius: 6px;
  padding: 4px 8px;
  letter-spacing: 0.05em;
}

.footer-copy {
  font-size: 13px;
  color: var(--color-text-muted);
}

.footer-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.footer-icon {
  color: var(--color-text-muted);
  transition: color var(--duration-fast);
  display: flex;
  align-items: center;
}

.footer-icon:hover {
  color: var(--color-text);
}
</style>
