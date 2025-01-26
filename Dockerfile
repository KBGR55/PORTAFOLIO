# Dockerfile para Sistema de Riego en Tiempo Real

# Utilizar una imagen base de Node.js
FROM node:16-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar los archivos package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto del código al contenedor
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Servir la aplicación utilizando un servidor HTTP estático
RUN npm install -g serve
CMD ["serve", "-s", "build"]

# Exponer el puerto 3000 para acceder a la aplicación
EXPOSE 3000