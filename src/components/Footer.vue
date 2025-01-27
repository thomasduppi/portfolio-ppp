<template>
    <footer class="footer">
      <div class="footer-content">
        <ul class="footer-list">
          <li class="footer-item">
            <a href="https://www.linkedin.com/in/thomas-duppi/" target="_blank" rel="noopener noreferrer"><font-awesome-icon :icon="['fab', 'linkedin']" />LinkedIn</a>
          </li>

          <li class="footer-item">
            <a href="https://github.com/thomasduppi" target="_blank" rel="noopener noreferrer"><font-awesome-icon :icon="['fab', 'github']" />GitHub</a>
          </li>

          <li class="footer-item">
            <a href="mailto:thomasduppi@gmail.com"><font-awesome-icon :icon="['fas', 'envelope']" />thomasduppi@gmail.com</a>
          </li>

          <li class="footer-item">
            <a><font-awesome-icon :icon="['fas', 'phone']" />06 51 13 91 68</a>
          </li>
        </ul>
      </div>
    </footer>
  </template>
  
<script lang="ts">
  export default {
      name: 'Footer',
  };
</script>
  
<style>
  .footer {
    background-color: #0e1c52;
    color: #ede9e9;
    padding: 1rem 0;
    text-align: center;
  }
  
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .footer-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
  
  .footer-item a {
    color: #ede9e9;
    text-decoration: none;
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.3s ease;
  }
  
  .footer-item a:hover {
    color: #ede9e9;
  }
  </style>
  
