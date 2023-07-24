<template>
  <div class="card-container">
    <img @click="itemNavHandler" class="image" :src="imageCover" />
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
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { isInCart } from "@/helpers";

const props = defineProps({
  productId: {
    type: String,
    required: true,
  },
});
const store = useStore();
const router = useRouter();

const product = store.state.allProducts.allProducts.find(
  (product) => product._id === props.productId
);
// const product = computed(() =>
//   store.state.allProducts.allProducts.find(
//     (product) => product._id === props.productId
//   )
// );

const { title, imageCover, price } = product;
const cartItems = computed(() => store.state.cart.cartItems);

const addItemHandler = () => {
  store.commit("cart/setAddProduct", product);
};

const increaseItemHandler = () => {
  store.commit("cart/setIncrease", product);
};

const itemNavHandler = () => router.push(`/${props.productId}`);
</script>

<style scoped>
.card-container {
  border-radius: 6px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
  padding: 20px;
}
.image {
  width: 200px;
  cursor: pointer;
}
.card-body {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-top: 2rem;
}
.product-title {
  font-family: "noto sans";
  font-weight: 400;
  font-size: .9rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  padding-bottom: .5rem;
}

.product-price {
  font-family: "inter";
  font-weight: 400;
  padding-bottom: 2rem;
}

.btn-container {
  display: flex;
  justify-content: center;
}

.btn-container button {
  width: 100%;
  font-family: "noto sans";
  font-size: .8rem;
  font-weight: 400;
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
