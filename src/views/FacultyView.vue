<script setup>
import Navbar from '@/components/Navbar.vue'
import Faculty from '@/section/faculty.vue'
</script>

<template>
  <Navbar />
  <main>
    <Faculty />
  </main>
  <footer class="site-footer">
    <a href="/#hero">CPU · CCS</a>
    <span>College of Computer Studies</span>
    <span>Faculty and Staff</span>
  </footer>
</template>

<style scoped>
.site-footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 14px 24px;
  padding: 24px clamp(20px, 8%, 100px);
  border-top: 1px solid #49634f;
  background: linear-gradient(100deg, #203b2b, #294735);
  color: #fff;
  font-size: 12px;
}

.site-footer a {
  color: #e5c875;
  font-weight: 700;
  text-decoration: none;
}

.site-footer a:hover {
  text-decoration: underline;
}

.site-footer a:focus-visible {
  outline: 3px solid #e5c875;
  outline-offset: 3px;
}
</style>
