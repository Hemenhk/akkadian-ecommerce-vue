<template>
  <div class="collection-container">
    <h2>Featured Collection</h2>
    <div class="collection">
      <FeaturedProduct
        v-for="product in productItems"
        :key="product.productId"
        v-bind="product"
        :productId="product.id"
      />
    </div>
  </div>
</template>

<script setup>
import FeaturedProduct from "../../products/featured-product/FeaturedProduct.vue";
import { useStore } from "vuex";

const store = useStore();

const products = store.state.product.products;

const productItems = products
  .filter((product, idx) => idx < 4)
  .map((product) => ({
    ...product,
  }));
</script>

<style scoped>
.collection-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.collection-container h2 {
  font-family: "Noto sans";
}
.collection {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
