<template>
  <div class="cart-container">
    <button class="cart-icon">
      <div v-if="!drawerIsOpen" @click="toggleDrawer">
        <span class="material-symbols-outlined"> local_mall </span
        ><span>1</span>
      </div>
      <div v-else-if="drawerIsOpen" @click="closeDrawer">
        <TheDrawer :isOpen="drawerIsOpen" @close-drawer="closeDrawer" />
      </div>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TheDrawer from "./cart-drawer/TheDrawer.vue"

const drawerIsOpen = ref(false);

const toggleDrawer = () => (drawerIsOpen.value = true);
const closeDrawer = () => (drawerIsOpen.value = false);
</script>

<style scoped>
.cart-icon {
  width: 65px;
  height: 40px;
  border: 1px solid black;
  border-radius: 30px;
  background-color: #000;
  background: linear-gradient(to right, white 50%, black 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;

  color: #fff;
  cursor: pointer;
}

.cart-icon:hover {
  background-position: left bottom;

  color: #000;
}

.cart-icon div {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
</style>
