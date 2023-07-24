<template>
  <div>
    <TheHeader />
    <div class="wrapper">
      <div class="main-content"><RouterView /></div>
      <div class="footer"><TheFooter /></div>
    </div>
  </div>
</template>

<script setup>
import TheHeader from "../components/navigation/TheHeader.vue";
import TheFooter from "../components/footer/TheFooter.vue";
import { RouterView } from "vue-router";
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  background-color: #fafafa;
}

.main_content {
  display: flex;
  justify-content: center;
}
</style>
