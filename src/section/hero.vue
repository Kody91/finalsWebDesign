<template>
  <section class="hero" id="hero">
    <div class="hero-text">
      <p class="school-name">Central Philippine University</p>
      <h1>Welcome to the College of Computer Studies</h1>
      <p>
        Discover technology and computing education that helps students build skills, solve
        problems, and prepare for a connected world.
      </p>
      <router-link class="button" to="/#programs">Explore our programs</router-link>
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  min-height: 600px;
  padding: 80px 10%;
  color: white;
  background: #294735;
}

.hero-text {
  max-width: 600px;
}

.school-name,
.motto {
  color: #f0d27f;
  font-weight: bold;
}

.school-name {
  letter-spacing: 2px;
  text-transform: uppercase;
}

h1 {
  max-width: 580px;
  margin: 16px 0;
  font-size: 52px;
  line-height: 1.15;
}

.hero-text > p:not(.school-name):not(.motto) {
  max-width: 540px;
  color: #e2e9e3;
  font-size: 18px;
  line-height: 1.6;
}

.button {
  display: inline-block;
  margin-top: 14px;
  padding: 14px 20px;
  border-radius: 4px;
  color: #254a34;
  background: #f0d27f;
  font-weight: bold;
  text-decoration: none;
}

.button:hover {
  background: #f7dfa0;
}

.hero-logo {
  display: flex;
  width: 300px;
  height: 300px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border: 8px solid rgba(255, 255, 255, 0.16);
  border-radius: 50%;
  background: white;
}

.hero-logo img {
  width: 150px;
  height: 150px;
  object-fit: contain;
}

@media (max-width: 700px) {
  .hero {
    flex-direction: column;
    text-align: center;
  }

  .hero-text > p:not(.school-name):not(.motto) {
    margin-right: auto;
    margin-left: auto;
  }

  h1 {
    font-size: 36px;
  }

  .hero-logo {
    width: 230px;
    height: 230px;
  }
}
</style>
