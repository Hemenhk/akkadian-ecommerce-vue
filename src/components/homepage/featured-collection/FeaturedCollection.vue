<template>
  <div class="collection-container">
    <h2>Featured Collection</h2>
    <div v-if="!isLoading" class="collection">
      <FeaturedProduct
        v-for="product in products"
        :key="product.productId"
        v-bind="product"
        :productId="product._id"
      />
    </div>
  </div>
</template>

<script setup>
import FeaturedProduct from "../../products/featured-product/FeaturedProduct.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

store.dispatch("allProducts/fetchAllProducts");

const products = computed(() =>
  store.state.allProducts.allProducts.filter((product, idx) => idx < 4)
);
const isLoading = computed(() => store.state.allProducts.isLoading);

</script>

<style scoped>
.collection-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
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
