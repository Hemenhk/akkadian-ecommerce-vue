<template>
  <div class="container">
    <div class="img-container">
      <img class="image" :src="props.image" />
    </div>
    <div class="item-container">
      <div>
        <p class="title">{{ props.title }}</p>
        <p class="price">$ {{ props.price }}</p>
      </div>
      <div class="btn-container">
        <div class="btn-handler">
          <font-awesome-icon
            icon="minus"
            @click="decreaseItemHandler"
            class="decrease"
          />
          <p class="quantity">{{ props.quantity }}</p>
          <font-awesome-icon
            icon="plus"
            @click="increaseItemHandler"
            class="increase"
          />
        </div>

        <div>
          <p class="remove" @click="removeItemHandler">Remove</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useStore } from "vuex";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
});
const store = useStore();
const product = store.state.product.products.find(
  (product) => product.id === props.id
);

const increaseItemHandler = () => {
  store.commit("cart/setIncrease", product);
};

const decreaseItemHandler = () => {
  store.commit("cart/setDecrease", product);
};

const removeItemHandler = () => {
  store.commit("cart/setRemove", product);
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  margin-right: 2rem;
  margin-bottom: 2rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid #dbdbdb;
}

.img-container {
  display: flex;
  align-items: center;
}
.image {
  width: 110px;
}

.item-container {
  display: flex;
  flex-direction: column;
}

.title {
  font-family: "noto sans";
  font-size: 0.9rem;
}

.price {
  font-family: "inter";
  font-size: 0.9rem;
}

.btn-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}
.btn-handler {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border: 1px solid #dbdbdb;
  border-radius: 2px;
  padding: 2px 5px;
  height: 30px;
  width: 70px;
}

.decrease,
.increase {
  width: 10px;
  cursor: pointer;
}

.quantity {
  font-family: "inter";
  font-size: 0.9rem;
}

.remove {
  font-family: "inter";
  font-size: 0.7rem;

  text-transform: uppercase;
  padding-bottom: 1px;
  border-bottom: 1px solid black;

  cursor: pointer;
}
</style>
