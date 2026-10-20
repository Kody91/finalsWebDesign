<script setup>
import Navbar from '@/components/Navbar.vue'
import Hero from '@/section/hero.vue'
import Programs from '@/section/programs.vue'
import Partners from '@/section/partners.vue'
</script>

<template>
  <Navbar />
  <main>
    <Hero />
    <Programs />
    <Partners />
  </main>
</template>

<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  color: #222;
}

html {
  scroll-behavior: smooth;
}

* {
  box-sizing: border-box;
}

section {
  scroll-margin-top: 100px;
}
</style>
