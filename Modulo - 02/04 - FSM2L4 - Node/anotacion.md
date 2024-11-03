# NodeJS
- entorno de execução de JS

# Objetivos da classe
1. Conocer el runtime node JavaScript.
2. Comprender la estructura y configuración de un proyecto de node.
3. Conocer la librería NPM y aprender su uso para instalar dependencias.
4. Entender la gestión de versiones en node.

# Inicialización de proyecto
packagejson - npm init (alma do projeto, comandos, dependencias)
scripts - definir comandos

# arquitetura 
- A medida que un proyecto comienza a ser más grande, necesitamos desarrollar una arquitectura de archivos y carpetas que nos permita hacerla escalable. De esta forma, todo nuestro código estará dividido en distintas partes (a partir de las responsabilidades de cada función) pero se ejecutarán en conjunto.

# Modulos
- conjunto de código organizado y encapsulado
- proporciona un sistema de módulos que permite la exportación e importación.
- TEMOS QUE TENER EN CUENTA QUE LOS MODULOS TENGAN UNA RESPONSABILIDAD BIEN DELIMITADA Y DEFINIDA (nao fique muito codigo em um modulo só)

EXPORT
    module.exports
REQUIRE 
    const Repository = require('./Repo')

# NPM (node package modules)
- librería open source gigante con muchos módulos
- frameworks y librerías / gestor de paquetes

# nodemon
instalar nodemon 
npm i -D
trocar o script para nodemon + 'nome arquivo'
nao precisa mais ficar toda hora npm start porque vai atualizar sozinho