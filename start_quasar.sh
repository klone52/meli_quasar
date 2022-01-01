#!/bin/sh

echo "Iniciando contenedor"

docker run -it -p 8080:8080 --name quasar_api quasar:v1
