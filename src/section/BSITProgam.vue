<template>
    
    <main class="bsit-page" id ="bsit">
  
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY</p>
          <h1>Building the future with <span>technology.</span></h1>
          <p class="intro">
            Explore the world of technology: how software is built, networks are
            secured, data is managed, and systems are designed to support
            businesses, education, and communities.
          </p>
          <div class="actions">
            <RouterLink class="button primary" :to="{ hash: '#overview' }">Explore the Program</RouterLink>
            <RouterLink class="button outline" :to="{ hash: '#careers' }">Career Opportunities</RouterLink>
          </div>
          <p class="hero-note">TECHNOLOGY · INNOVATION · SOLUTIONS</p>
        </div>
        <div class="hero-visual">
      <img src="@/assets/img/bsit.png" alt="Bachelor of Science in Information Technology" class="bsit-image"/>   
      </div>
      </section>
  
      <section id="overview" class="section overview">
        <div class="section-title">
          <p class="eyebrow">01 — PROGRAM OVERVIEW</p>
          <h2>Technology makes a difference.</h2>
        </div>
        <div class="overview-grid">
          <div class="body-copy">
            <p>
              The Bachelor of Science in Information Technology (BSIT) focuses on
              designing, developing, managing, and maintaining computer-based
              systems. It explores how technology is used to solve problems in
              organizations and everyday life.
            </p>
            <p>
              The field connects programming, networking, databases, and
              information systems with the changing needs of users and industries.
              Students learn ways to build reliable and useful technology solutions.
            </p>
          </div>
          <aside class="overview-card">
            <div class="card-icon">⌘</div>
            <h3>Ideas meet technology.</h3>
            <p>Understand how software, networks, and digital tools support business, education, research, and innovation.</p>
          </aside>
        </div>
      </section>
  
      <section class="section learning">
        <div class="section-title centered">
          <p class="eyebrow">02 — WHAT YOU WILL LEARN</p>
          <h2>Skills that power modern technology.</h2>
          <p>These are common areas in Information Technology. Check the official CPU curriculum for the exact subjects offered.</p>
        </div>
        <div class="learning-grid">
          <article class="learning-card">
            <span class="number">01</span><div class="learning-icon">▤</div>
            <h3>Programming and Development</h3>
            <p>Explore programming, web development, and software design to build applications that solve real problems.</p>
          </article>
          <article class="learning-card">
            <span class="number">02</span><div class="learning-icon">⌕</div>
            <h3>Networking and Security</h3>
            <p>Practice setting up, managing, and protecting networks and systems from common threats.</p>
          </article>
          <article class="learning-card">
            <span class="number">03</span><div class="learning-icon">▦</div>
            <h3>Databases and Information Systems</h3>
            <p>Learn how data is stored, organized, and used in information systems that support organizations.</p>
          </article>
          <article class="learning-card">
            <span class="number">04</span><div class="learning-icon">♡</div>
            <h3>IT Support and Services</h3>
            <p>Understand how to assist users, troubleshoot problems, and keep technology running smoothly.</p>
          </article>
        </div>
      </section>
  
      <section id="careers" class="section careers">
        <div class="career-intro">
          <p class="eyebrow">03 — CAREER OPPORTUNITIES</p>
          <h2>Build a career around technology.</h2>
          <p>BSIT graduates may explore opportunities in companies, schools, government offices, and technology-driven organizations, depending on qualifications and employer requirements.</p>
        </div>
  
        <div class="career-list">
          <article class="career-item"> <span>01</span> <div><h3>Software or Web Developer</h3><p>Design, build, and maintain applications and websites.</p></div></article>
          <article class="career-item"> <span>02</span> <div><h3>Network Administrator</h3><p>Set up and manage networks so organizations stay connected and secure.</p></div></article>
          <article class="career-item"> <span>03</span> <div><h3>Database Administrator</h3><p>Help maintain organized, accessible, and reliable data.</p></div></article>
          <article class="career-item"> <span>04</span> <div><h3>Systems Analyst</h3><p>Study organizational needs and recommend effective technology solutions.</p></div></article>
          <article class="career-item"> <span>05</span> <div><h3>IT Support Specialist</h3><p>Help users solve technical problems and keep systems running.</p></div></article>
        </div>
        <p class="career-disclaimer">Career titles and eligibility vary depending on the employer, industry, and qualifications required.</p>
      </section>
  
      <section class="section why-section">
        <div class="section-title">
          <p class="eyebrow">04 — WHY CHOOSE BSIT?</p>
          <h2>Make technology work for everyone.</h2>
        </div>
        <div class="why-grid">
          <article><span>✳</span><h3>Practical Skills</h3><p>Gain hands-on skills in programming, networking, and systems that are useful in many workplaces.</p></article>
          <article><span>⌘</span><h3>Technology and Innovation</h3><p>Explore how software, data, and digital tools work together to solve problems.</p></article>
          <article><span>◎</span><h3>Flexible Career Paths</h3><p>Build skills relevant to development, networking, data, support, and technology-focused environments.</p></article>
        </div>
      </section>
  
      <section class="section who-section">
        <img src="@/assets/img/bsit.png" alt="BSIT program mark" class="bsit-mark" />
        <div>
          <p class="eyebrow">05 — WHO SHOULD ENROLL?</p>
          <h2>Curious minds. Problem solvers. Lifelong learners.</h2>
          <p>BSIT may suit students who enjoy computers, problem solving, building things, troubleshooting, and using technology to meet real needs. A willingness to learn and keep improving is a great place to start.</p>
        </div>
      </section>
  
      <section class="cta">
        <p class="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
        <h2>Discover the possibilities of BSIT.</h2>
        <p>Explore the program and consult official CPU channels for verified admission requirements and curriculum details.</p>
        <RouterLink class="button primary" to="/">Back to CCS Home</RouterLink>
      </section>
  
      <footer class="footer">
        <RouterLink to="/">CPU · CCS</RouterLink>
        <span>College of Computer Studies</span>
        <span>BSIT Program Page</span>
      </footer>
    </main>
  </template>
  
  <style scoped>
  .bsit-page {
    --deep: #5C4300;
    --blue: #9A6F00;
    --sky: #F2B705;
    --lime: #FFD93D;
    --sage: #FFF3BF;
    --cream: #FFF9E0;
    --muted: #6B5A2E;
  
    color: #3D2E00;
    font-family: Arial, Helvetica, sans-serif;
    overflow: hidden;
    background: #FFF9E0;
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
      radial-gradient(circle at 85% 20%, rgba(242, 183, 5, 0.14), transparent 28%),
      linear-gradient(120deg, #5C4300, #9A6F00);
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
    border: 1px solid rgba(255, 217, 61, 0.5);
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
    color: #FFF3BF;
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
    color: #3D2E00;
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
    color: #3D2E00;
  }
  
  .hero-note {
    margin-top: 38px;
    color: #FFF3BF;
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
    border: 1px solid rgba(242, 183, 5, 0.55);
    border-width: 10px;
    border-radius: 50%;
    background: #FFF9E0;
    box-shadow: 0 20px 50px rgba(61, 46, 0, 0.3);
  }
  
  .bsit-image {
    display: block;
    width: 170px;
    height: 170px;
    object-fit: contain;
  }
  
  .section {
    padding: clamp(64px, 8vw, 100px) clamp(24px, 9%, 130px);
  }
  
  .overview {
    background: #FFF6CC;
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
    border: 1px solid #F0DC8A;
    border-top: 4px solid var(--sky);
    border-radius: 8px;
    background: var(--cream);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  .overview-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(92, 67, 0, 0.1);
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
    background: #FFF0B3;
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
    border: 1px solid #F0DC8A;
    border-radius: 8px;
    background: #FFFBEA;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  }
  
  .learning-card:hover {
    transform: translateY(-5px);
    border-color: var(--sky);
    box-shadow: 0 12px 24px rgba(92, 67, 0, 0.08);
  }
  
  .number {
    display: inline-block;
    color: #B8912A;
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
    background: #FFF0B3;
  }
  
  .career-intro h2 {
    color: var(--deep);
    font-size: clamp(31px, 3.3vw, 43px);
  }
  
  .career-intro > p:last-child {
    margin-top: 18px;
  }
  
  .career-list {
    border-top: 1px solid #F0DC8A;
  }
  
  .career-item {
    display: flex;
    gap: 18px;
    padding: 19px 0;
    border-bottom: 1px solid #F0DC8A;
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
    background: #FFF6CC;
  }
  
  .why-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
    gap: 22px;
    margin-top: 42px;
  }
  
  .why-grid article {
    padding: 26px 24px;
    border: 1px solid #F0DC8A;
    border-radius: 8px;
    background: rgba(255, 243, 191, 0.9);
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  }
  
  .why-grid article:hover {
    transform: translateY(-5px);
    border-color: var(--sky);
    box-shadow: 0 12px 24px rgba(92, 67, 0, 0.1);
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
    background: #FFF0B3;
  }
  
  .bsit-mark {
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
    color: #FFF3BF;
    font-size: 14px;
    line-height: 1.8;
  }
  
  .footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 14px 24px;
    padding: 24px clamp(20px, 8%, 100px);
    border-top: 1px solid #F0DC8A;
    background: #FFF6CC;
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
  
    .bsit-image {
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
  
    .bsit-mark {
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