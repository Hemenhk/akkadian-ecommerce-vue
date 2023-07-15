<template>
  <div class="card-container">
    <div v-for="product in products" :key="product.id">
      <img class="image" :src="product.image" />
      <div class="card-body">
        <p class="product-title">{{ product.title }}</p>
        <p class="product-price">$ {{ product.price }}</p>
      </div>
      <div class="btn-container">
        <button>ADD TO CART</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { products } from "../../../products";
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
