<template>
    <header class="header">
      <nav class="navbar">
        <ul class="nav-list">
          <li class="nav-item">
            <router-link to="/">Accueil</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/competences">Compétences</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/experiences">Expériences</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/projets">Projets</router-link>
          </li>
            <li class="nav-item">
                <router-link to="/cv">Mon CV</router-link>
            </li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script setup>
  </script>
  
<style>
  .header {
    background-color: #0e1c52;
    color: #ede9e9;
    padding: 1rem 0;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 2rem;
  }
  
  .nav-item a {
    color: #ede9e9;
    text-decoration: none;
    font-size: 1.1rem;
    transition: color 0.3s ease;
  }
  
  .nav-item a:hover {
    color: #ede9e9;
  }
</style>  