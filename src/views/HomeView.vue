<template>
  <div class="home">
    <h1>Online Shop</h1>
    <AddProductForm />
    <ProductList />
  </div>
</template>

<script setup>
import ProductList from '../components/ProductList.vue';
import AddProductForm from '../components/AddProductForm.vue';
</script>

<style scoped>
.home {
  background: #121212;
  min-height: 100vh;
  padding: 20px;
  color: #00d1b2;
  font-family: 'Arial', sans-serif;
  margin: auto;
  gap: 20px; /* Agrega espacio entre los componentes */
}

h1 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
}

</style>
