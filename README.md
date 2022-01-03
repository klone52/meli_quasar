# meli_quasar
Proyecto para entrevista Mercado Libre

## Instalar dependencias
1. Tener node instalado en el systema
2. Tener npm (Node Package Manager) 
3. Para instalar se debe usar el comando npm install dentro de la carpeta del repo

## Testing
Se utiliza Jest para probar y corroborar el correcto funcionamiento del proyecto 
### Instalar usando 
npm install --save-dev jest

## Deploy
El sistema se levanta con Docker container, Dockerfile se encuentra en el repo.
Se debe tener instalado Docker Engine -> https://docs.docker.com/engine/install/ubuntu/
Para construirlo se tiene el bash script build.sh , el cual debe ejecutarse con sh build.sh 
Y para hacer el deploy usar el bash script start.sh de forma analoga al build

## Configs
El servidor usa el puerto 5000 por defecto o la variable de entorno PORT a definir dentro del contenedor
Para habilitar otro puerto publicamente exponer en otro puerto en el scrip start.sh 
