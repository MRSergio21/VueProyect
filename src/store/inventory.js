import { reactive, watch } from 'vue';

const savedProducts = JSON.parse(localStorage.getItem('products')) || [];

export const inventory = reactive({
    products: savedProducts
});

watch(
    () => inventory.products.map(p => p.stock),
    (newStock) => {
        inventory.products.forEach((product, index) => {
            product.disponible = newStock[index] > 0;
        });
        localStorage.setItem('products', JSON.stringify(inventory.products));
    }
);

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

export const updateProduct = (index, updatedProduct) => {
    if (!updatedProduct.name || updatedProduct.price <= 0 || updatedProduct.stock < 0) return;
    inventory.products[index] = { ...updatedProduct, disponible: updatedProduct.stock > 0 };
    localStorage.setItem('products', JSON.stringify(inventory.products));
};

export const removeProduct = (index) => {
    inventory.products.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(inventory.products));
};

export const updateStock = (index, amount) => {
    if (inventory.products[index]) {
        inventory.products[index].stock += amount;
        inventory.products[index].disponible = inventory.products[index].stock > 0;
        localStorage.setItem('products', JSON.stringify(inventory.products));
    }
};
