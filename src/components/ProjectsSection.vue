<template>
  <section id="projects" class="projects-section">
    <h2 class="section-title">My Projects</h2>

    <div class="projects-grid">
      <div class="project-card">
        <h3>Adaptive Treadmill</h3>
        <p class="project-description">Developed an adaptive treadmill system using Arduino and PPG sensors for real-time data acquisition. Implemented data processing and analysis using PySerial, Python, and scikit-learn for intelligent adaptation.</p>
        <p class="project-tech"><strong>Technologies:</strong> Arduino, PPG Sensors, PySerial, Python, scikit-learn</p>
      </div>

      <div class="project-card">
        <h3>Amazon Clone</h3>
        <p class="project-description">A front-end clone of the Amazon e-commerce website, meticulously crafted to replicate its user interface and core functionalities using modern web technologies.</p>
        <p class="project-tech"><strong>Technologies:</strong> HTML, CSS, JavaScript</p>
      </div>

      <div class="project-card">
        <h3>EasyCharge Mobile App</h3>
        <p class="project-description">Designed and prototyped "EasyCharge" a mobile application for electric vehicle (EV) charger management, reservation, and prediction. The project involved UI/UX design in Figma and predictive modeling with scikit-learn.</p>
        <p class="project-tech"><strong>Technologies:</strong> Figma, scikit-learn</p>
      </div>

      <div class="project-card">
        <h3>IneEvents (Full-Stack)</h3>
        <p class="project-description">Built "IneEvents" a full-stack web application designed for managing engineering events. Features include event creation, registration, and user management, powered by a robust backend and dynamic frontend.</p>
        <p class="project-tech"><strong>Technologies:</strong> Vue.js, Express.js, PostgreSQL</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  /* Override global 'section' flex behavior for this specific section */
  display: flex; /* Keep display flex for overall section behavior */
  flex-direction: column; /* Stack children (title and grid) vertically */
  align-items: center; /* Center children horizontally */
  justify-content: flex-start; /* Align content to the top within the section */

  /* Specific styles for projects-section that complement global section style */
  background-color: #000000; /* Dark background */
  color: #ffffff; /* White text */
  padding: 4rem 2rem; /* Adjusted padding */
  /* min-height: 100vh; - This is already globally defined for 'section', no need to repeat unless you want to override */
}

/* The .section-title itself is centered because its parent (.projects-section) has align-items: center */

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive grid */
  gap: 2.5rem; /* Spacing between cards */
  max-width: 1200px;
  width: 100%; /* Ensure it fills available width in flex column */
  margin-top: 2rem; /* Space from title */
  margin-left: auto; /* For centering grid itself if max-width is hit */
  margin-right: auto; /* For centering grid itself if max-width is hit */
}

.project-card {
  background-color: #0f0f0f; /* Dark card background */
  border-radius: 15px; /* Rounded corners for cards */
  padding: 2rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4); /* Deeper shadow for cards */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.project-card:hover {
  transform: translateY(-10px); /* Lift effect on hover */
  box-shadow: 0 12px 24px rgba(213, 63, 65, 0.3); /* Glow effect on hover */
}

.project-card h3 {
  font-size: 28px;
  color: #D53F41; /* Highlight color for titles */
  margin-bottom: 1rem;
  font-weight: 600;
}

.project-description {
  font-size: 18px;
  line-height: 1.6;
  color: #ccc; /* Slightly lighter text for descriptions */
  margin-bottom: 1.5rem;
  flex-grow: 1; /* Allows description to take available space */
}

.project-tech {
  font-size: 16px;
  color: #D53F41; /* Highlight color for technologies */
  font-weight: 500;
  margin-top: auto; /* Pushes technologies to the bottom */
}

.project-tech strong {
  color: #ffffff; /* Make "Technologies:" part white */
}

/* Media Queries for ProjectsSection */
@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  .project-card h3 {
    font-size: 24px;
  }

  .project-description {
    font-size: 16px;
  }

  .project-tech {
    font-size: 14px;
  }
}

@media (max-width: 768px) {
  .projects-section {
    padding: 3rem 1rem;
  }

  .projects-grid {
    grid-template-columns: 1fr; /* Single column on smaller phones */
    gap: 1.5rem;
  }

  .project-card {
    padding: 1.5rem;
  }

  .project-card h3 {
    font-size: 22px;
  }

  .project-description {
    font-size: 15px;
  }

  .project-tech {
    font-size: 13px;
  }
}
</style>