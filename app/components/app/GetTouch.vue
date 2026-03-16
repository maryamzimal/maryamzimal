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
  <section ref="el" class="contact section-pad">
    <div class="section-container">
      <!-- Label -->
      <div class="section-label reveal">
        <span class="section-label__num">07</span>
        <span class="section-label__line" />
        <span class="section-label__text">Get in touch</span>
      </div>

      <div class="contact__body">
        <h2 class="contact__heading reveal reveal-delay-1">
          Let's build<br>
          something<br>
          <span class="text-gradient">great.</span>
        </h2>

        <div class="contact__right">
          <p class="text-body-lg reveal reveal-delay-2">
            Have an idea, a project, or just want to say hi? I'm always open to the right conversations.
          </p>

          <div class="contact__links reveal reveal-delay-3">
            <a
              href="mailto:maryamzimal24@gmail.com"
              class="contact__email link-reveal">
              maryamzimal24@gmail.com
            </a>
          </div>

          <div class="contact__actions reveal reveal-delay-4">
            <a
              href="mailto:maryamzimal24@gmail.com"
              class="contact__btn">
              Send an email
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/maryam-s-a5ab7b389/"
              target="_blank"
              class="contact__btn contact__btn--outline">
              LinkedIn profile
            </a>
          </div>

          <div class="contact__note reveal reveal-delay-5">
            <span class="pulse-dot" style="width:6px;height:6px;" />
            <span>Typically responds within 24 hours</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  border-top: 1px solid var(--color-border);
}

.contact__body {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
}

@media (min-width: 900px) {
  .contact__body {
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: start;
  }
}

.contact__heading {
  font-size: clamp(52px, 8vw, 100px);
  font-weight: 800;
  line-height: 0.92;
  letter-spacing: -0.045em;
  margin: 0;
}

.contact__right {
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding-top: 8px;
}

@media (min-width: 900px) {
  .contact__right { padding-top: 16px; }
}

.contact__links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.contact__email {
  font-size: clamp(15px, 2vw, 20px);
  font-weight: 500;
  color: var(--color-text);
  text-decoration: none;
  letter-spacing: -0.01em;
}

.contact__email::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--color-accent);
  transition: width var(--duration-base) var(--ease-smooth);
}

.contact__email:hover {
  color: var(--color-accent);
}

.contact__email {
  position: relative;
}

/* CTA Buttons */
.contact__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.contact__btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 22px;
  background: var(--color-accent);
  color: white;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 8px;
  letter-spacing: -0.01em;
  transition: background var(--duration-fast), transform var(--duration-fast), box-shadow var(--duration-fast);
}

.contact__btn:hover {
  background: #4f46e5;
  transform: translateY(-1px);
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.35);
}

.contact__btn--outline {
  background: transparent;
  color: var(--color-text-2);
  border: 1px solid var(--color-border);
}

.contact__btn--outline:hover {
  background: rgba(255,255,255,0.03);
  border-color: var(--color-border-hover);
  color: var(--color-text);
  box-shadow: none;
  transform: none;
}

.contact__note {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  letter-spacing: 0.02em;
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
.reveal-delay-5 { transition-delay: 0.58s; }
</style>
