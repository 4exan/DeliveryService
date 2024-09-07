
# Delivery Web-Service

Full-stack Delivery service project.


## Overview:

Project that work with 2 different sides:
- Frontend: writen with React;
- Backend: writen on Java with Spring Boot framework;
### Used tools/technologies

### Language:
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)
### Backend technologies:
[![Spring](https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white)]()
[![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)]()
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
### Frontend technologies:
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
### Database:
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/) 
### IDE/Code Editor
[![Intellij IDEA](https://img.shields.io/badge/IntelliJ_IDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white)]()
[![VSCode](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)]()

## Overview

This project was made to test acquired skills in full-stack development.
Backend fully writen in Java with Spring Framework.
Key backend features:
- JWT system implementation;
- Spring Security authorization;
- Database with several related tables;

Frontend writen with React, for requests and responses i used AXIOS. Page styling made with Tailwindcss.
Key frontend features:
- Axios usage for requests/response;
- Multipage React app (Routing and Navigation);

### Actors

Currently service made for only 2 actors:
- User;
- Admin (Worker);

User have 2 option how he can start using service: login in his existing account or create new one. If user already have account he can login to service by pressing login button on navbar and fill login form, wich in case the credentials was entered correctly - user redirected to his profile. User also can see his dashboard, where his packages gonna display.

Admin, or worker - has more available features than regular user.
Admin can manage registered users profiles, can see all packages and edit them. And he also can receive and deliver packages;

### Endpoints

Whole system currently handle 3 controllers.
- UserManagement controller
- Package controller
- Department controller (Uses only in development, not implemented in project)

## UserManagement controller
| Method  | URL | Params | Description |
| ---- | ------------- |-------------|-|
| POST  | /auth/registration  | @RequestBody UserRR req | Register new user 
|POST| /auth/login | @RequestBody UserRR req| Login user
|POST|/auth/refresh|@RequestBody UserRR req| Refresh user's token
|GET|/admin/get-all-users| - | Return all users
|GET|/admin/get-user/{userId}|@PathVariable int userId| Return user by its ID
|PUT|/admin/update/{userID}|@PathVariable int userId, @RequestBody UserRR req| Update user
|DELETE|/admin/delete/{userID}|@PathVariable int userId|Delete user by its ID
|GET|/cred/get-profile| - |Return user profile based on token |

## Package controller (/package)
| Method  | URL | Params | Description |
|-|-|-|-|
|GET|/get-all|-|Return all packages
|GET|/get/{id}|@PathVariable long id|Return package by its ID
|PUT|/edit/{packageID}|@PathVariable long packageId, @RequestBody PackageRR req| Edit package by its ID
|PUT|/status/{packageId}|@PathVariable long packageId, @RequestBody PackageRR req|Set new status for package
|POST|/new|@RequestBody PackageRR request|Create new package
|GET|/get/my|-|Return users packages base on its token

## Department controller (/department)
| Method  | URL | Params | Description |
|-|-|-|-|
|GET|/get-all|-|Return all departments
|GET|/{id}|@PathVariable String id|Return department based on its ID
|POST|/new|@RequestBody DepartmentRR request|Create new department

## How this works
I wanted to make +- functional delivery service, and delivery service main purpose is to deliver. But i have no real packages and other thing so we can simulate work of this system. For example me, Ivan Chekhanovskyi, want to send box of chocolate to my friend Jhon Doe. And lucky for us, we both have Delivery Departments in our areas.
So mission is simple - i come to my post department, give them package and money, post workers deliver my package to Jhon's department, and he can receive it when it come's. Easy!

![Screenshot 2024-09-04 180710](https://github.com/user-attachments/assets/b59caf47-e4bd-43ec-b057-77a23ca0230d)

### Step 1
User register in delivery system, login in his profile and create invoice online. 

### Step 2
User come's to department with his package. Worker check ID of that package. If he find that created invoice and all data is fine, he take the package, mark's it and send it to shipment storage.
If some data is wrong or invoice is not created, he can create it by himself.

### Step 3
When package is ready to deliver, another worker with his portable device (phone or something, idk) scans package - it status automatically marks as DELIVERY-IN-PROGRESS (in our case we cant, scan package, but we can find it by id and change status manually). After scan worker load package to transport.

### Step 4
When package arived to destination department and worker unload all packages, he scan every package with his device. (Basicaly same process ans Step 3 but in revers)

### Step 5
Jhon see in his dashboard that package is delivered and he comes to department to receive it.
In department he say worker his name or phone to identify that he is the person for whom this package. When worker confirm that it's the person i send package to, he change status of package as RECEIVED, and give package to recipient.

## Database

For that project i use relative database PostgreSQL.
Currently used 4 tables:
- departments
- packages
- users
- workinghours

![Screenshot 2024-09-05 164337](https://github.com/user-attachments/assets/c1b72017-4ea7-4080-91f5-6cc00729f030)

Workinghours table uses for defining department working hours.

## User Demo

### Registration
![Screenshot 2024-09-07 175217](https://github.com/user-attachments/assets/0f30a8db-9418-4839-a91b-dfd767ed656e)
### Login
![Screenshot 2024-09-07 175246](https://github.com/user-attachments/assets/b009e614-933e-4634-a5be-4261af3ea180)
### Profile
![image](https://github.com/user-attachments/assets/7a110ebe-f576-44ef-bda1-bbc2fff5cea2)
### Dashboard (empty)
![image](https://github.com/user-attachments/assets/5f0b6f96-f43d-4e80-adbe-7fb639f90ff6)
### Invoice creation
![image](https://github.com/user-attachments/assets/04ca3e63-b1c0-47b1-b30e-d95363068eb1)
### Dashboard (with package info)
![image](https://github.com/user-attachments/assets/7e8c0b13-3255-4c0e-8dc8-4ce8ed62cbde)

## Admin Demo
### User Management
![image](https://github.com/user-attachments/assets/8c5694ac-0029-455d-8678-492f4dc255c2)
### Package info (search)
![image](https://github.com/user-attachments/assets/7461a68b-ab60-438b-aeef-d02d16cb5953)
### Package info (details)
![image](https://github.com/user-attachments/assets/452bfc1f-5350-40c6-9b4d-b6dfb24cdd22)
### Package info status confirmation
![image](https://github.com/user-attachments/assets/2e9368da-35b1-4e73-8ff8-dbd2474034ab)
### Package edit 
![image](https://github.com/user-attachments/assets/ad7beed9-351c-40eb-89d8-40f1f165c3bf)

