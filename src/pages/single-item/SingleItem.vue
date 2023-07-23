<template>
  <div v-if="!isLoading" class="container">
    <div class="img-container">
      <img class="image" :src="product.imageCover" />
    </div>
    <div class="product-container">
      <div class="info-container">
        <p class="title">{{ product.title }}</p>
        <p class="price">$ {{ product.price }}</p>
      </div>
      <div>
        <p>Quantity:</p>
        <div class="quantity-container">
          <font-awesome-icon
            icon="minus"
            @click="decreaseQuantityHandler"
            class="decrease"
          />
          <p class="quantity">{{ quantity }}</p>
          <font-awesome-icon
            icon="plus"
            @click="increaseQuantityHandler"
            class="increase"
          />
        </div>
      </div>
      <div class="btn-container">
        <button v-if="!isInCart(product, cartItems)" @click="addItemHandler">
          ADD TO CART
        </button>
        <button v-else @click="addMoreItemsHandler">ADD MORE</button>
      </div>
      <div>
        <TheProductTabs
          :description="product.description"
          :ingredients="product.ingredients"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { isInCart } from "../../helpers";
import TheProductTabs from "../../components/products/single-item/tabs/TheProductTabs.vue";

const store = useStore();
const route = useRoute();
const quantity = ref(1);

const productId = route.params.productId;
const cartItems = computed(() => store.state.cart.cartItems);

store.dispatch("product/fetchSingleProduct", productId);

const product = computed(() => store.state.product.product);
const isLoading = computed(() => store.state.product.isLoading);

// const addItemHandler = () => store.commit("cart/setAddProduct", product.value);

const addItemHandler = () => {
  const itemToAdd = { ...product.value, quantity: quantity.value };
  store.commit("cart/setAddProduct", itemToAdd);
  quantity.value = 1;
};

const addMoreItemsHandler = () => {
  const itemToAdd = { ...product.value, quantity: quantity.value };
  store.commit("cart/setAmountIncrease", itemToAdd);
  quantity.value = 1;
};

const increaseQuantityHandler = () => {
  quantity.value = quantity.value + 1;
};

const decreaseQuantityHandler = () => {
  if (quantity.value > 1) quantity.value = quantity.value - 1;
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  height: 60vh;
  margin: 2rem;
}

.img-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 20px;

  width: 50%;
}
.image {
  width: 300px;
}

.product-container {
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 50%;
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

.quantity-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  border: 1px solid #dbdbdb;
  border-radius: 2px;
  padding: 2px 20px;
  width: 75px;
  height: 40px;
}

.decrease,
.increase {
  cursor: pointer;
}

.btn-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 90%;
}

.btn-container button {
  width: 200px;
  height: 50px;
  background: linear-gradient(to right, white 50%, black 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  color: #fff;
  border: 1px solid #000 !important;
  border-radius: 2px;
  transition: all 0.5s ease-out;

  cursor: pointer;
}

.btn-container button:hover {
  background-position: left bottom;
  color: #000;
}

.description {
  margin-top: 1rem;
  width: 100%;

  font-family: "noto sans";
  font-size: 0.9rem;
  line-height: 1.4rem;
}

@media (max-width: 600px) {
  .container {
    flex-direction: column;
    height: 72vh;
    margin-top: 4rem;
  }

  .container * {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    margin-left: 0px !important;
  }

  .image {
    width: 400px;
  }

  .product-container {
    width: 100%;
  }

  .title {
    font-size: 2rem;
  }

  .price {
    font-size: 1.9rem;
  }

  .btn-container * {
    height: 70px !important;
    width: 300px !important;

    font-size: 1.1rem;
  }

  .description {
    margin-top: 3rem;
    font-size: 1.2rem;
    line-height: 1.7rem;
  }
}
</style>
