<template>
  <Teleport to="body"
    ><div v-if="isOpen" class="overlay" @click="closeDrawer"></div>
    <div class="drawer-container" :class="isOpen ? 'drawer-open' : 'drawer-closed'">
      <div class="drawer-body">
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
import NavLinks from "../navlinks/NavLinks.vue";
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});

const isOpen = toRef(props, "isOpen");
const emit = defineEmits(["closeDrawer"]);

const closeDrawer = () => emit("closeDrawer");
</script>

<style >
.drawer-container {
  position: absolute;
  top: 0;
  z-index: 100;
  width: 300px;
  height: 100%;
  background-color: #fafafa;
}

.drawer-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1.5rem;
}

.header {
  display: flex;
  justify-content: flex-end;
  padding-top: 2rem;
  padding-right: 3rem;
  width: 100%;
}

.links-container {
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-top: 2rem;
}

.drawer-open {
  left: 0px;
  animation: openDrawer 0.4s ease-out;
}
.drawer-closed {
  animation: closeDrawer 0.4s ease-out;
}

.close-button {
  height: 25px;
  cursor: pointer;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 1;

  background-position: right bottom;
  
}

@keyframes openDrawer {
  from {
    transform: translateX(-300px);
  }
  to {
    transform: translateX(0px);
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
