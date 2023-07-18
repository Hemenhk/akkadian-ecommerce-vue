<template>
  <div>
    <TheCartItem
      v-for="item in cartItems"
      v-bind="item"
      :key="item.id"
      :quantity="item.quantity"
      :product="{ ...item }"
      :productId="item.id"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import TheCartItem from "./TheCartItem.vue";

const store = useStore();
const cartItems = computed(() => store.state.cart.cartItems);
</script>

<style scoped></style>
