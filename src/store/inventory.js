import { reactive, watch } from 'vue';

const savedProducts = JSON.parse(localStorage.getItem('products')) || [];

export const inventory = reactive({
    products: savedProducts
});

// Watch para detectar cambios en stock y guardar en localStorage
watch(
    () => inventory.products.map(p => p.stock),
    (newStock) => {
        inventory.products.forEach((product, index) => {
            product.disponible = newStock[index] > 0;
        });
        localStorage.setItem('products', JSON.stringify(inventory.products));
    }
);

// Watch para almacenar cambios en productos
watch(
    () => inventory.products,
    (newProducts) => {
        localStorage.setItem('products', JSON.stringify(newProducts));
    },
    { deep: true }
);

export const addProduct = (name, price, stock) => {
    if (!name || price <= 0 || stock < 0) return;
    const newProduct = {
        name,
        price: Number(price),
        stock: Number(stock),
        disponible: stock > 0
    };
    inventory.products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(inventory.products));
};