<template>
  <div class="hero-container">
    <div class="text-content">
      <h1>
        <p class="hello">Hello, I am <span class="highlight">Omar Ahorrar</span></p>
        <br />Cloud & DevOps Engineering Student.<br />
        <p class="deventh">Web Development Enthusiast.</p>
      </h1>
      <div class="buttons">
        <a href="#about" class="aboutme-btn">About me</a>
        <a href="/CV_Omar_AHORRAR.pdf" download class="cv-btn">Download CV &#8594;</a>
      </div>
    </div>
    <img src="../assets/me.png" class="profile-pic" />
  </div>
</template>

<style scoped>
.hero-container {
  display: flex;
  align-items: flex-start;
  padding: 1.5rem 5% 0 5%;
  justify-content: space-between;
  padding: 3rem 5%;
}

.deventh {
  margin-top: 5px;
}

.profile-pic {
  width: 450px;
  height: 450px;
  object-fit: cover;
  border-radius: 50%;
  margin-left: 2rem;
  margin-right: -12rem;
  transition: box-shadow 0.4s ease, transform 0.4s ease;
}

.profile-pic:hover {
  transform: scale(1.05);
}

.text-content {
  font-size: 30px;
  margin-top: 2rem;
  margin-left: -11rem;
}

.highlight {
  color: #D53F41;
  text-shadow: 0 0 10px #D53F41, 0 0 20px #D53F41;
  animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    text-shadow: 0 0 5px #D53F41;
  }
  to {
    text-shadow: 0 0 20px #D53F41;
  }
}

.hello {
  margin-bottom: -10px;
}

.buttons {
  margin-top: 60px;
  display: flex;
  gap: 50px;
}

/* Media Queries for HeroSection */
@media (max-width: 1024px) {
  .hero-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .text-content {
    margin: 2rem 0;
    font-size: 24px;
    margin-left: 0;
    margin-top: 100px;
  }

  .profile-pic {
    width: 300px;
    height: 300px;
    margin: 2rem 0 0 0;
  }

  .buttons {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .hero-container {
    padding: 8rem 1rem;
  }

  .text-content {
    font-size: 20px;
    margin: 1rem 0;
  }

  .profile-pic {
    width: 250px;
    height: 250px;
    margin: 1.5rem auto;
  }

  .buttons {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>