<template>
  <div>
    <TheHeader />
    <div class="main-content"><RouterView /></div>

    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from "../components/navigation/TheHeader.vue";
import TheFooter from "../components/footer/TheFooter.vue";
</script>

<style scoped>
.main_content {
  display: flex;
  justify-content: center;
  min-height: 80vh;
}
</style>
