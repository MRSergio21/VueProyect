<template>
  <div class="product" :class="{ 'out-of-stock': !product.disponible }">
    <h3>{{ product.name }}</h3>
    <p>Precio: ${{ product.price }}</p>
    <p v-if="product.disponible">Stock: {{ product.stock }}</p>
    <p v-else class="out">Sold out</p>
    <div class="buttons">
      <button @click="decreaseStock" :disabled="!product.disponible">Sell</button>
      <button @click="increaseStock">Restore</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  product: Object
});

const decreaseStock = () => {
  if (props.product.stock > 0) {
    props.product.stock--;
  }
};

const increaseStock = () => {
  props.product.stock++;
};
</script>

<style scoped>
.product {
  background: #1e1e2e;
  color: #fff;
  border: 1px solid #00d1b2;
  padding: 15px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 209, 178, 0.2);
  transition: transform 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.product:hover {
  transform: scale(1.05);
}
.out-of-stock {
  background: #ff4c4c;
  color: white;
}
.out {
  font-weight: bold;
  color: yellow;
}
.buttons {
  margin-top: 10px;
  display: flex;
  gap: 10px;
}
button {
  background: #00d1b2;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  color: #fff;
  border-radius: 5px;
  font-weight: bold;
  transition: 0.3s;
}
button:hover {
  background: #009e8e;
}
button:disabled {
  background: gray;
  cursor: not-allowed;
}
</style>