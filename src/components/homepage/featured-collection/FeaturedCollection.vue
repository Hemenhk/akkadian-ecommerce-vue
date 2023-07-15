<template>
  <div class="collection-container">
    <h2>Featured Collection</h2>
    <FeaturedProduct
      v-for="product in productItems"
      :key="product.productId"
      v-bind="product"
      class="collection"
    />
  </div>
</template>

<script setup>
import FeaturedProduct from "../../products/featured-product/FeaturedProduct.vue";
import { products } from "../../../products";

const productItems = products
  .filter((product, idx) => idx < 1)
  .map((product) => ({
    productId: product.id,
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
  gap: 4px;
}
</style>
