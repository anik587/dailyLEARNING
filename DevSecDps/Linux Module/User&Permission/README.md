# USER AND PERMISSIONS

##### There are 3 categories of user in linux system

##### Root User/Super User: unrestricted permission, administrative work
##### Regular / Standard User: Regular User to login, default /home/name directory
##### Service User: Relevant for linux server distros, each service will get own user, best practice for security, don't run service with root user

![directories](img/img.png)

##### Always 1 Root User per computer and can have multiple users and service users
![directories](img/img1.png)

##### In windows has a possibility of centrally managing users, you will not be able to change anything outside home directory

![directories](img/img2.png)
##### Difference between Linux and Windows User Management
![directories](img/img3.png)
##### That's why windows are much more preferred for workspace

![directories](img/img4.png)
##### In linux users are managed on that specific hardware

![directories](img/img5.png)
![directories](img/img6.png)
![directories](img/img7.png)
#### There are 2 different ways to manage permissions in Linux system
##### Give direct permission to user
##### Create a group and give permission to that group
![directories](img/img8.png)

#### Creating group and giving permission is more convenient because you just have to remove and to that group for permission
![directories](img/img9.png)
![directories](img/img10.1.png)
![directories](img/img10.2.png)
![directories](img/img10.3.png)

##### asdsadsad

![directories](img/img11.png)

##### Access control files
##### /etc/passwd: stores all users account information 
##### Information stored in following format USERNAME: PASSWORD: UID: GID: GECOS: HOMEDIR: SHELL
##### /etc/shadow
##### /etc/group: stores all groups