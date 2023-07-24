<template>
  <div class="products-container">
    <h2 class="heading">Shop</h2>
    <div v-if="!isLoading" class="products">
      <FeaturedProduct
        v-for="product in products"
        v-bind="product"
        :key="product._id"
        :productId="product._id"
      />
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import FeaturedProduct from "../featured-product/FeaturedProduct.vue";

const store = useStore();
store.dispatch("allProducts/fetchAllProducts");

const products = computed(() => store.state.allProducts.allProducts);
const isLoading = computed(() => store.state.allProducts.isLoading);

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
  margin: 3rem 0 !important;

}

.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}
</style>
