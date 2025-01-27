<script lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
    name: 'App',
    components: { Header, Footer },
};
</script>

<template>
  <div class="app-layout">
      <Header />
      <router-view />
      <Footer />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,700;1,400;1,600&display=swap');

.app-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
  padding: 0;
}

.content {
  flex: 1;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-family: 'Montserrat', sans-serif;
}
</style>
