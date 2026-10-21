<template>
    
  <main class="blis-page" id ="blis">

    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">BACHELOR OF LIBRARY AND INFORMATION SCIENCE</p>
        <h1>Connecting people with <span>knowledge.</span></h1>
        <p class="intro">
          Explore the world of information: how it is organized, preserved,
          discovered, and shared to support learning, research, and communities.
        </p>
        <div class="actions">
          <RouterLink class="button primary" :to="{ hash: '#overview' }">Explore the Program</RouterLink>
          <RouterLink class="button outline" :to="{ hash: '#careers' }">Career Opportunities</RouterLink>
        </div>
        <p class="hero-note">INFORMATION · DISCOVERY · SERVICE</p>
      </div>
      <div class="hero-visual">
    <img src="@/assets/img/blis.png" alt="Bachelor of Library and Information Science" class="blis-image"/>   
    </div>
    </section>

    <section id="overview" class="section overview">
      <div class="section-title">
        <p class="eyebrow">01 — PROGRAM OVERVIEW</p>
        <h2>Information makes a difference.</h2>
      </div>
      <div class="overview-grid">
        <div class="body-copy">
          <p>
            The Bachelor of Library and Information Science (BLIS) focuses on
            organizing, managing, preserving, and providing access to information
            resources. It explores how people find and use information in
            libraries and other information environments.
          </p>
          <p>
            The field also connects information services with technology,
            research, digital resources, and the changing needs of information
            users. Students learn ways to make knowledge easier to discover and use.
          </p>
        </div>
        <aside class="overview-card">
          <div class="card-icon">⌘</div>
          <h3>Knowledge meets technology.</h3>
          <p>Understand how information resources and digital tools support education, research, and lifelong learning.</p>
        </aside>
      </div>
    </section>

    <section class="section learning">
      <div class="section-title centered">
        <p class="eyebrow">02 — WHAT YOU WILL LEARN</p>
        <h2>Skills that make knowledge accessible.</h2>
        <p>These are common areas in Library and Information Science. Check the official CPU curriculum for the exact subjects offered.</p>
      </div>
      <div class="learning-grid">
        <article class="learning-card">
          <span class="number">01</span><div class="learning-icon">▤</div>
          <h3>Information Organization</h3>
          <p>Explore cataloging, classification, and describing information resources so users can find them.</p>
        </article>
        <article class="learning-card">
          <span class="number">02</span><div class="learning-icon">⌕</div>
          <h3>Research and Discovery</h3>
          <p>Practice finding, evaluating, and using information from relevant and reliable sources.</p>
        </article>
        <article class="learning-card">
          <span class="number">03</span><div class="learning-icon">▦</div>
          <h3>Digital Information</h3>
          <p>Learn about digital resources, information systems, and technology-supported services.</p>
        </article>
        <article class="learning-card">
          <span class="number">04</span><div class="learning-icon">♡</div>
          <h3>Information Services</h3>
          <p>Understand how to assist users and support reading, education, research, and communities.</p>
        </article>
      </div>
    </section>

    <section id="careers" class="section careers">
      <div class="career-intro">
        <p class="eyebrow">03 — CAREER OPPORTUNITIES</p>
        <h2>Build a career around information.</h2>
        <p>BLIS graduates may explore opportunities in libraries, schools, organizations, and digital information environments, depending on qualifications and employer requirements.</p>
      </div>

      <div class="career-list">
        <article class="career-item"> <span>01</span> <div><h3>Librarian</h3><p>Help users access resources and support research and learning.</p></div></article>
        <article class="career-item"> <span>02</span> <div><h3>Cataloging or Metadata Assistant</h3><p>Organize and describe information resources for easier discovery.</p></div></article>
        <article class="career-item"> <span>03</span> <div><h3>Records Management Staff</h3><p>Help maintain organized, accessible, and reliable records.</p></div></article>
        <article class="career-item"> <span>04</span> <div><h3>Digital Collections Assistant</h3><p>Support the organization and preservation of digital materials.</p></div></article>
        <article class="career-item"> <span>05</span> <div><h3>Research and Information Assistant</h3><p>Help people locate useful information for projects and research.</p></div></article>
      </div>
      <p class="career-disclaimer">Career titles and eligibility vary. Librarian positions in the Philippines may require specific qualifications and professional licensure.</p>
    </section>

    <section class="section why-section">
      <div class="section-title">
        <p class="eyebrow">04 — WHY CHOOSE BLIS?</p>
        <h2>Make information useful to everyone.</h2>
      </div>
      <div class="why-grid">
        <article><span>✳</span><h3>Meaningful Service</h3><p>Help students, researchers, and communities access useful information and learning resources.</p></article>
        <article><span>⌘</span><h3>Technology and Knowledge</h3><p>Explore how information management and digital tools work together.</p></article>
        <article><span>◎</span><h3>Flexible Knowledge</h3><p>Build skills relevant to libraries, records, research, and information-focused environments.</p></article>
      </div>
    </section>

    <section class="section who-section">
      <img src="@/assets/img/blis.png" alt="BLIS program mark" class="blis-mark" />
      <div>
        <p class="eyebrow">05 — WHO SHOULD ENROLL?</p>
        <h2>Curious minds. Organized thinkers. Lifelong learners.</h2>
        <p>BLIS may suit students who enjoy reading, research, organizing information, helping others, and using technology to solve information needs. A willingness to learn and serve others is a great place to start.</p>
      </div>
    </section>

    <section class="cta">
      <p class="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
      <h2>Discover the possibilities of BLIS.</h2>
      <p>Explore the program and consult official CPU channels for verified admission requirements and curriculum details.</p>
      <RouterLink class="button primary" to="/">Back to CCS Home</RouterLink>
    </section>

    <footer class="footer">
      <RouterLink to="/">CPU · CCS</RouterLink>
      <span>College of Computer Studies</span>
      <span>BLIS Program Page</span>
    </footer>
  </main>
</template>

<style scoped>
.blis-page {
  --deep: #172b68;
  --blue: #2854a3;
  --sky: #60b1e8;
  --lime: #bbea8e;
  --sage: #e9f3df;
  --cream: #e9edf4;
  --muted: #5c6680;

  color: #26324c;
  font-family: Arial, Helvetica, sans-serif;
  overflow: hidden;
  background: #e9edf4;
}

.hero {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  min-height: 620px;
  padding: 80px 10%;
  color: #fff;
  background:
    radial-gradient(circle at 85% 20%, rgba(96, 177, 232, 0.14), transparent 28%),
    linear-gradient(120deg, #172b68, #2854a3);
}

.hero-copy {
  position: relative;
  z-index: 1;
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
  color: var(--lime);
}

.hero-copy > .eyebrow {
  display: inline-block;
  padding: 9px 13px;
  border: 1px solid rgba(187, 234, 142, 0.5);
  border-radius: 20px;
  letter-spacing: 2px;
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
  color: var(--lime);
  font-style: italic;
}

.intro {
  max-width: 540px;
  margin: 24px 0 28px;
  color: #e2e9f5;
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
  gap: 12px;
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
  outline: 3px solid var(--lime);
  outline-offset: 3px;
}

.primary {
  background: var(--lime);
  color: #26324c;
}

.primary:hover,
.actions .outline:hover {
  border-color: var(--lime);
  background: var(--deep);
  color: var(--lime);
}

.outline {
  border-color: var(--lime);
  background: var(--lime);
  color: #26324c;
}

.hero-note {
  margin-top: 38px;
  color: #c4cee5;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2.2px;
}

.hero-visual {
  position: relative;
  z-index: 1;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 330px;
  height: 330px;
  border: 1px solid rgba(96, 177, 232, 0.55);
  border-width: 10px;
  border-radius: 50%;
  background: #e9edf4;
  box-shadow: 0 20px 50px rgba(16, 31, 77, 0.3);
}

.blis-image {
  display: block;
  width: 170px;
  height: 170px;
  object-fit: contain;
}

.section {
  padding: clamp(64px, 8vw, 100px) clamp(24px, 9%, 130px);
}

.overview {
  background: #e3edf5;
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
  border: 1px solid #c2dced;
  border-top: 4px solid var(--sky);
  border-radius: 8px;
  background: var(--cream);
  transition: transform 0.2s, box-shadow 0.2s;
}

.overview-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(23, 43, 104, 0.1);
}

.card-icon {
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: var(--deep);
  background: var(--sage);
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

.learning {
  background: #e9f3df;
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

.learning-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
  gap: 18px;
  margin-top: 44px;
}

.learning-card {
  min-height: 260px;
  padding: 24px 22px;
  border: 1px solid #cfe0ec;
  border-radius: 8px;
  background: #f0f3f7;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.learning-card:hover {
  transform: translateY(-5px);
  border-color: var(--sky);
  box-shadow: 0 12px 24px rgba(23, 43, 104, 0.08);
}

.number {
  display: inline-block;
  color: #7488b4;
  font-size: 12px;
  font-weight: 700;
}

.learning-icon {
  display: grid;
  width: 52px;
  height: 52px;
  margin: 18px 0;
  place-items: center;
  border-radius: 12px;
  color: var(--blue);
  background: var(--sage);
  font-size: 28px;
}

.learning-card h3 {
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
  background: #e3edf5;
}

.career-intro h2 {
  color: var(--deep);
  font-size: clamp(31px, 3.3vw, 43px);
}

.career-intro > p:last-child {
  margin-top: 18px;
}

.career-list {
  border-top: 1px solid #c9d9e9;
}

.career-item {
  display: flex;
  gap: 18px;
  padding: 19px 0;
  border-bottom: 1px solid #c9d9e9;
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

.why-section {
  background: #e9f3df;
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
  gap: 22px;
  margin-top: 42px;
}

.why-grid article {
  padding: 26px 24px;
  border: 1px solid #c2dced;
  border-radius: 8px;
  background: rgba(233, 243, 223, 0.9);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.why-grid article:hover {
  transform: translateY(-5px);
  border-color: var(--sky);
  box-shadow: 0 12px 24px rgba(23, 43, 104, 0.1);
}

.why-grid article > span {
  color: var(--blue);
  font-size: 28px;
}

.why-grid h3 {
  margin: 18px 0 8px;
  color: var(--deep);
  font-size: 19px;
}

.who-section {
  display: grid;
  grid-template-columns: minmax(240px, 0.8fr) minmax(0, 1.2fr);
  gap: clamp(30px, 7vw, 90px);
  align-items: center;
  background: #e3edf5;
}

.blis-mark {
  display: block;
  width: min(100%, 380px);
  max-width: 100%;
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
  color: #e2e9f5;
  font-size: 14px;
  line-height: 1.8;
}

.footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 14px 24px;
  padding: 24px clamp(20px, 8%, 100px);
  border-top: 1px solid #c2dced;
  background: #e3edf5;
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

  .hero-copy {
    width: 100%;
  }

  .intro {
    margin-right: auto;
    margin-left: auto;
  }

  .hero-visual {
    width: 250px;
    height: 250px;
  }

  .blis-image {
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

  .blis-mark {
    width: min(100%, 320px);
    margin: 0 auto;
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
