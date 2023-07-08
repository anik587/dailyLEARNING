# Microservices
Microservices architecture enables large teams to build scalable applications that are composed of many loosely coupled services. Allows to deploy often because easier to manage and the blast radius is minimal. Microservices provide more flexibility to scale up or down services so operation flexibility is invaluable.
Typical microservices look like
![Alt text](img/image.png)
Microservices are loosely coupled and they are dedicated to some functionality inside a large scaled functionality. This type of services are sometimes called Domain.
![Alt text](img/image.png)
Microservices interact with each other in the defined interface in a surface area. A small service area makes the blast area and defects limited. They make each service to reason about in the context of the entire application.
![Alt text](img/image.png)
Microservices talk to one another over a combination of remote procedure calls (RPC), event streaming, and message brokers.
![Alt text](img/image.png)
gRPC provides a faster response but blast radius is huge.
Event streaming provides better isolation between services but they take longer to process.
![Alt text](image.png)
Well-architectured microservices practice strong information hiding so they broke up monolithic databases into their logical components and keep a logical component well hidden inside its corresponding microservices, but the database can no longer maintain foreign keys so the responsibility of data integrity moved into the application layer.
![Alt text](image.png)
Api Gateway will handle authentication and authorization services through Identity Provider Service. To locate a service route it consults a service registry and discovers the service. There are other facilities like Monitoring, deployment, troubleshooting, etc. 
![Alt text](image.png)
Microservices are not suitable for small companies, they should build a well-defined interface so that one day when the application gets large then it can be split up easl.