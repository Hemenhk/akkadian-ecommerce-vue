<template>
  <div class="accordion-container">
    <div class="accordion-usage">
      <div @click="openUsageHandler" class="accordion-title">
        <h2>Usage</h2>

        <font-awesome-icon icon="plus" v-if="!isOpen.usageIsOpen" />
        <font-awesome-icon v-else icon="minus" />
      </div>
      <div
        v-if="isOpen.usageIsOpen"
        :class="`${'accordion-content'} ${isOpen && 'accordion-open'}`"
      >
        <p>{{ props.usage }}</p>
      </div>
    </div>
    <div class="accordion-ingredients">
      <div @click="openIngHandler" class="accordion-title">
        <h2>Ingredients</h2>

        <font-awesome-icon icon="plus" v-if="!isOpen.ingIsOpen" />
        <font-awesome-icon v-else icon="minus" />
      </div>

      <div
        v-if="isOpen.ingIsOpen"
        :class="`${'accordion-content'} ${isOpen && 'accordion-open'}`"
      >
        <p>{{ props.ingredients }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive } from "vue";

const isOpen = reactive({
  usageIsOpen: false,
  ingIsOpen: false,
});

const props = defineProps({
  usage: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
});

const openUsageHandler = () => {
  isOpen.usageIsOpen = !isOpen.usageIsOpen;
};

const openIngHandler = () => {
  isOpen.ingIsOpen = !isOpen.ingIsOpen;
};
</script>

<style>
.accordion-container {
  margin-bottom: 10px;
  width: 400px;
}

.accordion-title {
  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  padding: 30px 0;
}

.accordion-title h2 {
  font-family: "inter";
  font-size: 0.8rem;
  font-weight: 300;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.accordion-usage {
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
}

.accordion-ingredients {
  border-bottom: 1px solid #dbdbdb;
}

.accordion-content {
  padding: 1rem 0;
  height: auto;
}

.accordion-content p {
  padding-bottom: 4px;
  font-family: "inter";
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  line-height: 1.3rem;
}

.accordion-open {
  animation: slideDown 0.5s ease-out;
}

@keyframes slideDown {
  0% {
    opacity: 0;
    max-height: 0;
  }
  50% {
    opacity: 50%;
    max-height: 100px;
  }
  100% {
    opacity: 1;
    max-height: 200px;
  }
}

@media (max-width: 440px) {
  .accordion-container {
    width: 300px;
  }

  .accordion-title h2 {
    font-size: 1rem;
    font-weight: 500 !important;
  }
}
</style>
