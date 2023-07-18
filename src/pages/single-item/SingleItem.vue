<template>
  <div class="container">
    <div class="img-container"><img class="image" :src="image" /></div>
    <div class="product-container">
      <div class="info-container">
        <p class="title">{{ title }}</p>
        <p class="price">{{ price }}</p>
      </div>
      <div class="btn-container">
        <button v-if="!isInCart(products, cartItems)" @click="addItemHandler">
          ADD TO CART
        </button>
        <button v-else @click="increaseItemHandler">ADD MORE</button>
      </div>
      <div>{{ description }}</div>
    </div>
  </div>
</template>

<script setup>
import {computed} from "vue"
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { isInCart } from "../../helpers";

const store = useStore();
const route = useRoute();

const productId = route.params.productId;

const products = store.state.product.products.find(
  (p) => Number(p.id) === Number(productId)
);
const { title, image, price, description } = products;

const addItemHandler = () => store.commit("cart/setAddProduct", products);
const increaseItemHandler = () => store.commit("cart/setIncrease", products);
const cartItems = computed(() => store.state.cart.cartItems)
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.img-container {
  margin-left: 20px;
}
.image {
  width: 300px;
}

.product-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.info-container {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.title {
  font-family: "inter";
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.price {
  font-family: "inter";
}

.btn-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 90%;
}

.btn-container button {
  width: 100%;
  height: 50px;
  background: linear-gradient(to right, white 50%, black 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  color: #fff;
  border: 1px solid #000 !important;
  border-radius: 2px;
  transition: all 0.5s ease-out;
}

.btn-container button:hover {
  background-position: left bottom;
  color: #000;
}
</style>
