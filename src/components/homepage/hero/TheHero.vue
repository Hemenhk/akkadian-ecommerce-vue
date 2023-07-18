<template>
  <section class="container">
    <div class="hero-text">
      <h1>
        Nurture your beard and style your hair with the highest quaility
        ingredients.
      </h1>
      <p>
        Our products are made with natural ingredients and are always ethically
        sourced, so you can enjoy the benefits from all around the world
      </p>
    </div>
    <div>
      <RouterLink to="/shop">
        <button class="hero-button">View products</button></RouterLink
      >
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: 60px;
}

.hero-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 60%;
}
.hero-text h1 {
  font-size: 28px;
  line-height: 32px;

  color: #fff;
}

.hero-text p {
  font-size: 1rem;
  font-family: "inter";
  line-height: 1.4rem;
  color: #d4d4d4;
}

.hero-button {
  font-family: "inter";
  font-size: 1rem;
  font-weight: 500;
  height: 45px;
  width: 160px;
  background: linear-gradient(to right, transparent 50%, white 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  color: #000;
  border: 2px solid #fff;
  border-radius: 2px;
  transition: all 0.3s ease-out;

  cursor: pointer;
}

.hero-button:hover {
  background-position: left bottom;
  background-color: transparent;
  color: #fff;
}
</style>
