# Weather App React + Vite

## Descripción del proyecto:

Este proyecto consiste en una aplicación web de pronóstico del tiempo desarrollada con React y Redux. Permite a los usuarios buscar por ciudad y obtener información detallada sobre el clima actual y los próximos días. La aplicación se caracteriza por su diseño intuitivo y su capacidad para mostrar datos meteorológicos precisos y actualizados.

## Funcionalidades:

Búsqueda por ciudad: Permite al usuario ingresar el nombre de una ciudad para obtener información meteorológica específica. En base a la información recibida por la api cambia el fondo de toda la aplicación acorde a la situación meteorológica local.
Pronóstico del tiempo: Muestra el clima actual, la temperatura, la humedad, la velocidad del viento, la sensación térmica y la probabilidad de lluvia para el día actual y los próximos días.
Íconos del clima: Utiliza íconos intuitivos para representar las condiciones climáticas actuales y futuras.
Gráficos: Presenta gráficos lineales y de barras para visualizar la evolución de la temperatura, la humedad y la probabilidad de lluvia a lo largo de los días.
Datos actualizados: Obtiene información meteorológica en tiempo real a través de una API pública.

## Tecnologías utilizadas:

Frontend:

React v18.2.0
React Dom v18.2.0
React Router Dom v6.23.0
Redux v9.1.2
Redux Toolkit v2.2.3
@emotion/react v11.11.4
@emotion/styled v11.11.5
@mui/material v5.15.16
@mui/icons-material v5.15.16
@mui/styled-engine-sc v6.0.0-alpha.18
@fortawesome/fontawesome v1.1.8
@fortawesome/free-solid-svg-icons v6.5.2
styled-components v6.1.10

## Backend:

No se requiere un backend para este proyecto, ya que la información del clima se obtiene de una API pública.
Dependencias:

Las dependencias necesarias para este proyecto se encuentran en el archivo package.json. Puedes instalarlas ejecutando el siguiente comando en la terminal:

npm install

## Clonar el repositorio:

Para clonar el repositorio de este proyecto en tu computadora, puedes utilizar el siguiente comando en la terminal:

git clone https://github.com/s00ar/Weather-Front-ReactJS.git

Ejecutar la aplicación:

Una vez clonado el repositorio, puedes ejecutar la aplicación localmente ejecutando los siguientes comandos en la terminal:

cd weather-app
npm start

## Conectar tu repositorio local al remoto:

En la terminal, navega hasta la carpeta raíz del proyecto.

Ejecuta el siguiente comando para inicializar Git en tu proyecto local:


git init
Agrega todos los archivos del proyecto al repositorio local:


git add .
Commite los cambios con un mensaje descriptivo:


git commit -m "Initial commit"
Vincula tu repositorio local al repositorio remoto de GitHub:


git remote add origin https://github.com/s00ar/Weather-Front-ReactJS.git
Sube los cambios al repositorio remoto:


git push -u origin main

## Despliegue de la Weather App en Vercel
Requisitos previos:

Tener una cuenta de Vercel (puedes crear una gratuita).
Tener el proyecto de la Weather App clonado en tu computadora local.
Tener Node.js v16.13.0 o superior instalado en tu computadora.

Pasos para el despliegue:

Instalar la CLI de Vercel:

Abre una terminal y ejecuta el siguiente comando:

npm install -g vercel

Iniciar sesión en Vercel (si no lo has hecho):

En la terminal, ejecuta el siguiente comando:

vercel login

Sigue las instrucciones en pantalla para iniciar sesión con tu cuenta de Vercel.

Navegar a la carpeta del proyecto:

En la terminal, navega a la carpeta raíz del proyecto de la Weather App.

Inicializar Vercel para el proyecto:

Ejecuta el siguiente comando:

vercel init

Vercel detectará automáticamente que se trata de un proyecto React y te guiará a través de algunos pasos de configuración.

Seleccionar la rama para el despliegue:

Vercel te preguntará qué rama de tu repositorio de Git deseas desplegar. Por defecto, se seleccionará la rama main. Puedes elegir una rama diferente si lo deseas.

Configurar un dominio (opcional):

Vercel te preguntará si deseas configurar un dominio personalizado para tu aplicación. Puedes omitir este paso si deseas utilizar el dominio gratuito de Vercel (e.g., your-app.vercel.app).

Desplegar la aplicación:

Una vez que hayas completado la configuración, Vercel desplegará tu aplicación. Verás un mensaje en la terminal con la URL de tu aplicación desplegada.

Verificación del despliegue:

Abre un navegador web y navega a la URL de tu aplicación desplegada.
Deberías ver la aplicación Weather App funcionando correctamente.


-Versiones de Node: v21.7.1
