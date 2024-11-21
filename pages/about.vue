<!-- pages/about.vue -->
<template>
    <div class="about-container">
      <header>
        <h1>About Us</h1>
      </header>
  
      <main>
        <section class="about-content">
          <h2>Who We Are</h2>
          <p>We are a passionate team working with Nuxt.js to build awesome web apps!</p>
          <nuxt-link to="/" class="btn-back">Back to Home</nuxt-link>
        </section>
      </main>
  
      <footer>
        <p>&copy; 2024 My Nuxt App</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutPage',
  }
  </script>
  
  <style scoped>
  /* About Page Styles */
  .about-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #e9f5e9;
  }
  
  header {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 20px 0;
  }
  
  header h1 {
    font-size: 2rem;
  }
  
  main {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
  }
  
  .about-content {
    text-align: center;
    max-width: 600px;
  }
  
  .about-content h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .about-content p {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }
  
  .about-content .btn-back {
    background-color: #4CAF50;
    color: white;
    padding: 12px 24px;
    font-size: 1rem;
    text-decoration: none;
    border-radius: 5px;
  }
  
  .about-content .btn-back:hover {
    background-color: #45a049;
  }
  
  footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 15px;
  }
  </style>
  