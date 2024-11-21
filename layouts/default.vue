<template>
    <div class="layout-container">
      <header class="header">
        <div class="logo">
          <h1>My Nuxt App</h1>
        </div>
        <nav class="navigation">
          <nuxt-link to="/" class="nav-link">Home</nuxt-link>
          <nuxt-link to="/about" class="nav-link">About</nuxt-link>
        </nav>
      </header>
  
      <main class="main-content">
        <nuxt />
      </main>
  
      <footer class="footer">
        <p>&copy; 2024 My Nuxt App | All Rights Reserved</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DefaultLayout',
  }
  </script>
  
  <style scoped>
  /* Reset Styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f9f9f9;
    color: #333;
    line-height: 1.6;
  }
  
  /* Layout Container */
  .layout-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  /* Header Styles */
  .header {
    background-color: #333;
    color: white;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .header .logo h1 {
    font-size: 1.8rem;
    margin: 0;
  }
  
  .navigation {
    display: flex;
    gap: 20px;
  }
  
  .navigation .nav-link {
    color: white;
    text-decoration: none;
    font-size: 1rem;
  }
  
  .navigation .nav-link:hover {
    text-decoration: underline;
  }
  
  /* Main Content Styles */
  .main-content {
    flex: 1;
    padding: 40px 20px;
    background-color: #ffffff;
  }
  
  /* Footer Styles */
  .footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 15px;
    font-size: 0.9rem;
  }
  </style>
  