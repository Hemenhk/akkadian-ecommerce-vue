<template>
  <div class="container">
    <h2>Beard</h2>
    <div class="beard-products">
      <FeaturedProduct
        v-for="product in filteredProducts"
        :key="product.id"
        :productId="product.id"
      />
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import FeaturedProduct from "../../components/products/featured-product/FeaturedProduct.vue";

const store = useStore();

const products = store.state.product.products;
const filteredProducts = products.filter((product) =>
  product.category.includes("beard")
);
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.container h2 {
    font-family: "noto sans";
    margin: 3rem 0;
}

.beard-products {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
}
</style>
