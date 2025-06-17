<template>
  <nav class="navbar">
    <a href="#hero">
      <img :src="require('@/assets/logo.png')" alt="Logo" class="logo" />
    </a>

    <!-- Hamburger Icon -->
    <div class="hamburger" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <!-- Nav Links -->
    <div :class="['nav-links', { open: isOpen }]">
      <a href="#hero" @click="closeMenu">Home</a>
      <a href="#about" @click="closeMenu">About</a>
      <a href="#contact" @click="closeMenu">Contact</a>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    },
  },
};
</script>

