<template>
  <div class="cart-container">
    <button class="cart-icon">
      <div v-if="!drawerIsOpen" @click="toggleDrawer">
        <span class="material-symbols-outlined"> local_mall </span>
        <p v-if="itemCount > 0">{{ itemCount }}</p>
        <p v-else>0</p>
      </div>
      <div v-else-if="drawerIsOpen" @click="closeDrawer">
        <TheCartDrawer :isOpen="drawerIsOpen" @close-drawer="closeDrawer" />
      </div>
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import TheCartDrawer from "./cart-drawer/TheCartDrawer.vue";

localStorage.getItem("cart");

const store = useStore();

const itemCount = computed(() => store.state.cart.itemCount)

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
