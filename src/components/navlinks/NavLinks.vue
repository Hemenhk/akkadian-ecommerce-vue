<template>
  <div class="nav-container">
    <ul class="nav">
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/shop">Shop</RouterLink></li>
      <li><TheCategoriesDrawer /></li>

      <li><a href="#">About</a></li>
    </ul>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import TheCategoriesDrawer from "../navigation/categories-drawer/TheCategoriesDrawer.vue";
</script>

<style scoped>
.nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3rem;

  list-style: none;
}

.nav li {
  width: 200px;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e2e8f0;
}

.nav li a {
  font-family: "noto sans";
  font-size: 0.9rem;
  color: #000;
  text-decoration: none;
  text-transform: uppercase;
}
</style>
