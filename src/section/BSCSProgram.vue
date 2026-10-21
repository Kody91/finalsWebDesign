<template>
  <main class="bscs-page">
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">BACHELOR OF SCIENCE IN COMPUTER SCIENCE</p>
        <h1>Understand computing. <span>Build what’s next.</span></h1>
        <p class="intro">
          Explore the ideas behind software and computing, from programming and
          algorithms to the design of thoughtful technology solutions.
        </p>
        <div class="actions">
          <RouterLink class="button primary" :to="{ hash: '#overview' }">Explore the Program</RouterLink>
          <RouterLink class="button outline" :to="{ hash: '#careers' }">Career Opportunities</RouterLink>
        </div>
        <p class="hero-note">COMPUTING · LOGIC · INNOVATION</p>
      </div>
      <div class="hero-visual">
        <img src="@/assets/img/bscs.png" alt="Bachelor of Science in Computer Science logo" />
      </div>
    </section>

    <section id="overview" class="section overview">
      <div class="section-title">
        <p class="eyebrow">01 — PROGRAM OVERVIEW</p>
        <h2>Explore the foundations of computing.</h2>
      </div>
      <div class="overview-grid">
        <div class="body-copy">
          <p>
            The Bachelor of Science in Computer Science (BSCS) explores the
            principles behind computers and the software they run. Students
            learn to approach problems with logic and develop solutions through
            programming and computing concepts.
          </p>
          <p>
            The program can include areas such as algorithms, software design,
            data, and intelligent systems. These foundations help students
            understand how technology works and how new computing solutions are
            developed.
          </p>
        </div>
        <aside class="overview-card">
          <div class="card-icon">⌘</div>
          <h3>Think clearly. Create with code.</h3>
          <p>Use computational thinking and creativity to explore problems and build software solutions.</p>
        </aside>
      </div>
    </section>

    <section class="section learning">
      <div class="section-title centered">
        <p class="eyebrow">02 — WHAT YOU WILL LEARN</p>
        <h2>Build a strong foundation in computing.</h2>
        <p>These are common areas in Computer Science. Check the official CPU curriculum for the exact subjects offered.</p>
      </div>
      <div class="learning-grid">
        <article class="learning-card">
          <span class="number">01</span>
          <div class="learning-icon">▤</div>
          <h3>Programming</h3>
          <p>Learn to express solutions as instructions a computer can follow and develop working software.</p>
        </article>
        <article class="learning-card">
          <span class="number">02</span>
          <div class="learning-icon">⌕</div>
          <h3>Algorithms and Problem Solving</h3>
          <p>Break problems into steps and study ways to solve them clearly and efficiently.</p>
        </article>
        <article class="learning-card">
          <span class="number">03</span>
          <div class="learning-icon">▦</div>
          <h3>Software Design</h3>
          <p>Explore how software is planned, organized, tested, and improved over time.</p>
        </article>
        <article class="learning-card">
          <span class="number">04</span>
          <div class="learning-icon">◎</div>
          <h3>Computing Foundations</h3>
          <p>Understand key concepts that explain how computers represent and process information.</p>
        </article>
      </div>
    </section>

    <section id="careers" class="section careers">
      <div class="career-intro">
        <p class="eyebrow">03 — CAREER OPPORTUNITIES</p>
        <h2>Put computing knowledge to work.</h2>
        <p>BSCS graduates may explore opportunities in software, technology, research, and other fields, depending on their interests, qualifications, and employer requirements.</p>
      </div>
      <div class="career-list">
        <article class="career-item">
          <span>01</span>
          <div><h3>Software Developer</h3><p>Design, build, and improve software for different needs and users.</p></div>
        </article>
        <article class="career-item">
          <span>02</span>
          <div><h3>Systems Engineer</h3><p>Help design and connect the parts of computer-based systems.</p></div>
        </article>
        <article class="career-item">
          <span>03</span>
          <div><h3>Quality Assurance Tester</h3><p>Check software for problems and help teams improve its reliability.</p></div>
        </article>
        <article class="career-item">
          <span>04</span>
          <div><h3>Computing Research Assistant</h3><p>Support research and projects that explore computing ideas and technology.</p></div>
        </article>
      </div>
      <p class="career-disclaimer">Career titles and eligibility vary depending on the employer, industry, and qualifications required.</p>
    </section>

    <section class="section why-section">
      <div class="section-title">
        <p class="eyebrow">04 — WHY CHOOSE BSCS?</p>
        <h2>Learn how to make technology possible.</h2>
      </div>
      <div class="why-grid">
        <article><span>⌘</span><h3>Strong Foundations</h3><p>Understand core computing concepts that can support continued learning.</p></article>
        <article><span>✳</span><h3>Creative Problem Solving</h3><p>Practice finding clear, logical ways to approach challenging problems.</p></article>
        <article><span>◎</span><h3>Many Areas to Explore</h3><p>Discover interests across software, systems, data, and other computing fields.</p></article>
      </div>
    </section>

    <section class="section who-section">
      <img src="@/assets/img/bscs.png" alt="BSCS program logo" class="program-mark" />
      <div>
        <p class="eyebrow">05 — WHO SHOULD ENROLL?</p>
        <h2>Curious minds. Logical thinkers. Future builders.</h2>
        <p>BSCS may suit students who enjoy solving puzzles, exploring how computers work, and creating things with code. Curiosity, patience, and a willingness to keep learning are a great place to start.</p>
      </div>
    </section>

    <section class="cta">
      <p class="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
      <h2>Discover the possibilities of Computer Science.</h2>
      <p>Explore the program and consult official CPU channels for verified admission requirements and curriculum details.</p>
      <RouterLink class="button primary" to="/">Back to CCS Home</RouterLink>
    </section>

    <footer class="footer">
      <RouterLink to="/">CPU · CCS</RouterLink>
      <span>College of Computer Studies</span>
      <span>BSCS Program Page</span>
    </footer>
  </main>
</template>

<style scoped>
.bscs-page {
  --deep: #123653;
  --blue: #286b98;
  --bright: #75acd1;
  --pale: #e5f3fb;
  --cream: #f5faff;
  --muted: #536b7a;
  color: #19384d;
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
    radial-gradient(circle at 85% 20%, rgba(117, 172, 209, 0.2), transparent 28%),
    linear-gradient(120deg, #123653, #286b98);
}

.hero-copy {
  max-width: 620px;
}

.eyebrow {
  margin: 0 0 16px;
  color: var(--blue);
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
  border: 1px solid rgba(117, 172, 209, 0.7);
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
  color: var(--deep);
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
  border: 10px solid rgba(117, 172, 209, 0.75);
  border-radius: 50%;
  background: var(--cream);
  box-shadow: 0 20px 50px rgba(10, 35, 55, 0.3);
}

.hero-visual img {
  width: 190px;
  height: 190px;
  object-fit: contain;
}

.section {
  padding: clamp(64px, 8vw, 100px) clamp(24px, 9%, 130px);
}

.overview,
.why-section {
  background: #eaf5fc;
}

.learning,
.careers,
.who-section {
  background: #dceef9;
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
  border: 1px solid #c6dfee;
  border-top: 4px solid var(--bright);
  border-radius: 8px;
  background: var(--cream);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.overview-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(18, 54, 83, 0.12);
}

.card-icon,
.learning-icon {
  display: grid;
  place-items: center;
  color: var(--blue);
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
  border: 1px solid #c6dfee;
  border-radius: 8px;
  background: #f8fcff;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.learning-card:hover,
.why-grid article:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(18, 54, 83, 0.12);
}

.number {
  color: var(--blue);
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
  border-top: 1px solid #c6dfee;
}

.career-item {
  display: flex;
  gap: 18px;
  padding: 19px 0;
  border-bottom: 1px solid #c6dfee;
}

.career-item > span {
  color: var(--blue);
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
  color: var(--blue);
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
  border-top: 1px solid #c6dfee;
  background: #eaf5fc;
  color: var(--muted);
  font-size: 12px;
}

.footer a {
  color: var(--blue);
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
    width: 150px;
    height: 150px;
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
