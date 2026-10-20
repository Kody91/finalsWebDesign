<template>
  <section class="faculty" id="faculty">
    <div class="heading">
      <p>Academically knowledgeable and here for you</p>
      <h1>Faculty and Staff Members</h1>
      <p>Meet the people who support learning and student success at the College of Computer Studies.</p>
    </div>

    <section class="group">
      <h2>Dean</h2>
      <div class="people">
        <article class="person">
          <img src="@/assets/img/dean.png" alt="Ma. Christina A. Quijano" />
          <div>
            <h3>Ma. Christina A. Quijano, MSCS</h3>
            <p>Dean</p>
          </div>
        </article>
      </div>
    </section>

    <section class="group">
      <h2>Department Head and Coordinators</h2>
      <div class="people">
        <article class="person">
          <img src="@/assets/img/rea.jpg" alt="Rea P. Balontong" />
          <div>
            <h3>Rea P. Balontong, MBA</h3>
            <p>Department Head (IT &amp; IS)</p>
          </div>
        </article>
        <article class="person">
          <img src="@/assets/img/marjee.jpg" alt="Marjee Rose B. Parreño" />
          <div>
            <h3>Marjee Rose B. Parreño, MSCS, MBA</h3>
            <p>Program Coordinator (BSCS, BSDMIA, and MSCS)</p>
          </div>
        </article>
        <article class="person">
          <img src="@/assets/img/ana.jpg" alt="Ana Mae B. Cantel" />
          <div>
            <h3>Ana Mae B. Cantel, MLIS</h3>
            <p>Program Coordinator (BLIS and MLIS)</p>
          </div>
        </article>
        <article class="person">
          <img src="@/assets/img/lennon.jpg" alt="Lennon D. Pajar" />
          <div>
            <h3>Lennon D. Pajar</h3>
            <p>Computer Laboratory Coordinator</p>
          </div>
        </article>
      </div>
    </section>

    <section class="group">
      <h2>Faculty</h2>
      <div class="people">
        <article class="person">
          <img src="@/assets/img/leo.jpg" alt="Leo Paulo B. Beldia" />
          <div>
            <h3>Leo Paulo B. Beldia</h3>
            <p>BSIT and BSIS Program</p>
          </div>
        </article>
        <article class="person">
          <img src="@/assets/img/pedro.jpg" alt="Pedro Peter Rhys B. Cambronero" />
          <div>
            <h3>Pedro Peter Rhys B. Cambronero, MSCS</h3>
            <p>BSCS Program</p>
          </div>
        </article>
        <article class="person">
          <img src="@/assets/img/lesley.jpg" alt="Lesley Joy L. Dignadice" />
          <div>
            <h3>Lesley Joy L. Dignadice, MBA</h3>
            <p>BSIT and BSIS Program</p>
          </div>
        </article>
        <article class="person">
          <img src="@/assets/img/rod.jpg" alt="Rodolfo C. Eregia" />
          <div>
            <h3>Rodolfo C. Eregia, Jr</h3>
            <p>BSIT and BSIS Program</p>
          </div>
        </article>
        <article class="person">
          <img src="@/assets/img/donie.jpg" alt="Donie S. Jardeleza" />
          <div>
            <h3>Donie S. Jardeleza, MSCS</h3>
            <p>BSIT and BSIS Program</p>
          </div>
        </article>
        <article class="person">
          <img src="@/assets/img/antonio.jpg" alt="Antonio M. Montaño" />
          <div>
            <h3>Antonio M. Montaño, Jr.</h3>
            <p>BSIT and BSIS Program</p>
          </div>
        </article>
        <article class="person">
          <img src="@/assets/img/rose.jpg" alt="Rose Leah Joy A. Ojacastro" />
          <div>
            <h3>Rose Leah Joy A. Ojacastro, MSCS</h3>
            <p>BSIT and BSIS Program</p>
          </div>
        </article>
        <article class="person">
          <img src="@/assets/img/sheila.jpg" alt="Ma. Sheila C. Sapul" />
          <div>
            <h3>Ma. Sheila C. Sapul, Ph. D.</h3>
            <p>BSCS Program</p>
          </div>
        </article>
      </div>
    </section>

    <section class="group">
      <h2>Staff</h2>
      <div class="people">
        <article class="person">
          <img src="@/assets/img/chrislyn.jpg" alt="Chrislyn C. Castaño" />
          <div>
            <h3>Chrislyn C. Castaño</h3>
            <p>Secretary</p>
          </div>
        </article>
        <article class="person">
          <img src="@/assets/img/latter.jpg" alt="A.M.P. Latter P. Taasan" />
          <div>
            <h3>A.M.P. Latter P. Taasan</h3>
            <p>Computer Laboratory Technician</p>
          </div>
        </article>
        <article class="person">
          <img src="@/assets/img/chriselda.jpg" alt="Chriselda Elaine Ador" />
          <div>
            <h3>Chriselda Elaine Ador</h3>
            <p>Guidance Counselor</p>
          </div>
        </article>
        <article class="person">
          <img src="@/assets/img/donna.png" alt="Donna May Rivera" />
          <div>
            <h3>Donna May Rivera</h3>
            <p>Library Liaison Officer</p>
          </div>
        </article>
      </div>
    </section>
  </section>
</template>

<style scoped>
.faculty {
  padding: 70px 8%;
  background: #f7f7f2;
}

.heading {
  max-width: 700px;
  margin: 0 auto 50px;
  text-align: center;
}

.heading > p:first-child {
  color: #638366;
  font-weight: bold;
  text-transform: uppercase;
}

.heading h1 {
  margin: 10px 0;
  color: #254a34;
  font-size: 36px;
}

.heading > p:last-child {
  line-height: 1.6;
}

.group {
  max-width: 1100px;
  margin: 0 auto 42px;
}

.group h2 {
  margin-bottom: 18px;
  color: #254a34;
  font-size: 26px;
}

.people {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.person {
  display: flex;
  min-height: 150px;
  align-items: center;
  gap: 18px;
  padding: 18px;
  border: 1px solid #dce3da;
  border-radius: 6px;
  background: white;
}

.person img {
  width: 100px;
  height: 115px;
  flex-shrink: 0;
  border-radius: 4px;
  object-fit: cover;
}

.person h3 {
  margin: 0 0 8px;
  color: #254a34;
  font-size: 18px;
}

.person p {
  margin: 0;
  line-height: 1.5;
}

@media (max-width: 700px) {
  .faculty {
    padding: 50px 20px;
  }

  .people {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 400px) {
  .person {
    align-items: flex-start;
    gap: 12px;
    padding: 14px;
  }

  .person img {
    width: 78px;
    height: 95px;
  }
}
</style>
