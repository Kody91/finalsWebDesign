<template>
  <section class="programs" id="programs">
    <div class="heading">
      <p>Find your direction</p>
      <h2>Programs Offered</h2>
      <p>Explore the four programs offered by the College of Computer Studies.</p>
    </div>

    <div class="program-list">
      <article class="program-card">
        <img src="@/assets/img/bsit.png" alt="BSIT program logo" />
        <h3>Bachelor of Science in Information Technology (BSIT)</h3>
        <p>Learn to use technology to solve practical problems and support organizations.</p>
        <details name="bsit">
          <summary><span>Read more</span><span>Read less</span></summary>
          <p><strong>Overview:</strong> Apply computing systems, networks, and software to real needs.</p>
          <p><strong>What you can learn:</strong> Systems analysis, application development, and networking.</p>
          <p><strong>Career paths:</strong> IT support, systems analysis, network administration, and web development.</p>
        </details>
      </article>

      <article class="program-card">
        <img src="@/assets/img/bscs.png" alt="BSCS program logo" />
        <h3>Bachelor of Science in Computer Science (BSCS)</h3>
        <p>Study the foundations of computing and learn to design software solutions.</p>
        <details name="bscs">
          <summary><span>Read more</span><span>Read less</span></summary>
          <p><strong>Overview:</strong> Explore computing principles, algorithms, and programming.</p>
          <p><strong>What you can learn:</strong> Programming, algorithms, software design, and computational thinking.</p>
          <p><strong>Career paths:</strong> Software development, systems engineering, data, and research.</p>
        </details>
      </article>

      <article class="program-card">
        <img src="@/assets/img/dmia.png" alt="BSDMIA program logo" />
        <h3>Bachelor of Science in Data Mining and Information Analytics (BSDMIA)</h3>
        <p>Analyze information and turn data into useful findings and decisions.</p>
        <details name="bsdmia">
          <summary><span>Read more</span><span>Read less</span></summary>
          <p><strong>Overview:</strong> Find patterns in data and use them to support decisions.</p>
          <p><strong>What you can learn:</strong> Data preparation, analysis, visualization, and interpretation.</p>
          <p><strong>Career paths:</strong> Data analyst, business intelligence analyst, and research analyst.</p>
        </details>
      </article>

      <article class="program-card">
        <img src="@/assets/img/blis.png" alt="BLIS program logo" />
        <h3>Bachelor of Library and Information Science (BLIS)</h3>
        <p>Help people find, use, organize, and preserve information.</p>
        <details name="blis">
          <summary><span>Read more</span><span>Read less</span></summary>
          <p><strong>Overview:</strong> Learn how information is organized, preserved, and shared.</p>
          <p><strong>What you can learn:</strong> Research support, digital resources, and information services.</p>
          <p><strong>Career paths:</strong> Librarian, information specialist, records officer, and digital collections assistant.</p>
        </details>
      </article>
    </div>
  </section>
</template>

<style scoped>
.programs {
  padding: 70px 8%;
  background: #f7f7f2;
}

.heading {
  max-width: 650px;
  margin: 0 auto 40px;
  text-align: center;
}

.heading > p:first-child {
  color: #638366;
  font-weight: bold;
  text-transform: uppercase;
}

h2 {
  margin: 10px 0;
  color: #254a34;
  font-size: 36px;
}

.program-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: start;
  gap: 20px;
}

.program-card {
  padding: 22px;
  border: 1px solid #dce3da;
  border-radius: 6px;
  background: white;
  transition: background-color 0.3s, border-color 0.3s, color 0.3s, transform 0.3s, box-shadow 0.3s;
}

.program-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
}

.program-card:nth-child(1):hover {
  border-color: #e4c45a;
  background: #fff9e9;
}

.program-card:nth-child(1):hover h3,
.program-card:nth-child(1):hover summary,
.program-card:nth-child(1):hover p {
  color: #866b18;
}

.program-card:nth-child(2):hover {
  border-color: #75acd1;
  background: #f0f7fb;
}

.program-card:nth-child(2):hover h3,
.program-card:nth-child(2):hover summary,
.program-card:nth-child(2):hover p {
  color: #286b98;
}

.program-card:nth-child(3):hover {
  border-color: #eab45d;
  background: #fff6e9;
}

.program-card:nth-child(3):hover h3,
.program-card:nth-child(3):hover summary,
.program-card:nth-child(3):hover p {
  color: #986525;
}

.program-card:nth-child(4):hover {
  border-color: #929fc2;
  background: #f3f5fa;
}

.program-card:nth-child(4):hover h3,
.program-card:nth-child(4):hover summary,
.program-card:nth-child(4):hover p {
  color: #465a83;
}

.program-card img {
  display: block;
  width: 130px;
  height: 110px;
  margin: 0 auto 16px;
  object-fit: contain;
}

.program-card h3 {
  color: #254a34;
}

.program-card p {
  line-height: 1.6;
}

summary {
  padding-top: 10px;
  border-top: 1px solid #dce3da;
  color: #315e3c;
  cursor: pointer;
  font-weight: bold;
}

summary span:last-child,
details[open] summary span:first-child {
  display: none;
}

details[open] summary span:last-child {
  display: inline;
}

@media (max-width: 900px) {
  .program-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 550px) {
  .programs {
    padding: 50px 20px;
  }

  .program-list {
    grid-template-columns: 1fr;
  }
}
</style>
