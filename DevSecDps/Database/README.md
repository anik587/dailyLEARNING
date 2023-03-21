# Database

A database is an organized collection of data, and it can be easily accessed & managed.
where data can be organized into table, row, column, key and index and find relevant information.
The main purpose of the database is to operate large amount of information by storing, retrieving and managing data.

# DBMS

Database management system is a software that is used to manage the database.  A DBMS serves as an interface end-user and database, allowing users to use database, allowing user to create read, delete data in the database.

Most widely used type of DBMS software are 


![a.png](img/a.png)

## Centralized Database

It is the type of database that stores data at a centralized database system.
It comforts the users to access the stored data from different locations through several applications.
These applications contain the authentication process to let users access data securely. 
An example of a Centralized database can be Central Library that carries a central database of each library in a college/university.

#### Advantages of centralized database

It has decreased the risk of data management, i.e., manipulation of data will not affect the core data.
Data consistency is maintained as it manages data in a central repository.
It provides better data quality, which enables organizations to establish data standards.
It is less costly because fewer vendors are required to handle the data sets.

#### Disadvantages of centralized database

The size of the centralized database is large, which increases the response time for fetching the data.
It is not easy to update such an extensive database system.
If any server failure occurs, entire data will be lost, which could be a huge loss.

## Distributed Database

Unlike a centralized database system, in distributed systems, data is distributed among different database systems of an organization.
These database systems are connected via communication links. 
Such links help the end-users to access the data easily. 
Examples of the Distributed database are Apache Cassandra, HBase, Ignite, etc.

#### Homogeneous DDB

Those database systems which execute on the same operating system and use the same application process and carry the same hardware devices.

#### Heterogeneous DDB

Those database systems which execute on different operating systems under different application procedures, and carries different hardware devices.

#### Advantages of DDB

Modular development is possible in a distributed database, i.e., the system can be expanded by including new computers and connecting them to the distributed system.
One server failure will not affect the entire data set.

