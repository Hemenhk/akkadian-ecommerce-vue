<template>
  <Teleport to="#cart-drawer"
    ><div v-if="isOpen" class="cart-overlay" @click="closeDrawer"></div>
    <div class="cart-drawer-container" :class="{ 'cart-drawer-open': isOpen }">
      <div class="cart-drawer-header">
        <h3>CART</h3>
        <font-awesome-icon
          class="close-button"
          icon="xmark"
          @click="closeDrawer"
        />
      </div>
      <div class="cart-drawer-body">
        <div class="cart-dropdown-container"><TheCartDropdown /></div>
      </div>
      <div class="cart-drawer-footer">
        <button class="checkout-btn">
          <p>CHECKOUT</p>
          <p>-</p>
          <p>$ {{ total.toFixed(0) }}</p>
        </button>
        <button @click="clearCartHandler" class="clear-btn">CLEAR</button>
      </div>
    </div></Teleport
  >
</template>

<script setup>
import { defineProps, defineEmits, toRef, computed } from "vue";
import { useStore } from "vuex";
import TheCartDropdown from "./TheCartDropdown.vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});

const store = useStore();

const total = computed(() => store.state.cart.total);
const isOpen = toRef(props, "isOpen");
const emit = defineEmits(["closeDrawer"]);

const clearCartHandler = () => {
  store.commit("cart/setClearCart");
};

const closeDrawer = () => emit("closeDrawer");
</script>

<style scoped>
.cart-drawer-container {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  width: 400px;
  height: 100%;
  background-color: #fafafa;
  overflow-y: auto;
  overflow-x: hidden;
}

.cart-drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  width: 90%;

  padding-bottom: 1rem;
  border-bottom: 1px solid #e6e6e6;
}

.cart-drawer-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 2rem !important;
  overflow-y: hidden;

  width: 90%;

  height: 70vh;
  max-height: calc(100% - 30vh);
}

.cart-dropdown-container {
  height: 100%;
  overflow-y: auto; /* Add overflow-y property */
}

.cart-dropdown-container::-webkit-scrollbar {
  display: none;
}

.cart-drawer-footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;

  margin: 1rem 2rem !important;
  margin-right: 1rem !important;
  background-color: #fafafa;

  width: 90%;
  height: 15vh;
}

.cart-drawer-footer button {
  height: 40px;
  width: 90%;
  border: none;

  font-family: "inter";
  font-size: 1rem;
  font-weight: 500;

  cursor: pointer;
}

.checkout-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  background: linear-gradient(to right, white 50%, black 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  color: #fff;
  border: 1px solid #000 !important;
  border-radius: 2px;
  transition: all 0.5s ease-out;
}

.checkout-btn:hover {
  background-position: left bottom;
  color: #000;
}

.clear-btn {
  background-color: transparent;
}

.cart-drawer-header h3 {
  font-family: "noto sans" !important;
  font-weight: 400;
  letter-spacing: 2px;
}

.cart-drawer-open {
  animation: cartOpenDrawer 0.4s ease-out;
}

.close-button {
  height: 25px;
  cursor: pointer;
  margin-right: 1rem !important;
}

.cart-overlay {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 1;

  background-position: left bottom;
}

@keyframes cartOpenDrawer {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
}
</style>
