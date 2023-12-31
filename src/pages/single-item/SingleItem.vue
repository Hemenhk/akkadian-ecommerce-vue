<template>
  <div v-if="!isLoading" class="container">
    <div class="left-side">
      <div class="img-container">
        <img class="image" :src="product.imageCover" />
      </div>
      <div class="tabs-lg">
        <TheProductTabs
          :usage="product.usage"
          :ingredients="product.ingredients"
        />
      </div>
    </div>

    <div class="right-side">
      <div class="info-container">
        <p class="title">{{ product.title }}</p>
        <p class="price">$ {{ product.price }}</p>
      </div>
      <div class="quantity-container">
        <p>Quantity:</p>
        <div class="quantity-selector">
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
      <div class="description">{{ product.description }}</div>
    </div>
    <div class="tabs-sm">
      <TheProductTabs
        :usage="product.usage"
        :ingredients="product.ingredients"
      />
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
  align-items: flex-start;
  gap: 4rem;

  background-color: #fafafa;

  margin: 2rem 0;
}

.left-side {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
}
.image {
  width: 400px;
}

.tabs-sm {
  display: none;
}

.right-side {
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-top: 8rem !important;

  width: 25%;
  gap: 3rem;
}

.info-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
  flex-direction: column;
  gap: 1rem;
}

.quantity-container p {
  font-family: "inter";
  font-size: 0.8rem;
}

.quantity-selector {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  border: 1px solid #dbdbdb;
  border-radius: 2px;
  padding: 2px 20px;
  width: 75px;
  height: 30px;
}

.decrease,
.increase {
  cursor: pointer;
  width: 10px;
}

.btn-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.btn-container button {
  width: 100%;
  height: 40px;

  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 2px;

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
  font-family: "inter";
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 0.5px;

  text-align: center;
}

@media (max-width: 600px) {
  .container {
    align-items: center;
    flex-direction: column;

    gap: 0.2rem;
    margin-top: 4rem;
  }

  .image {
    width: 300px;
  }

  .right-side {
    justify-content: center;
    align-items: center;
    width: 90% !important;
  }

  .title {
    font-size: 2rem;
    text-align: center;
  }

  .price {
    font-size: 1.5rem;
    text-align: center;
  }

  .quantity-container p {
    font-size: 1.5rem;
    text-align: center;
  }

  .quantity-selector {
    width: 150px;
    height: 70px;
  }

  .decrease,
  .increase {
    width: 20px;
  }

  .btn-container button {
    height: 80px;
    font-size: 1.2rem;
  }

  .description {
    font-size: 1.2rem;
    line-height: 1.6rem;
    padding-bottom: 5rem;
  }

  .tabs-lg {
    display: none;
  }

  .tabs-sm {
    display: block;
  }
}

@media (max-width: 440px) {
  .description {
    font-size: 1.2rem;
  }
}
</style>
