<template>
  <div class="about-section" id="about">
    <h2 class="section-title">About Me</h2>

    <div class="about-content">

      <div class="about-text">
        <p>
          I'm <strong>Omar Ahorrar</strong>, a dedicated Cloud & DevOps Engineering student with a strong passion for web development.
          I love learning new technologies, building real-world projects, and solving problems that create value.
        </p>
        <p>
          I'm currently focused on full-stack web development and Cloud/DevOps concepts.
        </p>
        <blockquote class="motto">"Turning complexity into simplicity through code."</blockquote>


        <h3>🎓 Education Journey</h3>
        <ul class="timeline">
          <li>
            <strong>2025:</strong> Participated in national-level hackathons, showcasing innovative solutions; completed a full-stack development internship, gaining hands-on experience in building scalable web applications.
          </li>
          <li>
            <strong>2024:</strong> Began engineering studies in Cloud & IoT Systems at INPT in Rabat, focusing on distributed systems, cloud architecture, and IoT integration.
          </li>
          <li>
            <strong>2023:</strong> Completed two intensive years of Classes Préparatoires, developing a strong analytical mindset and deep foundations in mathematics, physics, and problem-solving.
          </li>
          <li>
            <strong>2022:</strong> Earned a Baccalaureate in Mathematical Sciences with honors, marking the beginning of a technical and academic journey in STEM fields.
          </li>
        </ul>


        <h3 class="skills-title">⚙️ Skills</h3>
        <ul class="skills">
          <li><strong>Frontend:</strong> HTML, CSS, TailwindCSS, JavaScript, Vue.js</li>
          <li><strong>Backend:</strong> Node.js, Express, Laravel, MySQL, PostgreSQL</li>
          <li><strong>Programming Languages:</strong> Python, C, C++, JavaScript, PHP</li>
          <li><strong>Concepts:</strong> Object-Oriented Programming (OOP), Networking, UML</li>
          <li><strong>Tools & Platforms:</strong> Git, GitHub, Docker</li>
          <li><strong>Operating Systems:</strong> Linux (Ubuntu, Kali), Windows</li>
          <li><strong>Hardware & Embedded:</strong> Arduino, ESP32</li>
        </ul>

      </div>
    </div>
  </div>
</template>

<style scoped>
.about-section {
  background-color: #000000;
  color: #ffffff;
  text-align: center;
  margin-top: 50px;
}

.about-content {
  margin: 0 auto;
  text-align: left;
  padding: 0 20px;
}

.about-text p {
  font-size: 25px;
  line-height: 1.8;
  margin-bottom: 20px;
}

.about-text strong {
  color: #D53F41;
}

.motto {
  font-style: italic;
  color: #D53F41;
  margin-top: 50px;
  margin-bottom: 90px;
  font-size: 24px;
  border-left: 4px solid #D53F41;
  padding-left: 15px;
}

h3 {
  font-size: 32px;
  color: #ffffff;
  margin-top: 30px;
  margin-bottom: 15px;
}

.timeline,
.skills {
  list-style: none;
  padding-left: 0;
}

.skills-title {
  margin-top: 80px;
}

.timeline li,
.skills li {
  font-size: 22px;
  margin-bottom: 26px;
  padding-left: 1.2em;
  position: relative;
}

.timeline li::before,
.skills li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #D53F41;
  font-size: 1.2em;
  line-height: 1;
}

/* Media Queries for AboutSection */
@media (max-width: 1024px) {
  .about-text p {
    font-size: 20px;
  }
}

@media (max-width: 768px) {
  .about-section {
    padding: 1rem;
  }

  .about-text p {
    font-size: 18px;
  }

  h3 {
    font-size: 24px;
  }

  .timeline li,
  .skills li {
    font-size: 18px;
  }

  .motto {
    font-size: 18px;
    margin-bottom: 40px;
  }
}
</style>