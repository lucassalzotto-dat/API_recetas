# API_recetas
Aquí tienes un ejemplo de README para tu proyecto de API de Recetas en Node.js:

---

# API de Recetas

Una API básica construida en Node.js y Express para gestionar recetas. Permite agregar nuevas recetas y obtener una lista de todas las recetas almacenadas en un array en memoria.

## Requisitos Previos

- Node.js y npm instalados en tu máquina.

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/API_recetas.git
   cd api-recetas
   ```

2. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```

## Uso

1. Inicia el servidor:
   ```bash
   node index.js
   ```

   El servidor debería estar ejecutándose en `http://localhost:3000`.

2. Utiliza una herramienta como [Postman](https://www.postman.com/) o [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) para interactuar con la API.

## Endpoints

### 1. POST `/recetas`
   - **Descripción**: Agrega una nueva receta a la lista.
   - **Solicitud**: El cuerpo de la solicitud debe incluir un objeto JSON con los siguientes campos:
     - `nombre` (string): Nombre de la receta.
     - `ingredientes` (array de strings): Lista de ingredientes.
     - `instrucciones` (string): Instrucciones para preparar la receta.
   - **Ejemplo de Solicitud**:
     ```json
     {
       "nombre": "Ensalada de Frutas",
       "ingredientes": ["manzana", "plátano", "naranja", "fresas", "uvas", "yogur natural"],
       "instrucciones": "Corta todas las frutas en trozos pequeños, mezcla en un bol y añade el yogur. Sirve frío."
     }
     ```
   - **Respuesta Exitosa**: Retorna el objeto de la receta recién añadida con un `id` generado automáticamente.
   ```json
   {
     "id": 1,
     "nombre": "Ensalada de Frutas",
     "ingredientes": ["manzana", "plátano", "naranja", "fresas", "uvas", "yogur natural"],
     "instrucciones": "Corta todas las frutas en trozos pequeños, mezcla en un bol y añade el yogur. Sirve frío."
   }
   ```

### 2. GET `/recetas`
   - **Descripción**: Retorna una lista de todas las recetas almacenadas.
   - **Respuesta Exitosa**: Un array de objetos JSON, cada uno representando una receta con los campos `id`, `nombre`, `ingredientes`, e `instrucciones`.
   ```json
   [
     {
       "id": 1,
       "nombre": "Ensalada de Frutas",
       "ingredientes": ["manzana", "plátano", "naranja", "fresas", "uvas", "yogur natural"],
       "instrucciones": "Corta todas las frutas en trozos pequeños, mezcla en un bol y añade el yogur. Sirve frío."
     }
   ]
   ```

## Ejemplos de Recetas

Aquí tienes algunos ejemplos de recetas para probar el endpoint **POST**:

1. **Pasta Alfredo**
   ```json
   {
       "nombre": "Pasta Alfredo",
       "ingredientes": ["pasta", "crema de leche", "queso parmesano", "mantequilla", "ajo", "perejil"],
       "instrucciones": "Cocina la pasta. En una sartén, derrite la mantequilla y sofríe el ajo. Agrega la crema y el parmesano, luego mezcla con la pasta. Decora con perejil."
   }
   ```

2. **Guacamole**
   ```json
   {
       "nombre": "Guacamole",
       "ingredientes": ["aguacate", "cebolla", "tomate", "cilantro", "limón", "sal"],
       "instrucciones": "Tritura el aguacate y mezcla con cebolla, tomate y cilantro picados. Agrega el jugo de limón y sal al gusto."
   }
   ```

## Tecnologías Utilizadas

- Node.js
- Express.js

## Notas

- Esta API almacena las recetas en un array en memoria, por lo que todos los datos se perderán al reiniciar el servidor.
  
## Autor

Lucas Salzotto
