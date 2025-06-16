<template>
  <div class="background">
    <Navbar />
    <section id="hero"><HeroSection /></section>
    <section id="about"><AboutSection /></section>
  </div>
</template>


<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
</script>

