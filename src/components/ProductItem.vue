<template>
  <div class="product" :class="{ 'out-of-stock': !product.disponible }">
    <div v-if="!isEditing">
      <h3>{{ product.name }}</h3>
      <p>Precio: ${{ product.price }}</p>
      <p v-if="product.disponible">Stock: {{ product.stock }}</p>
      <p v-else class="out">Sold out</p>

      <div class="buttons">
        <button @click="decreaseStock" :disabled="!product.disponible">Sell</button>
        <button @click="increaseStock">Restore</button>
        <button @click="toggleEdit">Edit</button>
        <!-- Basurero en lugar de botón -->
        <i @click="deleteProduct"><img src="../assets/trash.png" style="width: 30px;"/></i>
      </div>
    </div>

    <div v-else class="edit-form">
      <input v-model="editedProduct.name" placeholder="Product Name" />
      <input v-model.number="editedProduct.price" type="number" placeholder="Price" />
      <input v-model.number="editedProduct.stock" type="number" placeholder="Stock" />
      
      <div class="buttons">
        <button @click="saveEdit">Save</button>
        <button @click="toggleEdit">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps({
  product: Object,
  index: Number
});

const emit = defineEmits(["update-stock", "update-product", "remove-product"]);

const isEditing = ref(false);
const editedProduct = ref({ ...props.product });

const decreaseStock = () => emit("update-stock", props.index, -1);
const increaseStock = () => emit("update-stock", props.index, 1);
const toggleEdit = () => {
  isEditing.value = !isEditing.value;
  editedProduct.value = { ...props.product };
};
const saveEdit = () => {
  emit("update-product", props.index, editedProduct.value);
  isEditing.value = false;
};
const deleteProduct = () => emit("remove-product", props.index);
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
.edit-form {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
}
input {
  padding: 5px;
  border-radius: 5px;
  border: none;
}

.delete-icon {
  cursor: pointer;
  color: red;
  font-size: 24px;
  transition: color 0.3s;
  margin-top: 10px;
}

.delete-icon:hover {
  color: darkred;
}
</style>
