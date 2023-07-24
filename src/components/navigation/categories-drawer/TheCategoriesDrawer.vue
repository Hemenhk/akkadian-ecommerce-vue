<template>
  <div class="container">
    <li @click="openDrawerHandler" class="parent-link">
      <div class="categories-li">Categories</div>
      <font-awesome-icon
        icon="chevron-up"
        :class="`${'chevron'} ${isOpen ? 'chevron-down' : 'chevron-up '}`"
      />
    </li>
    <ul
      :class="`${'nested-drawer'} ${
        isOpen ? 'nested-drawer-open' : 'nested-drawer-closed'
      }`"
    >
      <li><RouterLink to="/beard">Beard</RouterLink></li>
      <li><RouterLink to="/hair">Hair</RouterLink></li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const isOpen = ref(false);

const openDrawerHandler = () => (isOpen.value = !isOpen.value);
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.parent-link {
  display: flex;
  align-items: center;
  gap: 1rem;

  font-family: "noto sans";
  font-weight: 400;
  font-size: 0.9rem;
  text-decoration: none;
  text-transform: uppercase;

  cursor: pointer;
}

.categories-li {
  display: flex;
  align-items: center;
  gap: 3px;
}

.chevron {
  width: 12px;
}

.chevron-up {
  transform: rotate(180deg);
  transition: 0.2s linear;
}

.chevron-down {
  transition: 0.2s linear;
}

.nested-drawer {
  overflow: hidden;
  max-height: 0;
  animation: 0.3s ease-out forwards;
}

.nested-drawer-open {
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding-left: 20px !important;
  padding: 20px 0;

  animation-name: slideDown;
}

.nested-drawer li {
  width: 50%;

  list-style: none;
  padding-bottom: 0.9rem;
  border-bottom: 1px solid #dbdbdb;
}

.nested-drawer li a {
  color: #282828 !important;

  list-style: none;
  font-family: "noto sans";
  font-weight: 400;
  font-size: 0.8rem;
  text-decoration: none;
  text-transform: uppercase;
}

.nested-drawer-closed {
  animation-name: slideUp;
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding-left: 20px !important;
  padding: 20px 0;
}

@keyframes slideDown {
  0% {
    max-height: 0;
    opacity: 0;
  }
  100% {
    max-height: 200px;
    opacity: 1;
  }
}
@keyframes slideUp {
  0% {
    max-height: 200px;
    opacity: 1;
  }
  100% {
    display: none;
    padding: 0 0;
    max-height: 0;
    opacity: 0;
  }
}
</style>
