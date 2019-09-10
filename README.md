# ¿Como correr el proyecto?
## Pre-requisitos
Se debe instalar:
* Docker 8.x +
* Node 8.x + o Node 10.x +
* Visual Studio Code + Azure DevTools Extention
* Postman o parecidos.
>Tener en cuenta que si se instala Node 8.x +, es necesario para ´poder correr el proyecto de angular 

## 1. Instalacion de Hurley
Usar el siguente comando para instalar la herramienta que genera las imagenes de Hyperledger Fabric:

```npm i -g @worldsibu/hurley```

>En caso de errores al usar el comando  'npm run 'de convector crear una organización  plantilla con el siguente comando: ```hurl new```

## 2. Instalar Convector
Usar el siguente comando:

```npm i -g @worldsibu/convector-cli```

>Corroborar que si se instalo bien usando el comando ```conv``` y que no slga ningun error al correrlo.

## 3. Correr red blockchain y generar API:

 1. Para instalar dependencias del proyecto CAR, usar el siguente comando: ```npm i``` en el directorio del proyecto.
 2. Crear nueva red blockchainde desarrollo usando el siguente comando: ```npm run env:restart```
 3. Subimos nuestro SmartContract a la red Blockchain: ```npm run cc:start -- car```
 4. Usamos el siguente comando para generar el servicio REST (express): ```conv-rest-api generate api -c car -f ./car.config.json```
 5. Compilamos el proyecto con este comando: ```npx lerna bootstrap```
 6. Iniciamos el servicio del API con: ```npx lerna run start --scope server --stream```
 7. Creamos un primer asset con curl: ```curl http://localhost:8000/car/create -H "Content-Type: application/json" --request POST  --data '{ "car": { "id": "car#1", "name": "volkswagen", "created": 1, "modified": 1} }'```

 > Este ultimo paso se demora un poco más de lo habitual devido a ser la primera interaccion con la red blockchain.
## 4. Instalar y depurar Azure Functions

 1. Inicialmente instalar las librerias necesarias para poder depurar Functions localmente: ```npm install -g azure-functions-core-tools```
 2. Instalar las dependencias del proyecto Functions, usar el siguente comando: ```npm i``` en el directorio del proyecto.
 3. Depurar la aplicacion desde CLI usando el comando ```func start``` o desde Visual Studio Code en su `Debuger` 
 4. Ahora desde Postaman o el que desee, usar las siguentes peticiones:
    1. `GetById`: ```http://localhost:7071/api/getCarbyId?id=car%231```
       1. > Usar en este caso `URLencode` para enviar la peticion por URL.
    2. `GetAll`: ```http://localhost:7071/api/getAllCars```
    3. `CreateCar`: ```http://localhost:7071/api/createNewCar```
       1. >El esquema para enviar por el body, por ejemplo:

           ```json
                {
                "car": {
                    "id": "car#5",
                    "name": "lamborgini",
                    "created": 5,
                    "modified": 5
                    }
                }
            ```

    4. `UpdateCarAtribute`: ```http://localhost:7071/api/updateCarAtribute```
       1. >Los parametros se envian por el body, como en el siguente ejemplo:

        ```json
            {
                "id": "car#3",
                "car": {
                    "modified": 50
                }
            }
        ```

    5. `DeleteCar`: ```http://localhost:7071/api/deleteOneCar```
       1. >La busqueda del asset con el ID especifico se hace por el body, por ejemplo:

        ```json
            {
                "id": "car#3"
            }
        ```

## 5. Depurar aplicación Angular

 1. Dirigirce a la carpeta de la app de angular y instalar dependencias usando el comando : ```npm i```
 2. Una vez instaladas las dependencias depuramos nustra aplicacion con el comando: ```npm start```
 3. Si todo esta correcto, usted vera que la aplicacion empezo a correr en el `puerto 4200`, pero de todas formas use la siguente direccion para acceder a la pagina: ```http://localhost:4200/sidenav```
