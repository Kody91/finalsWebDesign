<template>
  <section class="partners" id="partners">
    <div class="heading">
      <p>Learning beyond the classroom</p>
      <h2>Partnerships &amp; Memberships</h2>
      <p>
        Technology organizations connect the College of Computer Studies with tools and ideas used
        across the digital world.
      </p>
    </div>

    <div class="partner-list">
      <a class="partner-card" href="https://www.oracle.com/" target="_blank" rel="noopener noreferrer">
        <img src="@/assets/img/oracle.png" alt="Oracle logo" />
        <h3>Oracle</h3>
        <p>Database, cloud computing, and enterprise technology.</p>
      </a>

      <a class="partner-card" href="https://www.cisco.com/" target="_blank" rel="noopener noreferrer">
        <img src="@/assets/img/cisco.png" alt="Cisco logo" />
        <h3>Cisco</h3>
        <p>Networking, cybersecurity, and communications technology.</p>
      </a>

      <a class="partner-card" href="https://www.acer.com/" target="_blank" rel="noopener noreferrer">
        <img src="@/assets/img/acer.jpg" alt="Acer logo" />
        <h3>Acer</h3>
        <p>Computing devices and digital technology solutions.</p>
      </a>

      <a class="partner-card" href="https://www.huawei.com/" target="_blank" rel="noopener noreferrer">
        <img src="@/assets/img/huawei.jpg" alt="Huawei logo" />
        <h3>Huawei</h3>
        <p>Information and communications technology.</p>
      </a>
    </div>

    <a class="back-to-top" href="#hero">Back to top</a>
  </section>
</template>

<style scoped>
.partners {
  padding: 70px 8%;
  background: #e9eee6;
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

.partner-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.partner-card {
  display: block;
  padding: 22px;
  border: 1px solid #d4ddd2;
  border-radius: 6px;
  background: white;
  color: inherit;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s, border-color 0.3s, color 0.3s, transform 0.3s, box-shadow 0.3s;
}

.partner-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
}

.partner-card:nth-child(1):hover {
  border-color: #e4c45a;
  background: #fff9e9;
}

.partner-card:nth-child(1):hover h3,
.partner-card:nth-child(1):hover p {
  color: #866b18;
}

.partner-card:nth-child(2):hover {
  border-color: #75acd1;
  background: #f0f7fb;
}

.partner-card:nth-child(2):hover h3,
.partner-card:nth-child(2):hover p {
  color: #286b98;
}

.partner-card:nth-child(3):hover {
  border-color: #eab45d;
  background: #fff6e9;
}

.partner-card:nth-child(3):hover h3,
.partner-card:nth-child(3):hover p {
  color: #986525;
}

.partner-card:nth-child(4):hover {
  border-color: #929fc2;
  background: #f3f5fa;
}

.partner-card:nth-child(4):hover h3,
.partner-card:nth-child(4):hover p {
  color: #465a83;
}

.partner-card img {
  width: 140px;
  height: 90px;
  object-fit: contain;
}

.partner-card h3 {
  color: #254a34;
}

.partner-card p {
  line-height: 1.5;
}

.back-to-top {
  display: block;
  width: fit-content;
  margin: 35px auto 0;
  color: #254a34;
  font-weight: bold;
  text-decoration: none;
}

@media (max-width: 900px) {
  .partner-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 550px) {
  .partners {
    padding: 50px 20px;
  }

  .partner-list {
    grid-template-columns: 1fr;
  }
}
</style>
