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
      <article class="partner-card">
        <img src="@/assets/img/oracle.png" alt="Oracle logo" />
        <h3>Oracle</h3>
        <p>Database, cloud computing, and enterprise technology.</p>
      </article>

      <article class="partner-card">
        <img src="@/assets/img/cisco.png" alt="Cisco logo" />
        <h3>Cisco</h3>
        <p>Networking, cybersecurity, and communications technology.</p>
      </article>

      <article class="partner-card">
        <img src="@/assets/img/acer.jpg" alt="Acer logo" />
        <h3>Acer</h3>
        <p>Computing devices and digital technology solutions.</p>
      </article>

      <article class="partner-card">
        <img src="@/assets/img/huawei.jpg" alt="Huawei logo" />
        <h3>Huawei</h3>
        <p>Information and communications technology.</p>
      </article>
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
  padding: 22px;
  border: 1px solid #d4ddd2;
  border-radius: 6px;
  background: white;
  text-align: center;
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
