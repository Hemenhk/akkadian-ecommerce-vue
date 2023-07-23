<template>
  <div class="accordion">
    <div v-for="item in accordionItems" :key="item.id" class="accordion-item">
      <button
        @click="toggleAccordionItem(item.id)"
        :class="{ active: item.isOpen }"
      >
        {{ item.title }}
      </button>
      <div v-if="item.isOpen" :class="['content', { open: item.isOpen }]">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  description: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
});

const accordionItems = ref([
  {
    id: 1,
    title: "Information",
    content: props.description,
    isOpen: false,
  },
  {
    id: 2,
    title: "Ingredients",
    content: props.ingredients,
    isOpen: false,
  },
  {
    id: 3,
    title: "Accordion Item 3",
    content: "Content for Accordion Item 3",
    isOpen: false,
  },
]);

const toggleAccordionItem = (itemId) => {
  accordionItems.value.forEach((item) => {
    if (item.id === itemId) {
      item.isOpen = !item.isOpen;
    } else {
      item.isOpen = false;
    }
  });
};
</script>

<style scoped>
.accordion {
  display: flex;
  flex-direction: column;
  border-top: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
}

.accordion-item {
  border-bottom: 1px solid #ccc;
}

button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 12px;
  font-size: 16px;
  width: 100%;
  text-align: left;
  outline: none;
}

button.active {
  background-color: lightblue;
}

.content {
  padding: 10px;
  max-height: 0;
  overflow: hidden;
  animation: 0.3s ease-out forwards;
}

.content.open {
  display: flex;
  animation-name: openAccordion;
  /* max-height: 1000px;  */
}

@keyframes openAccordion {
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 300px;
    opacity: 1;
  }
}
</style>
