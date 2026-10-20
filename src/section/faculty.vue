<template>
  <section class="faculty" id="faculty">
    <div class="container">
      <div class="title">
        <p>Academically Knowledgeable and Here For You</p>
        <h1>Faculty and Staff Members</h1>
      </div>
      <h1>Dean</h1>
      <div class="dean">
        <div class="person">
          <img src="@/assets/img/dean.png" alt="dean" />
          <div class="persontext">
            <h2>Ma. Christina A. Quijano, MSCS</h2>
            <p>Dean</p>
          </div>
        </div>
      </div>
      <h1>Department Head and Coordinators</h1>
      <div class="department-head">
        <div class="person">
          <img src="@/assets/img/rea.jpg" alt="rea" />
          <div class="persontext">
            <h2>Rea P. Balontong, MBA</h2>
            <p>Department Head (IT & IS)</p>
          </div>
        </div>
        <div class="person">
          <img src="@/assets/img/marjee.jpg" alt="marjee" />
          <div class="persontext">
            <h2>Marjee Rose B. Parreño, MSCS, MBA</h2>
            <p>Program coordinator (BSCS, BSDMIA, and MSCS)</p>
          </div>
        </div>
        <div class="person">
          <img src="@/assets/img/ana.jpg" alt="ana" />
          <div class="persontext">
            <h2>Ana Mae B. Cantel. MLIS</h2>
            <p>Program Coordinator (BLIS and MLIS)</p>
          </div>
        </div>
        <div class="person">
          <img src="@/assets/img/lennon.jpg" alt="lennon" />
          <div class="persontext">
            <h2>Lennon D. Pajar</h2>
            <p>Computer Laboratory Coordinator</p>
          </div>
        </div>
      </div>
      <h1>Faculty</h1>
      <div class="faculty">
        <div class="person">
          <img src="@/assets/img/leo.jpg" alt="leo" />
          <div class="persontext">
            <h2>Leo Paulo B. Beldia</h2>
            <p>BSIT and BSIS Program</p>
          </div>
        </div>
        <div class="person">
          <img src="@/assets/img/pedro.jpg" alt="pedro" />
          <div class="persontext">
            <h2>Pedro Peter Rhys B. Cambronero, MSCS</h2>
            <p>BSCS Program</p>
          </div>
        </div>
        <div class="person">
          <img src="@/assets/img/lesley.jpg" alt="lesley" />
          <div class="persontext">
            <h2>Lesley Joy L. Dignadice, MBA</h2>
            <p>BSIT and BSIS Program</p>
          </div>
        </div>
        <div class="person">
          <img src="@/assets/img/rod.jpg" alt="rod" />
          <div class="persontext">
            <h2>Rodolfo C. Eregia, Jr</h2>
            <p>BSIT and BSIS Program</p>
          </div>
        </div>
        <div class="person">
          <img src="@/assets/img/donie.jpg" alt="donie" />
          <div class="persontext">
            <h2>Donie S. Jardeleza, MSCS</h2>
            <p>BSIT and BSIS Program</p>
          </div>
        </div>
        <div class="person">
          <img src="@/assets/img/antonio.jpg" alt="antonio" />
          <div class="persontext">
            <h2>Antonio M. Montaño, Jr.</h2>
            <p>BSIT and BSIS Program</p>
          </div>
        </div>
        <div class="person">
          <img src="@/assets/img/rose.jpg" alt="rose" />
          <div class="persontext">
            <h2>Rose Leah Joy A. Ojacastro, MSCS</h2>
            <p>BSIT and BSIS Program</p>
          </div>
        </div>
        <div class="person">
          <img src="@/assets/img/sheila.jpg" alt="sheila" />
          <div class="persontext">
            <h2>Ma. Sheila C. Sapul, Ph. D.</h2>
            <p>BSCS Program</p>
          </div>
        </div>
      </div>
      <h1>Staff</h1>
      <div class="staff">
        <div class="person">
          <img src="@/assets/img/chrislyn.jpg" alt="chrislyn" />
          <div class="persontext">
            <h2>Chrislyn C. Castaño</h2>
            <p>Secretary</p>
          </div>
        </div>
        <div class="person">
          <img src="@/assets/img/latter.jpg" alt="latter" />
          <div class="persontext">
            <h2>A.M.P. Latter P. Taasan</h2>
            <p>Computer Laboratory Technician</p>
          </div>
        </div>
        <div class="person">
          <img src="@/assets/img/chriselda.jpg" alt="chriselda" />
          <div class="persontext">
            <h2>Chriselda Elaine Ador</h2>
            <p>Guidance Counselor</p>
          </div>
        </div>
        <div class="person">
          <img src="@/assets/img/donna.png" alt="donna" />
          <div class="persontext">
            <h2>Donna May Rivera</h2>
            <p>Library Liaison Officer</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faculty {
  max-width: 100vw;
  min-height: 100vh;
  scroll-margin-top: 100px;
  font-family: Arial, Helvetica, sans-serif;
  align-items: midleft;


 
}
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
 

  .person {
    display: flex;
    padding-right: 20px;
  
  }

  .persontext{
    padding-left:10px;
    font-size: 17px;
    font-family: Arial, Helvetica, sans-serif;
  }
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 25px;
  }

  .dean {
    display: flex;
    flex-direction: column;
    font-size: 25px;
    padding-bottom: 5%;
  }
  .department-head {
    display: grid;
    grid-template-columns: 1fr 1fr;
    line-height: 60px;
    font-size: 20px;
    padding-bottom: 5%;
    gap: 5px;
  }
  .faculty {
    display: grid;
    grid-template-columns: 1fr 1fr;
    line-height: 60px;
    font-size: 20px;
    padding-bottom: 5%;
    gap: 5px;
  }
  .staff {
    display: grid;
    grid-template-columns: 1fr 1fr;
    line-height: 60px;
    font-size: 20px;
    gap: 5px;
  }
}
h1 {
  color: rgb(16, 0, 165);
  padding-bottom: 10px;
}
img {
  width: 170px;
  height: 220px;
}
@media (max-width: 768px) {
  .faculty {
    height: 100%;
    flex-direction: column;
  }
  .container {
    height: 100%;
    flex-direction: column;
  }
  .dean {
    width: 100%;
    min-height: 25vh;
    font-size: smaller;
  }
  .department-head {
    width: 100%;
    min-height: 25vh;
  }
  .faculty {
    width: 100%;
    min-height: 25vh;
  }
  .staff {
    width: 100%;
    min-height: 25vh;
  }
}
</style>
