<template>
  <div class="main-header">
    <div class="drawer-icon">
      <div>
        <font-awesome-icon
          @click="toggleDrawer"
          class="menu-icon"
          icon="bars"
        />
      </div>
      <div v-if="drawerIsOpen">
        <TheNavDrawer :isOpen="drawerIsOpen" @close-drawer="closeDrawer" />
      </div>
    </div>
    <div>
      <RouterLink to="/"><img class="image" :src="header_logo" /></RouterLink>
    </div>
    <div class="cart-container"><TheCartIcon /></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import TheNavDrawer from "./TheNavDrawer.vue";
import TheCartIcon from ".././cart-icon/TheCartIcon.vue";
import logo from "../../assets/logo.png";

const drawerIsOpen = ref(false);
const header_logo = ref(logo);

const toggleDrawer = () => {
  drawerIsOpen.value = true;
};

const closeDrawer = () => {
  drawerIsOpen.value = false;
};
</script>

<style scoped>
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(230, 230, 230);
}

.image {
  width: 300px;
  cursor: pointer;
}

.drawer-icon {
  margin-left: 40px;
}

.cart-container {
  margin-right: 20px;
}
.menu-icon {
  height: 25px;
  cursor: pointer;
}

@media (max-width: 600px) {
  .image {
    width: 250px;
  }
}

@media (max-width: 460px) {
  .image {
    width: 200px;
  }
}

@media (max-width: 390px) {
  .image {
    width: 150px;
  }
}
</style>
