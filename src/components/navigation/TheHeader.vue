<template>
  <div class="header">
    <div>
      <div v-if="!drawerIsOpen" class="open-button" @click="toggleDrawer">
        <font-awesome-icon class="menu-icon" icon="bars" />
      </div>
      <div v-else-if="drawerIsOpen">
        <TheNavDrawer :isOpen="drawerIsOpen" @close-drawer="closeDrawer" />
      </div>
    </div>
    <div><h1>Logo</h1></div>
    <div>Cart</div>
  </div>
</template>

<script setup>
import TheNavDrawer from "./TheNavDrawer.vue";
import { ref } from "vue";

const drawerIsOpen = ref(false);

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
  margin: 0px 40px;

  height: 100px;
}
</style>
