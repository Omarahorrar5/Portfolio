<template>
  <div class="background">
    <Navbar />
    <section id="hero"><HeroSection /></section>
    <section id="about"><AboutSection /></section>
    <section id="projects"><ProjectsSection /></section>
    <section id="contact"><ContactSection /></section>
    <Footer />
  </div>
</template>


<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue';
import Footer from './components/Footer.vue';
import ProjectsSection from './components/ProjectsSection.vue';
</script>

