<template>
  <div class="container">
    <div class="perks">
      <font-awesome-icon class="menu-icon" icon="truck-fast" />
      <h2>Fast Shipping</h2>
      <p>Our delivery times are 1-2 days in Sweden, and 4-6 abroad.</p>
    </div>
    <div class="perks">
      <font-awesome-icon class="menu-icon" icon="earth-americas" />
      <h2>International Market</h2>
      <p>We sell and deliver products abroad to EU, UK, USA and Canada.</p>
    </div>
    <div class="perks">
      <font-awesome-icon class="menu-icon" icon="leaf" />
      <h2>Natural Ingredients</h2>
      <p>All out products are made with the highest quality of ingredients.</p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 300px;
  margin: 20px 50px;
}

.perks {
  display: flex;
  flex-direction: column;
  width: 30%;
  text-align: center;
}

.perks h2 {
  font-size: 1.3rem;
  font-family: "noto sans";
  font-weight: 600;
  color: #343434;
  margin-bottom: 15px;
}

.perks p {
  font-family: "inter";
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.4rem;
  color: #666666;
  width: 90%;
}

.menu-icon {
  height: 50px;
  color: #cecece;
  transition: 0.5s ease-out;

  margin-bottom: 10px;
}

.menu-icon:hover {
  color: cadetblue;
}
</style>
