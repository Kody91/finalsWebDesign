<template>
  <main class="bsdmia-page">
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">BACHELOR OF SCIENCE IN DIGITAL MEDIA AND INTERACTIVE ARTS</p>
        <h1>Bring ideas to <span>life.</span></h1>
        <p class="intro">
          Explore visual storytelling, digital content creation, and interactive
          experiences that connect creativity with technology.
        </p>
        <div class="actions">
          <a class="button primary" href="#overview">Explore the Program</a>
          <a class="button outline" href="#careers">Career Opportunities</a>
        </div>
        <p class="hero-note">DESIGN · MEDIA · INTERACTION</p>
      </div>
      <div class="hero-visual">
        <img src="@/assets/img/dmia.png" alt="BSDMIA program logo" />
      </div>
    </section>

    <section id="overview" class="section overview">
      <div class="section-title">
        <p class="eyebrow">01 — PROGRAM OVERVIEW</p>
        <h2>Create experiences people remember.</h2>
      </div>
      <div class="overview-grid">
        <div class="body-copy">
          <p>
            The Bachelor of Science in Digital Media and Interactive Arts
            (BSDMIA) brings together creative practice and digital technology.
            Students explore how images, sound, animation, and interactive
            content can communicate ideas.
          </p>
          <p>
            The program encourages students to develop visual concepts, create
            digital media, and design engaging experiences for different
            audiences and platforms.
          </p>
        </div>
        <aside class="overview-card">
          <div class="card-icon">✳</div>
          <h3>Make ideas interactive.</h3>
          <p>Combine creative thinking and digital tools to make media that informs, entertains, and engages.</p>
        </aside>
      </div>
    </section>

    <section class="section learning">
      <div class="section-title centered">
        <p class="eyebrow">02 — WHAT YOU WILL LEARN</p>
        <h2>Explore the craft of digital creation.</h2>
        <p>These are common areas in digital media and interactive arts. Check the official CPU curriculum for the exact subjects offered.</p>
      </div>
      <div class="learning-grid">
        <article class="learning-card">
          <span class="number">01</span>
          <div class="learning-icon">▤</div>
          <h3>Visual Design</h3>
          <p>Use color, typography, composition, and imagery to communicate a clear creative idea.</p>
        </article>
        <article class="learning-card">
          <span class="number">02</span>
          <div class="learning-icon">⌕</div>
          <h3>Digital Content Creation</h3>
          <p>Create visual, audio, and video content for digital platforms and audiences.</p>
        </article>
        <article class="learning-card">
          <span class="number">03</span>
          <div class="learning-icon">▦</div>
          <h3>Animation and Motion</h3>
          <p>Bring stories and concepts to life through movement, timing, and visual effects.</p>
        </article>
        <article class="learning-card">
          <span class="number">04</span>
          <div class="learning-icon">▥</div>
          <h3>Interactive Experiences</h3>
          <p>Plan engaging digital experiences for websites, applications, and other interactive media.</p>
        </article>
      </div>
    </section>

    <section id="careers" class="section careers">
      <div class="career-intro">
        <p class="eyebrow">03 — CAREER OPPORTUNITIES</p>
        <h2>Build a creative career with digital media.</h2>
        <p>BSDMIA graduates may explore creative roles in media, design, entertainment, and other organizations, depending on their skills and employer requirements.</p>
      </div>
      <div class="career-list">
        <article class="career-item">
          <span>01</span>
          <div><h3>Graphic Designer</h3><p>Develop visual materials for brands, publications, campaigns, and digital platforms.</p></div>
        </article>
        <article class="career-item">
          <span>02</span>
          <div><h3>Multimedia Artist</h3><p>Create visual and audiovisual content for digital projects and media productions.</p></div>
        </article>
        <article class="career-item">
          <span>03</span>
          <div><h3>UI/UX Designer</h3><p>Help shape how people navigate and interact with websites and applications.</p></div>
        </article>
        <article class="career-item">
          <span>04</span>
          <div><h3>Animator or Video Editor</h3><p>Produce motion graphics, animation, and edited video content.</p></div>
        </article>
      </div>
      <p class="career-disclaimer">Career titles and eligibility vary depending on the employer, industry, and qualifications required.</p>
    </section>

    <section class="section why-section">
      <div class="section-title">
        <p class="eyebrow">04 — WHY CHOOSE DIGITAL MEDIA AND INTERACTIVE ARTS?</p>
        <h2>Shape how people see and experience ideas.</h2>
      </div>
      <div class="why-grid">
        <article><span>✳</span><h3>Creative Expression</h3><p>Explore ways to communicate ideas through images, motion, sound, and digital media.</p></article>
        <article><span>▤</span><h3>Creative Technology</h3><p>Use digital tools to develop polished content and engaging interactive work.</p></article>
        <article><span>◎</span><h3>Audience Experiences</h3><p>Think about how people view, use, and connect with digital content.</p></article>
      </div>
    </section>

    <section class="section who-section">
      <img src="@/assets/img/dmia.png" alt="BSDMIA program logo" class="program-mark" />
      <div>
        <p class="eyebrow">05 — WHO SHOULD ENROLL?</p>
        <h2>Creative minds. Visual storytellers. Curious makers.</h2>
        <p>BSDMIA may suit students who enjoy drawing, designing, storytelling, animation, or exploring how people interact with digital content. Curiosity, creativity, and a willingness to practice are a great place to start.</p>
      </div>
    </section>

    <section class="cta">
      <p class="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
      <h2>Discover the possibilities of digital media.</h2>
      <p>Explore the program and consult official CPU channels for verified admission requirements and curriculum details.</p>
      <RouterLink class="button primary" to="/">Back to CCS Home</RouterLink>
    </section>

    <footer class="footer">
      <RouterLink to="/">CPU · CCS</RouterLink>
      <span>College of Computer Studies</span>
      <span>BSDMIA Program Page</span>
    </footer>
  </main>
</template>

<style scoped>
.bsdmia-page {
  --deep: #302600;
  --gold: #9a6f00;
  --bright: #f2b705;
  --pale: #fff3bf;
  --cream: #fff9e0;
  --muted: #6b5a2e;
  color: #3d2e00;
  font-family: Arial, Helvetica, sans-serif;
  overflow: hidden;
  background: var(--cream);
}

.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  min-height: 620px;
  padding: 80px 10%;
  color: #fff;
  background:
    radial-gradient(circle at 85% 20%, rgba(242, 183, 5, 0.16), transparent 28%),
    linear-gradient(120deg, #302600, #765600);
}

.hero-copy {
  max-width: 620px;
}

.eyebrow {
  margin: 0 0 16px;
  color: var(--gold);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.6px;
  line-height: 1.6;
}

.hero .eyebrow,
.cta .eyebrow {
  color: var(--bright);
}

.hero-copy > .eyebrow {
  display: inline-block;
  padding: 9px 13px;
  border: 1px solid rgba(242, 183, 5, 0.6);
  border-radius: 20px;
}

.hero h1,
.section h2,
.cta h2 {
  margin: 0;
  font-family: Georgia, "Times New Roman", serif;
  font-weight: 600;
  letter-spacing: -0.8px;
  line-height: 1.12;
}

.hero h1 {
  max-width: 650px;
  font-size: clamp(42px, 5.4vw, 72px);
}

.hero h1 span {
  color: var(--bright);
  font-style: italic;
}

.intro {
  max-width: 540px;
  margin: 24px 0 28px;
  color: var(--pale);
  font-size: 16px;
  line-height: 1.8;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 13px 20px;
  border: 1px solid transparent;
  border-radius: 5px;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.2s, background-color 0.3s, color 0.3s, border-color 0.3s;
}

.button:hover {
  transform: translateY(-3px);
}

.button:focus-visible,
.footer a:focus-visible {
  outline: 3px solid var(--bright);
  outline-offset: 3px;
}

.primary,
.outline {
  background: var(--bright);
  color: #302600;
}

.primary:hover,
.outline:hover {
  border-color: var(--bright);
  background: var(--deep);
  color: var(--bright);
}

.hero-note {
  margin-top: 38px;
  color: var(--pale);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2.2px;
}

.hero-visual {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 330px;
  height: 330px;
  border: 10px solid rgba(242, 183, 5, 0.65);
  border-radius: 50%;
  background: #fff9e0;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
}

.hero-visual img {
  width: 170px;
  height: 170px;
  object-fit: contain;
}

.section {
  padding: clamp(64px, 8vw, 100px) clamp(24px, 9%, 130px);
}

.overview,
.why-section {
  background: #fff6cc;
}

.learning,
.careers,
.who-section {
  background: #fff0b3;
}

.section-title h2 {
  max-width: 690px;
  color: var(--deep);
  font-size: clamp(30px, 3.5vw, 44px);
}

.overview-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(260px, 0.8fr);
  gap: clamp(30px, 6vw, 80px);
  align-items: center;
  margin-top: 42px;
}

.body-copy p,
.overview-card p,
.career-intro > p:last-child,
.who-section > div > p:last-child {
  color: var(--muted);
  font-size: 15px;
  line-height: 1.85;
}

.body-copy p {
  max-width: 700px;
}

.overview-card {
  padding: 30px;
  border: 1px solid #f0dc8a;
  border-top: 4px solid var(--bright);
  border-radius: 8px;
  background: var(--cream);
}

.card-icon,
.learning-icon {
  display: grid;
  place-items: center;
  color: var(--gold);
  background: var(--pale);
}

.card-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 24px;
}

.overview-card h3,
.learning-card h3,
.why-grid h3 {
  font-family: Georgia, serif;
  font-weight: 600;
  line-height: 1.35;
}

.overview-card h3 {
  margin: 20px 0 10px;
  color: var(--deep);
  font-size: 23px;
}

.centered {
  text-align: center;
}

.centered h2 {
  margin-inline: auto;
}

.section-title > p:last-child {
  max-width: 650px;
  margin: 16px auto 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.75;
}

.learning-grid,
.why-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
  gap: 18px;
  margin-top: 44px;
}

.learning-card,
.why-grid article {
  padding: 24px 22px;
  border: 1px solid #f0dc8a;
  border-radius: 8px;
  background: #fffbea;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.learning-card:hover,
.why-grid article:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(92, 67, 0, 0.1);
}

.number {
  color: #9a6f00;
  font-size: 12px;
  font-weight: 700;
}

.learning-icon {
  width: 52px;
  height: 52px;
  margin: 18px 0;
  border-radius: 12px;
  font-size: 28px;
}

.learning-card h3,
.why-grid h3 {
  margin: 0 0 10px;
  color: var(--deep);
  font-size: 19px;
}

.learning-card p,
.why-grid p,
.career-item p {
  color: var(--muted);
  font-size: 13px;
  line-height: 1.75;
}

.careers {
  display: grid;
  grid-template-columns: minmax(250px, 0.8fr) minmax(0, 1.2fr);
  gap: 24px clamp(35px, 7vw, 90px);
  align-items: start;
}

.career-intro h2 {
  color: var(--deep);
  font-size: clamp(31px, 3.3vw, 43px);
}

.career-intro > p:last-child {
  margin-top: 18px;
}

.career-list {
  border-top: 1px solid #f0dc8a;
}

.career-item {
  display: flex;
  gap: 18px;
  padding: 19px 0;
  border-bottom: 1px solid #f0dc8a;
}

.career-item > span {
  color: var(--gold);
  font-size: 12px;
  font-weight: 700;
}

.career-item h3 {
  margin: 0;
  color: var(--deep);
  font-size: 15px;
}

.career-item p {
  margin: 7px 0 0;
}

.career-disclaimer {
  grid-column: 2;
  margin: 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.7;
}

.why-grid article > span {
  color: var(--gold);
  font-size: 28px;
}

.why-grid h3 {
  margin-top: 18px;
}

.who-section {
  display: grid;
  grid-template-columns: minmax(240px, 0.8fr) minmax(0, 1.2fr);
  gap: clamp(30px, 7vw, 90px);
  align-items: center;
}

.program-mark {
  display: block;
  width: min(100%, 320px);
  height: auto;
  margin: 0 auto;
  object-fit: contain;
}

.who-section h2 {
  max-width: 650px;
  color: var(--deep);
  font-size: clamp(29px, 3.3vw, 42px);
}

.who-section > div > p:last-child {
  margin-top: 18px;
}

.cta {
  padding: clamp(60px, 8vw, 90px) clamp(20px, 8%, 100px);
  text-align: center;
  color: #fff;
  background: var(--deep);
}

.cta h2 {
  font-size: clamp(34px, 4vw, 50px);
}

.cta > p:not(.eyebrow) {
  max-width: 560px;
  margin: 18px auto 28px;
  color: var(--pale);
  font-size: 14px;
  line-height: 1.8;
}

.footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 14px 24px;
  padding: 24px clamp(20px, 8%, 100px);
  border-top: 1px solid #f0dc8a;
  background: #fff6cc;
  color: var(--muted);
  font-size: 12px;
}

.footer a {
  color: var(--gold);
  font-weight: 700;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}

@media (max-width: 760px) {
  .hero {
    flex-direction: column;
    justify-content: center;
    gap: 42px;
    min-height: auto;
    padding: 70px 8%;
    text-align: center;
  }

  .intro {
    margin-right: auto;
    margin-left: auto;
  }

  .hero-visual {
    width: 250px;
    height: 250px;
  }

  .hero-visual img {
    width: 140px;
    height: 140px;
  }

  .overview-grid,
  .careers,
  .who-section {
    grid-template-columns: 1fr;
  }

  .career-disclaimer {
    grid-column: 1;
  }
}

@media (max-width: 500px) {
  .hero h1 {
    font-size: 42px;
  }

  .actions {
    align-items: stretch;
    flex-direction: column;
  }

  .button {
    width: 100%;
  }
}
</style>
