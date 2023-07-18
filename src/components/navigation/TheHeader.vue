<template>
  <div class="header">
    <div class="drawer-icon">
      <div v-if="!drawerIsOpen" class="open-button" @click="toggleDrawer">
        <font-awesome-icon class="menu-icon" icon="bars" />
      </div>
      <div v-else-if="drawerIsOpen">
        <TheNavDrawer :isOpen="drawerIsOpen" @close-drawer="closeDrawer" />
      </div>
    </div>
    <div><img class="image" :src="header_logo" /></div>
    <div class="cart-container"><TheCartIcon /></div>
  </div>
</template>

<script setup>
import TheNavDrawer from "./TheNavDrawer.vue";
import TheCartIcon from ".././cart-icon/TheCartIcon.vue"
import logo from "../../assets/logo.png"
import { ref } from "vue";

const drawerIsOpen = ref(false);
const header_logo = ref(logo)

// const drawerIsOpen = computed(() => isOpen.value);
const toggleDrawer = () => {
  drawerIsOpen.value = true;
};

const closeDrawer = () => {
  drawerIsOpen.value = false;
};
</script>

<style scoped>
.header {
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
    margin-right: 40px;
}
.menu-icon {
  height: 25px;
  cursor: pointer;
}

</style>
