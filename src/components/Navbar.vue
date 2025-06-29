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