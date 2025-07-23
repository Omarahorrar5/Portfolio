<template>
  <section id="contact" class="contact-section">
    <h2 class="section-title">Contact Me</h2>

    <p class="contact-text">
      Feel free to reach out through any of the platforms below!
    </p>

    <div class="social-links">
      <a href="mailto:omar@example.com" title="Email" class="email">
        <font-awesome-icon icon="envelope" />
      </a>
      <a href="https://github.com/Omarahorrar5" target="_blank" class="github">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
      <a href="https://linkedin.com/in/omar-ahorrar-02a5a9244/" target="_blank" class="linkedin">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>
      <a href="https://facebook.com/yourhandle" target="_blank" class="facebook">
        <font-awesome-icon :icon="['fab', 'facebook']" />
      </a>
      <a href="https://www.instagram.com/omar_ahorrar/" target="_blank" class="instagram">
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </a>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background-color: #000000;
  color: #ffffff;
  text-align: center;
  margin-top: -200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.contact-text {
  font-size: 25px;
  line-height: 1.8;
  margin-bottom: 20px;
  max-width: 600px;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 40px;
  font-size: 36px;
}

.social-links a {
  font-size: 32px;
  transition: transform 0.3s;
}

.social-links a:hover {
  color: #a12f32;
  transform: scale(1.2);
}

.email {
  color: #c4b4b4; /* Your theme red */
}

.github {
  color: #332828; /* GitHub black */
}

.linkedin {
  color: #0077B5; /* LinkedIn blue */
}

.facebook {
  color: #1877F2; /* Facebook blue */
}

.instagram {
  color: #E1306C; /* Instagram pink */
}

/* Media Queries for ContactSection */
@media (max-width: 768px) {
  /* No specific contact section styles needed for 768px as section-title is global */
}
</style>