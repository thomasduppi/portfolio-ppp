<template>
  <div class="container">
    <h1>Bienvenu sur mon site portfolio</h1>
    <img class="img-home" src="@/assets/pp.jpg" alt="">
    <p class="text name">Thomas Duppi</p>
    <p class="text">alternant en 3ème année</p>
  </div>
</template>

<script>


 
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
}

h1 {
  color: #0e1c52;
  margin-bottom: 1rem;
  margin-top: 1rem;
  font-size: 3rem;
}

.img-home {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #0e1c52;
  margin-bottom: 1rem;
}

.text {
  font-size: 1.5rem;
  color: #0e1c52;
  margin: 5px;
}

.name {
  font-size: 2rem;
  font-weight: bold;
  color: #0e1c52;
}
</style>

