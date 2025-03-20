# VueProyect

Enunciado:

Tienes una tienda online y necesitas manejar un inventario de productos en Vue. Cada producto tiene:

nombre (string)
precio (número)
stock (número)
disponible (booleano, true si stock > 0, false si stock = 0)
Debes implementar un sistema en Vue donde:

Cuando se reduzca el stock de un producto a 0, disponible debe cambiar automáticamente a false.
Cuando se aumente el stock de un producto, si antes era false, debe volver a true.
La interfaz debe mostrar dinámicamente qué productos están disponibles y cuáles no.
No puedes usar computed, solo reactive() y watch().
Es necesario responder a las siguientes preguntas (debe existir un archivo en el código que se suba a Git con las respuestas):

Vue no detecta cambios dentro de objetos reactivos de la forma que esperarías. ¿Cómo podrías observar un cambio en una propiedad anidada?
watch() permite escuchar cambios en propiedades específicas dentro de reactive(), explica cómo funciona.
¿Cómo harías que un watch() detecte cambios en stock dentro de un array de productos?
