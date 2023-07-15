<template>
  <div class="home-container">
    <div class="hero-banner">
      <TheHeroBanner />
    </div>
    <div>
      <PerksComponent />
    </div>
    <div class="collection-container">
      <FeaturedCollection />
    </div>
  </div>
</template>

<script setup>
import TheHeroBanner from "../components/homepage/hero/TheHero.vue";
import PerksComponent from "../components/homepage/perks/PerksComponent.vue";
import FeaturedCollection from "../components/homepage/featured-collection/FeaturedCollection.vue";
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hero-banner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("../assets/images/hero_image.jpg") center/cover no-repeat;
  height: 600px;
  margin: 20px;
}

.collection-container {
  display: flex;
  justify-content: center;
}
</style>
