<template>
    
        <Teleport to="#cart-drawer"
    ><div v-if="isOpen" class="cart-overlay" @click="closeDrawer"></div>
    <div class="cart-drawer-container" :class="{ 'cart-drawer-open': isOpen }">
      <div class="cart-drawer-body">
        <div class="header" @click="closeDrawer">
          <font-awesome-icon class="close-button" icon="xmark" />
        </div>
        <hr class="divider" />
        <div class="links-container"><NavLinks /></div>
      </div></div
  ></Teleport>
</template>

<script setup>
import { defineProps, defineEmits, toRef } from "vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});const isOpen = toRef(props, "isOpen");
const emit = defineEmits(["closeDrawer"]);

const closeDrawer = () => emit("closeDrawer");
</script>

<style scoped >
.cart-drawer-container {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  width: 500px;
  height: 100%;
  background-color: #fafafa;
}

.cart-drawer-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1.5rem;
}

.header {
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
  margin-right: 3rem;
  width: 100%;
}

.cart-drawer-open {
  animation: cartOpenDrawer 0.4s ease-out;
}
.drawer-close {
  right: 400px;
  animation: closeDrawer 0.4s ease-out;
}

.close-button {
  height: 25px;
  cursor: pointer;
}

.cart-overlay {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 1;

  background-position: left bottom;
}

@keyframes cartOpenDrawer {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
}

@keyframes closeDrawer {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(-300px);
  }
}
</style>