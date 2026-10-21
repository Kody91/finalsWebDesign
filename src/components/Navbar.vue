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
  gap: 16px;
  padding: 12px 7%;
  border-bottom: 1px solid #49634f;
  background: linear-gradient(100deg, #203b2b, #294735);
  box-shadow: 0 4px 16px rgba(20, 39, 27, 0.18);
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.5px;
  text-decoration: none;
  transition: color 0.25s;
}

.brand img {
  width: 48px;
  height: 48px;
  padding: 3px;
  border: 1px solid rgba(240, 210, 127, 0.5);
  border-radius: 50%;
  background: #f7f6ef;
  object-fit: contain;
  transition: transform 0.3s, border-color 0.3s;
}

.brand:hover {
  color: #f0d27f;
}

.brand:hover img {
  transform: rotate(-6deg) scale(1.06);
  border-color: #f0d27f;
}

nav {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
}

nav a {
  position: relative;
  padding: 10px 13px;
  border: 1px solid transparent;
  border-radius: 5px;
  color: #e6ece7;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s, background-color 0.25s, color 0.25s, border-color 0.25s;
}

nav a:hover {
  transform: translateY(-2px);
  border-color: rgba(240, 210, 127, 0.45);
  color: #f0d27f;
  background: #31533d;
}

nav a:active {
  transform: translateY(0);
}

.brand:focus-visible,
nav a:focus-visible {
  outline: 2px solid #f0d27f;
  outline-offset: 3px;
}

@media (max-width: 600px) {
  .navbar {
    justify-content: center;
    padding: 10px 4%;
  }

  .brand {
    font-size: 15px;
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
