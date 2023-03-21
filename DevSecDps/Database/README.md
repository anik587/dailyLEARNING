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

## Relational Database

This database is based on the relational data model, which stores data in the form of rows(tuple) and columns(attributes), and together forms a table(relation). 
A relational database uses SQL for storing, manipulating, as well as maintaining the data. 

E.F. Codd invented the database in 1970. 
Each table in the database carries a key that makes the data unique from others. 
Examples of Relational databases are MySQL, Microsoft SQL Server, Oracle, etc.

![9.png](img/9.png)
![10.png](img/10.png)
![11.png](img/11.png)
![12.png](img/12.png)
![13.png](img/13.png)

#### Properties of Relational Database

There are following four commonly known properties of a relation model known as ACID properties where:

**A means Atomicity:** This ensures the data operation will complete either with success or with failure. 
It follows the 'all or nothing' strategy. 
For example, a transaction will either be committed or will abort.

**C means Consistency:** If we perform any operation over the data, its value before and after the operation should be preserved. 
For example, the account balance before and after the transaction should be correct, i.e., it should remain conserved.

**I means Isolation:** There can be concurrent users for accessing data at the same time from the database. 
Thus, isolation between the data should remain isolated. 
For example, when multiple transactions occur at the same time, one transaction effects should not be visible to the other transactions in the database.

**D means Durability:** It ensures that once it completes the operation and commits the data, data changes should remain permanent.

# NoSQL Database

Non-SQL/Not Only SQL is a type of database that is used for storing a wide range of data sets. 
It is not a relational database as it stores data not only in tabular form but in several different ways. 
It came into existence when the demand for building modern applications increased. 
Thus, NoSQL presented a wide variety of database technologies in response to the demands. 
We can further divide a NoSQL database into the following four types:

![b.png](img/b.png)


**Key-value storage:** It is the simplest type of database storage where it stores every single item as a key (or attribute name) holding its value, together.

![0.png](img/0.png)
![1.png](img/1.png)
![2.png](img/2.png)

**Wide-column stores:** It is similar to the data represented in relational databases. Here, data is stored in large columns together, instead of storing in rows.

![3.png](img/3.png)
![4.png](img/4.png)
![5.png](img/5.png)

**Document-oriented Database:** A type of database used to store data as JSON-like document. It helps developers in storing data by using the same document-model format as used in the application code.

![6.png](img/6.png)
![7.png](img/7.png)
![8.png](img/8.png)

**Graph Databases:** It is used for storing vast amounts of data in a graph-like structure. Most commonly, social networking websites use the graph database.

![14.png](img/14.png)
![15.png](img/15.png)
![16.png](img/16.png)

#### Advantages of NoSQL Database

It enables good productivity in the application development as it is not required to store data in a structured way.
It is a better option for managing and handeling large data sets.
It provides high scalability.
Users can quickly access data from the database through key-value.

# Cloud Database

A type of databases where data is stored in a virtual environment abd executes iver tge cloud computing platform.
It provides users with various cloud computing services (SaaS, PaaS, IaaS, etc.) for accessing the database. 
There are numerous cloud platforms, but the best options are:

**Amazon Web Services(AWS)**

**Microsoft Azure**

**Kamatera**

**PhonixNAP**

**ScienceSoft**

**Google Cloud SQL, etc.**

# Object-oriented Databases

The type of database that uses the object-based data model approach for storing data in the database system. 
The data is represented and stored as objects which are similar to the objects used in the object-oriented programming language, i.e. Realm, MongoDB

# Hierarchical Database

It is the type of database that stores data in the form of parent-children relationship nodes. 
Here, it organizes data in a tree-like structure. 
Data get stored in the form of records that are connected via links. 
Each child record in the tree will contain only one parent. 
On the other hand, each parent record can have multiple child records.

![c.png](img/c.png)

# Network Databases

It is the database that typically follows the network data model. 
Here, the representation of data is in the form of nodes connected via links between them. 
Unlike the hierarchical database, it allows each record to have multiple children and parent nodes to form a generalized graph structure.

# Personal Database

Collecting and storing data on the user's system defines a Personal Database. 
This database is basically designed for a single user.

### Advantages of Personal Database

It is simple and easy to handle. 
It occupies less storage space as it is small in size

# Operational Database

The type of database which creates and updates the databases in real-time,
It is basically designed for executing and handling the daily data operations in several business.
For example An organization uses operational databases for managing per day transactions.

# Enterprise Database

Large organizations or enterprises use this database for managing a massive amount of data. 
It helps organizations to increase and improve their efficiency. 
Such a database allows simultaneous access to users.

#### Advantages of Enterprise Database

Multi processes are supportable over the Enterprise database.
It allows executing parallel queries on the system.


# Search Database

Search Databases stores data into complex data format which gives realtime actionable insights.

![17.png](img/17.png)
![18.png](img/18.png)
![19.png](img/19.png)
![20.png](img/20.png)


## Database concepts

#### RDBMS

RDBMS stands for Relational Database Management System.
RDBMS is collection of programs & compatibilities that enables IT Teams.
RDBMS store data in the form of tables.
We cannot use duplicate value for primary key.
Maximum length of primary key 900 bytes.

#### Database Table

A table is a collection of related data entries and consist of column & rows.
A row is each individual entry that exist in a table.
A column holds specific information about every record in a table.
Columns can be arranged in vertical and rows can be arranged as horizontal.
THe column in table also called fields and rows called records.

#### Foreign key

A foreign key is a key used to link two tables together.
It is also called referencing key.
A foreign key is combination of column whose value match primary key attributes.
Hence, it used for creating & maintaining the relationship between the two relations.

#### Primary key

A primary key is a minimal set of attributes in a table that uniquely identify rows in that table i.e. tuples.
When multiple column used as primary key its known as composite primary key.
When using the composite key you should use as minimum key as possible.
The more column you use for primary key the more space you required.
Primary key has unique data.
Primary key cannot have null value.

#### Composite key

A composite key is sql can be defined as a combination of multiple column, and these columns are used to identify all the row
that are involved uniquely.
Even though single column can't identify any row uniquely, a combination of over one column can uniquely identify any record.

#### Index

SQL index is a table used to speed up the searching of the data.
It also recover large amount of data from tables.
Index requires its own space in storage.
Index is a pointer to data in a table.
An index is same to index in the back of the book.
Index is also unique constrain.

#### Normalization

Normalization is a profess of restructuring the data in data.
THere is no redundancy of data, all data stored in one place.
It eliminates characteristics like insertion, update and deletion anomalies.
It converts large table in small tables and link them by relation.
The purpose of normalization is sql is to eliminate redundant data and ensure data is stored logically.
The Theory of Data Normalization in MySQL server is still being developed further. 
For example, there are discussions even on 6th Normal Form. 
However, in most practical applications, normalization achieves its best in 3rd Normal Form. 
The evolution of Normalization in SQL theories is illustrated below

![d.png](img/d.png)

##### 1NF (First Normal Form) Rules

![e1.png](img/e1.png)

Each table cell should contain a single value.
Each record needs to be unique.

![e2.png](img/e2.png)

##### 2NF (Second Normal Form) Rules

Rule 1- Be in 1NF
Rule 2- Single Column Primary Key that does not functionally dependant on any subset of candidate key relation

![f.png](img/f.png)

##### 3NF (Third Normal Form) Rules

Rule 1- Be in 2NF
Rule 2- Has no transitive functional dependencies

![e1.png](img/g.png)

#### De-normalization

It is inverse profess of Normalization.
When converted all small table want to make single table then we have to use de-normalization.
De-normalization is a technique used by database to optimize the efficiency of database.
This method allows to add mixed data into normal data.
There are three types of de-normalization:

Join rows from different tables, so you don't have to use queries with JOIN.

Perform aggregate calculations like SUM() or COUNT() or MAX() or others, so you don't have to use queries with GROUP BY.

Pre-calculate expensive calculations, so you don't have to use queries with complex expressions in the select-list.

##### Pros of De-normalization:

Retrieving data is faster since we do fewer joins
Queries to retrieve can be simpler(and therefore less likely to have bugs), 
since we need to look at fewer tables.

#####  Cons of De-normalization:

Updates and inserts are more expensive.
De-normalization can make update and insert code harder to write.
Data may be inconsistent.
Data redundancy necessitates more storage.

