<template>
  <header class="navbar">
    <RouterLink class="brand" :to="{ path: '/', hash: '#hero' }">
      <img src="@/assets/logo/cropped-CCS-Logov-new.png" alt="CCS logo" />
      <span>College of Computer Studies</span>
    </RouterLink>

    <nav>
      <RouterLink :to="{ path: '/', hash: '#hero' }">Home</RouterLink>
      <RouterLink :to="{ path: '/', hash: '#programs' }">Programs Offered</RouterLink>
      <RouterLink to="/faculty">Faculty &amp; Staff</RouterLink>
      <RouterLink :to="{ path: '/', hash: '#partners' }">Partnerships &amp; Memberships</RouterLink>
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

.navbar.blis-navbar {
  border-bottom-color: #60b1e8;
  background: linear-gradient(100deg, #172b68, #254e93);
  box-shadow: 0 4px 16px rgba(16, 31, 77, 0.2);
}

.navbar.bsit-navbar {
  border-bottom-color: #f2b705;
  background: linear-gradient(100deg, #5c4300, #9a6f00);
  box-shadow: 0 4px 16px rgba(61, 46, 0, 0.22);
}

.navbar.bsdmia-navbar {
  border-bottom-color: #f2b705;
  background: linear-gradient(100deg, #302600, #765600);
  box-shadow: 0 4px 16px rgba(48, 38, 0, 0.22);
}

.navbar.bscs-navbar {
  border-bottom-color: #75acd1;
  background: linear-gradient(100deg, #123653, #286b98);
  box-shadow: 0 4px 16px rgba(18, 54, 83, 0.22);
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

.blis-navbar .brand:hover {
  color: #bbea8e;
}

.bsit-navbar .brand:hover {
  color: #ffd93d;
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

.blis-navbar .brand img {
  border-color: rgba(96, 177, 232, 0.75);
  background: #e9edf4;
}

.bsit-navbar .brand img {
  border-color: rgba(255, 217, 61, 0.75);
  background: #fff9e0;
}

.bsdmia-navbar .brand img {
  border-color: rgba(242, 183, 5, 0.75);
  background: #fff9e0;
}

.bscs-navbar .brand img {
  border-color: rgba(117, 172, 209, 0.75);
  background: #f5faff;
}

.brand:hover {
  color: #f0d27f;
}

.brand:hover img {
  transform: rotate(-6deg) scale(1.06);
  border-color: #f0d27f;
}

.blis-navbar .brand:hover img {
  border-color: #bbea8e;
}

.bsit-navbar .brand:hover img {
  border-color: #ffd93d;
}

.bsdmia-navbar .brand:hover img {
  border-color: #f2b705;
}

.bscs-navbar .brand:hover img {
  border-color: #75acd1;
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

.blis-navbar nav a {
  color: #e2e9f5;
}

.bsit-navbar nav a {
  color: #fff3bf;
}

.bsdmia-navbar nav a {
  color: #fff3bf;
}

.bscs-navbar nav a {
  color: #e5f3fb;
}

nav a:hover {
  transform: translateY(-2px);
  border-color: rgba(240, 210, 127, 0.45);
  color: #f0d27f;
  background: #31533d;
}

.blis-navbar nav a:hover {
  border-color: #60b1e8;
  color: #bbea8e;
  background: #172b68;
}

.bsit-navbar nav a:hover {
  border-color: #ffd93d;
  color: #ffd93d;
  background: #5c4300;
}

.bsdmia-navbar nav a:hover {
  border-color: #f2b705;
  color: #f2b705;
  background: #302600;
}

.bscs-navbar nav a:hover {
  border-color: #75acd1;
  color: #75acd1;
  background: #123653;
}

nav a:active {
  transform: translateY(0);
}

.brand:focus-visible,
nav a:focus-visible {
  outline: 2px solid #f0d27f;
  outline-offset: 3px;
}

.blis-navbar .brand:focus-visible,
.blis-navbar nav a:focus-visible {
  outline-color: #bbea8e;
}

.bsit-navbar .brand:focus-visible,
.bsit-navbar nav a:focus-visible {
  outline-color: #ffd93d;
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
