<template>
  <div class="product-list">
    <h2>Product Inventory</h2>
    <div class="grid">
      <ProductItem 
        v-for="(product, index) in inventory.products" 
        :key="index" 
        :product="product" 
        :index="index"
        @update-stock="updateStock"
        @update-product="updateProduct"
        @remove-product="removeProduct"
      />
    </div>
  </div>
</template>

<script setup>
import { inventory, updateStock, updateProduct, removeProduct } from '../store/inventory';
import ProductItem from './ProductItem.vue';
</script>

<style scoped>
.product-list {
  text-align: center;
  color: #00d1b2;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}
</style>
