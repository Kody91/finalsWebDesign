<template>
  <header class="navbar">
    <a class="brand" href="/#hero">
      <img src="@/assets/logo/cropped-CCS-Logov-new.png" alt="CCS logo" />
      <span>College of Computer Studies</span>
    </a>

    <nav>
      <a href="/#hero">Home</a>
      <a href="/#programs">Programs Offered</a>
      <a href="/faculty">Faculty &amp; Staff</a>
      <a href="/#partners">Partnerships &amp; Memberships</a>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  padding: 12px 7%;
  border-bottom: 1px solid #46624e;
  background: #203b2b;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 0.5px;
  text-decoration: none;
}

.brand img {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

nav {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

nav a {
  padding: 10px 12px;
  border-radius: 4px;
  color: #e6ece7;
  transition: background-color 0.2s, color 0.2s;
  text-decoration: none;
}

nav a:hover {
  color: #f0d27f;
  background: #31533d;
}

@media (max-width: 600px) {
  .navbar {
    justify-content: center;
    padding: 10px 4%;
  }

  nav {
    justify-content: center;
    gap: 4px;
  }

  nav a {
    padding: 8px;
    font-size: 14px;
  }
}
</style>
