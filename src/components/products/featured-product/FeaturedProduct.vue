<template>
  <div class="card-container">
    <img class="image" :src="image" />
    <div class="card-body">
      <p class="product-title">{{ title }}</p>
      <p class="product-price">$ {{ price }}</p>
    </div>
    <div class="btn-container">
      <button v-if="!isInCart(product, cartItems)" @click="addItemHandler">
        ADD TO CART
      </button>
      <button v-else @click="increaseItemHandler">ADD MORE</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import { useStore,  } from "vuex";
import { isInCart } from "@/helpers";

const props = defineProps({
  productId: {
    type: Number,
    required: true,
  },
});
const store = useStore();
const product = store.state.product.products.find(
  (product) => product.id === props.productId
);
const { title, image, price } = product;
const cartItems = computed(() => store.state.cart.cartItems)



const addItemHandler = () => {
  store.commit("cart/setAddProduct", product)
};

const increaseItemHandler = () => {
  store.commit("cart/setIncrease", product)
};
</script>

<style scoped>
.card-container {
  border-radius: 6px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
  padding: 20px;
}
.image {
  width: 200px;
}
.card-body {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-top: 5px;
}
.product-title {
  font-family: "noto sans";
  font-weight: 500;
  font-size: 1.1rem;
}

.product-price {
  font-family: "inter";
  font-weight: 400;
}

.btn-container {
  display: flex;
  justify-content: center;
}

.btn-container button {
  width: 100%;
  font-family: "noto sans";
  font-family: "inter";
  font-size: 1rem;
  font-weight: 500;
  height: 45px;
  background: linear-gradient(to right, white 50%, black 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  color: #fff;
  border: 2px solid #000;
  border-radius: 2px;
  transition: all 0.5s ease-out;

  cursor: pointer;
}

.btn-container button:hover {
  background-position: left bottom;
  color: #000;
}
</style>
