<template>
  <section class="hero" id="hero">
    <div class="hero-text">
      <p class="school-name">Central Philippine University</p>
      <h1>Welcome to the College of Computer Studies</h1>
      <p>
        Discover technology and computing education that helps students build skills, solve
        problems, and prepare for a connected world.
      </p>
      <RouterLink class="button" :to="{ path: '/', hash: '#programs' }">Programs Offered</RouterLink>
      <p class="motto">Remember. Connect. Engage. Build. Share.</p>
    </div>

    <div class="hero-logo">
      <img
        src="@/assets/logo/cropped-CCS-Logov-new.png"
        alt="Central Philippine University College of Computer Studies logo"/>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  min-height: 620px;
  padding: 80px 10%;
  color: white;
  background:
    radial-gradient(circle at 85% 20%, rgba(240, 210, 127, 0.12), transparent 28%),
    linear-gradient(120deg, #203b2b, #315e3c);
}

.hero-text {
  position: relative;
  z-index: 1;
  max-width: 620px;
}

.school-name,
.motto {
  color: #f0d27f;
  font-weight: bold;
}

.school-name {
  display: inline-block;
  margin: 0;
  padding: 9px 13px;
  border: 1px solid rgba(240, 210, 127, 0.5);
  border-radius: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 12px;
}

h1 {
  max-width: 600px;
  margin: 24px 0 20px;
  font-size: 58px;
  line-height: 1.08;
  letter-spacing: -1.5px;
}

.hero-text > p:not(.school-name):not(.motto) {
  max-width: 540px;
  color: #e0e9dc;
  font-size: 18px;
  line-height: 1.8;
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

.hero-logo {
  position: relative;
  z-index: 1;
  display: flex;
  width: 330px;
  height: 330px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border: 10px solid #f2b52b;
  border-radius: 50%;
  background: #f1f4e8;
  box-shadow: 0 20px 50px rgba(12, 29, 18, 0.24);
}

.hero-logo img {
  width: 120px;
  height: 120px;
  object-fit: contain;
}

.motto {
  margin-top: 28px;
  letter-spacing: 1px;
}

@media (max-width: 700px) {
  .hero {
    flex-direction: column;
    justify-content: center;
    gap: 42px;
    min-height: auto;
    padding: 70px 8%;
    text-align: center;
  }

  .hero-text > p:not(.school-name):not(.motto) {
    margin-right: auto;
    margin-left: auto;
  }

  h1 {
    margin-right: auto;
    margin-left: auto;
    font-size: 40px;
  }

  .hero-logo {
    width: 250px;
    height: 250px;
  }

  .hero-logo img {
    width: 105px;
    height: 105px;
  }
}
</style>
