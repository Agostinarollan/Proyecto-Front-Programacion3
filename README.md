1. Objetivo del Trabajo
Aplicando los conocimientos adquiridos durante la cursada y la investigación
adicional que se considere necesaria, se deberá desarrollar un sitio web
completo utilizando HTML5, CSS3, JavaScript vanilla (ES6+) y Bootstrap.
El trabajo busca simular un escenario profesional real: el alumno recibe un
conjunto de requisitos técnicos que deben cumplirse de forma estricta, tal como
ocurre en entornos de trabajo donde el cliente o empleador define las
especificaciones del producto.
2. Modalidad y Evaluación
• El TP integrador se realiza de manera individual.
• La calificación surge de la evaluación del trabajo presentado y de su defensa
oral.
• En la mesa de examen final, además del punto anterior, se evalúan
conceptos teóricos (visto en todas las unidades) en la lección oral.
3. Requisitos Técnicos Obligatorios para Regularización y Promoción de
la materia.
# Requisito Descripción detallada
1 Páginas HTML
El sitio debe contener un mínimo de 5 páginas HTML
independientes. Cada página tiene su propio archivo .html. No
se admiten soluciones de una sola página (Landing page).
2 Secciones por página Cada página debe incluir al menos 3 secciones diferenciadas y
con contenido relevante (no secciones vacías de relleno).
3 Consumo de API pública
Una de las páginas debe obtener datos de una API REST
pública mediante fetch(). El listado debe mostrar al menos 7
entidades (objetos) con sus propiedades renderizadas
dinámicamente en el DOM.
4
Filtrado o Búsqueda en el
listado
El listado consumido desde la API debe incluir al menos un
mecanismo de filtrado o búsqueda en tiempo real
implementado con JavaScript.
5 Formulario validado con JS
Una página debe incluir un formulario de contacto con mínimo
6 campos (no todos de tipo texto). La validación debe
realizarse con JavaScript: campos obligatorios, formatos
correctos (email, teléfono, etc.) y mensajes de error accesibles
y amigables. No utilizar validación nativa de HTML.
6
Visualización de Datos con
ECharts
El sitio debe incluir al menos un gráfico generado con la librería
Apache ECharts (https://echarts.apache.org), cuya información
provenga de una transformación de los datos obtenidos
mediante fetch() desde una API pública (puede ser la misma
API utilizada para el listado).
El gráfico no debe mostrar datos crudos directamente: el
alumno deberá aplicar una transformación en JavaScript
(agrupación, conteo, cálculo de totales, promedios u otra
operación) antes de pasarlos a la librería para su renderizado.
El tipo de gráfico elegido debe ser coherente con la naturaleza
de los datos representados (por ejemplo: gráfico de barras
para comparar cantidades, torta para proporciones, líneas para
evoluciones temporales). El o los gráficos deben mostrarse en
la misma página del listado.
La integración de ECharts debe realizarse mediante su CDN
oficial. No se admite el uso de otras librerías de visualización
alternativas.
Para promocionar, incluir al menos 2 gráficos.
7 Responsive Design
El sitio completo debe adaptarse correctamente a dispositivos
móviles y de escritorio. Se deben utilizar las utilidades
responsive de Bootstrap y/o media queries CSS propias.
8 Menú hambuguesa
El menú de navegación debe colapsar en un menú tipo
hamburguesa únicamente en la versión móvil. En escritorio
debe mostrarse de forma expandida.
9 Footer con redes sociales
El footer debe contener enlaces de como mínimo 2 redes
sociales con sus íconos/logos correspondientes. Los enlaces
deben abrirse en una nueva pestaña.
10 Hoja de estilos externa Todos los estilos CSS propios deben estar en un archivo .css
externo. No utilizar etiqueta <style> ni tampoco el atributo style.
11 Estructura de archivos
El proyecto debe tener una estructura de carpetas organizada:
separación entre HTML, CSS, JS e imágenes (y demás
recursos).
4. Documentación sencilla (README)
El repositorio debe incluir un archivo README.md con: nombre y apellido del
alumno, título proyecto, descripción breve del proyecto e instrucciones para
ejecutarlo localmente.
Aclaraciones sobre la entrega
Los recursos como imágenes, videos, animaciones, pdfs, etc no deben ser
archivos con tamaños pesados. Utilizar recursos optimizados.
Comprimir el proyecto en un archivo .zip para entregarlo.
