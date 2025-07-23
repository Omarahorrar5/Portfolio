<template>
  <nav class="navbar">
    <a href="#hero">
      <img :src="logo" alt="Logo" class="logo" />
    </a>

    <div class="hamburger" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div :class="['nav-links', { open: isOpen }]">
      <a href="#hero" @click="closeMenu">Home</a>
      <a href="#about" @click="closeMenu">About</a>
      <a href="#projects" @click="closeMenu">Projects</a>
      <a href="#contact" @click="closeMenu">Contact</a>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import logo from '../assets/logo.png'

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}
</script>

<style scoped>
.navbar {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #0f0f0f;
  padding: 0.5rem 2rem;
  font-family: 'Poppins', sans-serif;
  top: 0;
  width: 96%;
  z-index: 1000;
}

.logo {
  width: 100px;
  height: auto;
  cursor: pointer;
  margin-right: 2rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
  margin-left: 2rem;
}

.nav-links a {
  color: #D53F41;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #ffffff;
}

/* Hamburger icon */
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background-color: #D53F41;
  transition: 0.3s ease;
}

/* Mobile styles for Navbar */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
    gap: 0.5rem;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 2rem;
    background-color: #0f0f0f;
    border: 1px solid #333;
    border-radius: 10px;
    padding: 1rem;
    width: 180px;
    z-index: 1000;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links a {
    margin: 10px 0;
    font-size: 18px;
  }

  .hamburger {
    display: flex;
  }
}
</style>