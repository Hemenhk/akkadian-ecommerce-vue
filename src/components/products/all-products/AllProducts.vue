<template>
  <div class="products-container">
    <h2 class="heading">Shop</h2>
    <div class="products">
      <FeaturedProduct
        v-for="product in products"
        :key="product.id"
        :productId="product.id"
      />
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import FeaturedProduct from "../featured-product/FeaturedProduct.vue";

const store = useStore();

const products = store.state.product.products;
</script>

<style scoped>
.products-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.heading {
  font-family: "noto sans";
  font-size: 2rem;
}

.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

}
</style>
