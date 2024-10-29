# cuáles son los objetivos de esta clase:
1. Definir la estructura general de un proyecto full stack.
2. Comprender el protocolo HTTP.
3. Aplicar los principales métodos HTTP.


# Front e backend. Lo que es?


# API: (Application Programming Interface)

- API Rest:
    preparação para a comunicacao ate a API é dado por um protocolo HTTP


- API RESTful (Representational State Transfer):
    es un estilo de arquitectura para diseñar una API se basa en principios fundamentales, simplicidad y escalabilidad de la API.

    * Principios API RESTful:
        - Recursos: En RESTful, todo es considerado como un recurso. Un recurso puede ser cualquier información que tenga sentido para el sistema, como un objeto, un servicio o incluso una entidad abstracta.

        - Operaciones CRUD: Se definen operaciones estándar basadas en el sistema CRUD (Create, Read, Update, Delete - Crear, Leer, Actualizar, Eliminar) para interactuar con los recursos.

        - Estado Representacional: El estado de un recurso se representa y se transfiere entre el cliente y el servidor en algún formato de representación, comúnmente en JSON o XML.

        - Identificadores Únicos (URI): Cada recurso tiene un identificador único conocido como URI (Identificador de Recurso Uniforme). Los URIs proporcionan una forma de acceder y manipular un recurso específico.

        - Sin Estado (Stateless): La comunicación entre cliente y servidor es sin estado, lo que significa que cada solicitud del cliente al servidor contiene toda la información necesaria para entender y procesar la solicitud. No hay información de estado almacenada en el servidor entre las solicitudes.



# Protocolo HTTP - (Hypertext Transfer Protocol): 
- principal protocolo para transferencia de informacion en internet. opera sobre el conjunto de protocolos TCP/IP, los cuales, a grandes rasgos, se permiten la transmisión de datos entre dispositivos conectados a la red.

* Cómo indicamos el tipo de request que queremos hacer en este protocolo?
el protocolo define un 'status' del processo que queremos procesar en el servidor, se chama Métodos HTTP:

- GET: obtener informacion de un recurso. Corresponde a la operacion de 'Read'. obten os dados existentes.
- POST: enviar dados ao servidor para criar un novo recurso. Corresponde a operacao 'Create'. Cria uma nova informação
- PUT: enviar dados ao servidor para ATUALIZAR um recurso ou crearlo. Operação 'create' ou 'update'.
- DELETE: soliciatar ao servitor que elimine um recurso. Operacao 'Delete'

cliente vai fazer uma petição ao servidor e ante uma petição vai ter sempre uma resposta (req, res) => request, response


# Conclusion
- frontend: se centra en la experiencia del usuario; todo lo que vemos y con lo que interactuamos en una página web.
- backend: trabaja "detrás de escena", gestionando la lógica de la aplicación, interactuando directamente con la base de datos, entre otras funciones.
- API: permite gestionar y regular la comunicación entre ambos extremos. Revisamos el estilo de arquitectura RESTful, el cual es un enfoque que organiza las interacciones entre sistemas.
- protocolo HTTP: fundamento comunicacional en internet que se encarga de regular las solicitudes y respuestas de información entre cliente y servidor mediante el empleo de métodos que representan los cuatro principales tipos de interacciones correspondientes al sistema CRUD.

proyecto fullstack => backend => protocolo HTTP => frontend => RESTful => crud
