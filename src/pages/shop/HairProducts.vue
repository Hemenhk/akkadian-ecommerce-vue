<template>
  <div class="container">
    <h2>Hair</h2>
    <div class="hair-products">
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

const products = store.state.allProducts.allProducts;
const filteredProducts = products.filter((product) =>
  product.categories.includes("hair")
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
  margin: 3rem 0 !important;
}

.hair-products {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
