1.  **Vue no detecta cambios dentro de objetos reactivos de la forma que esperarías. ¿Cómo podrías observar un cambio en una propiedad anidada?**

    * Para observar cambios en propiedades anidadas, puedes usar `watch()` con una función getter que devuelva la propiedad anidada específica. Por ejemplo:

    ```javascript
    watch(() => producto.detalles.color, (nuevoColor, viejoColor) => {
    });
    ```

2.  **`watch()` permite escuchar cambios en propiedades específicas dentro de `reactive()`, explica cómo funciona.**

    * `watch()` toma dos argumentos principales:
        * Una función getter que devuelve el valor que se va a observar.
        * Una función de devolución de llamada que se ejecuta cuando el valor observado cambia.
    * La función de devolución de llamada recibe dos argumentos: el nuevo valor y el valor anterior.

3.  **¿Cómo harías que un `watch()` detecte cambios en `stock` dentro de un array de productos?**

    * Puedes usar `watch()` con una función getter que devuelva un array de los valores de `stock` de cada producto. Luego, puedes comparar el nuevo array de stocks con el anterior para detectar los cambios.

    ```javascript
    watch(() => products.map(p => p.stock), (newStocks, oldStocks) => {
    });
    ```
    * En el código ejemplo del composable useInventory.js, se muestra un ejemplo de como hacerlo.