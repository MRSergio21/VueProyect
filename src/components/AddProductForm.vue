<template>
  <div class="add-product-form">
    <h2>Add Product</h2>
    <div class="input-group">
      <label>Product Name:</label>
      <input v-model="name" placeholder="Product Name" />
    </div>
    <div class="input-group">
      <label>Price:</label>
      <input v-model.number="price" type="number" placeholder="Price" />
    </div>
    <div class="input-group">
      <label>Stock:</label>
      <input v-model.number="stock" type="number" placeholder="Stock" />
    </div>
    <button @click="handleAddProduct">Add</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { addProduct } from '../store/inventory';

const name = ref('');
const price = ref(0);
const stock = ref(0);

const handleAddProduct = () => {
  if (name.value && price.value > 0 && stock.value >= 0) {
    addProduct(name.value, price.value, stock.value);
    name.value = '';
    price.value = 0;
    stock.value = 0;
  }
};
</script>

<style scoped>
.add-product-form {
  background: #1e1e2e;
  color: #00d1b2;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 209, 178, 0.2);
  max-width: 800px;
  margin: auto;
}
.input-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 10px auto;
}
label {
  color: #fff;
  font-weight: bold;
  margin-right: 10px;
  white-space: nowrap;
}
input {
  flex: 1;
  padding: 8px;
  border: none;
  border-radius: 5px;
  width: 100%;
}
button {
  background: #00d1b2;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  color: #fff;
  border-radius: 5px;
  font-weight: bold;
  width: 100%;
  margin-top: 10px;
}
button:hover {
  background: #009e8e;
}


</style>