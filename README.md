Resumen de Docker

Que es Docker?

Docker es una plataforma de código abierto que permite crear, implementar y administrar aplicaciones dentro de contenedores. Los contenedores son entornos ligeros y portátiles que encapsulan todo lo necesario para ejecutar una aplicación, incluyendo código, bibliotecas, herramientas y configuraciones.

Docker sirve para:

1. Portabilidad y Consistencia: Permite a los desarrolladores crear aplicaciones en entornos controlados y empaquetarlas con todas sus dependencias, lo que garantiza su funcionamiento de manera consistente en diferentes entornos.

2. Eficiencia de Recursos: Los contenedores comparten el sistema operativo subyacente, lo que reduce el uso de recursos y permite ejecutar múltiples contenedores en un solo host.

3. Facilita el Desarrollo y Despliegue: Facilita el desarrollo, las pruebas y el despliegue de aplicaciones al proporcionar un entorno consistente y aislado para ejecutarlas.

Que es Docker Compose?

Docker Compose es una herramienta que permite definir y administrar aplicaciones multi-contenedor en Docker con un archivo YAML. Permite definir la configuración de múltiples servicios, sus relaciones y configuraciones en un solo archivo para simplificar la administración de aplicaciones complejas.

Características clave de Docker Compose:

1. Definición de servicios: Permite definir varios servicios de contenedores y sus configuraciones en un solo archivo.

2. Gestión de dependencias: Establece relaciones y dependencias entre los servicios para facilitar la comunicación entre ellos.

3. Entorno consistente: Ayuda a mantener un entorno consistente y replicable para desarrollo, pruebas y producción.

4. Comandos simples: Proporciona comandos simples para iniciar, detener, crear y administrar aplicaciones multi-contenedor.

En resumen, Docker es una herramienta de contenerización que permite encapsular aplicaciones y Docker Compose es una herramienta que simplifica la administración de aplicaciones multi-contenedor mediante la definición y configuración en un solo archivo. Ambas herramientas son fundamentales en el desarrollo de aplicaciones y la administración de infraestructuras.

______________________________________________________________________________________________________


Resumen del Articulo

En este articulo habla de las posibilidades que nos el DOM.

El DOM (modelo de objetos de documento) es una interfaz que representa cómo el navegador lee sus documentos HTML y XML. Permite que un lenguaje (JavaScript) manipule, estructure y diseñe su sitio web. Después de que el navegador lee su documento HTML, crea un árbol representacional llamado Modelo de objetos de documento y define cómo se puede acceder a ese árbol.

Nos da ventajas al usar esto tales como al manipular el DOM, tienes infinitas posibilidades. Puedes crear aplicaciones que actualicen los datos de la página sin necesidad de una actualización. Además, puede crear aplicaciones que el usuario pueda personalizar y luego cambiar el diseño de la página sin necesidad de actualizarla. Puede arrastrar, mover y eliminar elementos.

Ahi metodos como los siguientes:

getElementById()
 -Este método devuelve el elemento que contiene el nombre id pasado.

getElementsByClassName()
 -Este método devuelve una HTMLCollection de todos aquellos elementos que contienen el nombre específico clase pasó.

getElementsByTagName()
 -Esto funciona de la misma manera que los métodos anteriores: también devuelve una HTMLCollection, pero esta vez con una única diferencia: devuelve todos esos elementos con el nombre de etiqueta pasado.

querySelector()
 -Devuelve el primer elemento que tiene el selector CSS específico pasó. Solo recuerda que el selector debe seguir la sintaxis CSS.

querySelectorAll()
 -Muy similar al método querySelector(), pero con una única diferencia: devuelve todos los elementos que coinciden con el selector CSS pasado. El selector también debe seguir la sintaxis CSS.

Estos son algunos de los métodos DOM más utilizados. Hay varios métodos más que puedes usar, como createElement(), que crea un nuevo elemento en tu página HTML, y setAttribute() que te permite establecer nuevos atributos para elementos HTML.

Los elementos DOM tienen métodos, como acabamos de comentar, pero también tienen eventos y los mas utilizados serian:

- Click
- Select

Tambien nos da propiedades para atravesar el DOM.

.childNodes
 -Esta propiedad devuelve una nodeList de nodos secundarios de el elemento dado. Devuelve texto, comentarios, etc. Por eso, cuando quieras utilizarlo, debes tener cuidado.

.firstChild
 -Esta propiedad devuelve el primer hijo del elemento dado.

.nodeName
 -Esta propiedad devuelve el nombre del elemento dado. En este caso, pasamos un div, por lo que devolverá “div”.

.nodeValue
 -Esta propiedad es específica para textos y comentarios, ya que devuelve o establece el valor del nodo. En este caso, como pasamos un div, devolverá null.

.nodeType
 -Esta propiedad devuelve el tipo del elemento dado. En este caso, devuelve “1”.

 Pero, ¿qué significa “1” de todos modos? Básicamente es el nodeType del elemento dado. En este caso, es un _ELEMENT_NODE_ y devuelve nulo. Si esto fuera un atributo, se nos devolvería como “2” junto con el valor del atributo. Se puede buscar la lista y verificar que numero nos daria.

Otras propiedades pero para elementos serian:

.parentNode
 -Esta propiedad devuelve el padre del nodo dado.

.firstElementChild
 -Devuelve el primer elemento hijo del elemento dado.

.lastElementChild
 -Devuelve el último elemento hijo del elemento dado.

Para finalizar el DOM nos proporciona varias API importantes para crear aplicaciones fantásticas e innovadoras. Si comprendes los conceptos básicos, podras crear cosas increíbles.