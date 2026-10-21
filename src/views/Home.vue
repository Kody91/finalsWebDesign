<script setup>
import Navbar from '@/components/Navbar.vue'
import Hero from '@/section/hero.vue'
import Programs from '@/section/programs.vue'
import Partners from '@/section/partners.vue'
</script>

<template>
  <Navbar />
  <main>
    <Hero/>
    <Programs />
    <section class="faculty-link" aria-labelledby="faculty-heading">
      <p>Meet the people behind your learning</p>
      <h2 id="faculty-heading">Faculty and Staff</h2>
      <p>Get to know the faculty members and staff of the College of Computer Studies.</p>
      <a href="/faculty" class="button">Meet our faculty and staff</a>
    </section>
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

.faculty-link {
  padding: 70px 8%;
  background: #e9eee6;
  text-align: center;
}

.faculty-link > p:first-child {
  color: #638366;
  font-weight: bold;
  text-transform: uppercase;
}

.faculty-link h2 {
  margin: 10px 0;
  color: #254a34;
  font-size: 36px;
}

.faculty-link > p:not(:first-child) {
  line-height: 1.6;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  margin-top: 14px;
  padding: 13px 20px;
  border: 1px solid transparent;
  border-radius: 5px;
  color: #25372c;
  background: #e5c875;
  font-weight: bold;
  text-decoration: none;
  transition: transform 0.2s, background-color 0.3s, color 0.3s, border-color 0.3s;
}

.button:hover {
  transform: translateY(-3px);
  border-color: #e5c875;
  color: #e5c875;
  background: #254a34;
}

.button:focus-visible {
  outline: 3px solid #e5c875;
  outline-offset: 3px;
}

@media (max-width: 550px) {
  .faculty-link {
    padding: 50px 20px;
  }
}
</style>
