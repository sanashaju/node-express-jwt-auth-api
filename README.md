# node-express-jwt-auth-api
>A secure REST APIs built using Node.js, Express, and MongoDB with JWT authentication, role-based access, and CRUD operations for Users, Products, and Students.

<div>
  <img src="https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/-Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB + Mongoose" />
  <img src="https://img.shields.io/badge/-JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT (Authentication)" />
  <img src="https://img.shields.io/badge/-bcryptjs-003366?style=for-the-badge&logo=security&logoColor=white" alt="bcryptjs" />
  <img src="https://img.shields.io/badge/-dotenv-009639?style=for-the-badge&logo=dotenv&logoColor=white" alt="dotenv" />
  <img src="https://img.shields.io/badge/-Joi-FFB703?style=for-the-badge&logo=javascript&logoColor=black" alt="Joi Validation" />
  <a href="https://node-mongoose-jwt-apis.onrender.com/api-docs" target="_blank">
    <img src="https://img.shields.io/badge/-Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black" alt="Swagger API Docs" />
  </a>
</div>




---

## 🧭 Table of Contents

1. 📖 [Introduction](#-introduction)
2. ⚙ [Tech Stack](#-tech-stack)
3. 🔋 [Features](#-features)
4. 📦 [Quick Start (Setup Guide)](#-quick-start-setup-guide)
5. 📬 [Postman Collection](#-postman-collection)

## 📖 Introduction

This project demonstrates how to build a **secure REST API** using:
- **Express.js** for routing  
- **Mongoose** for MongoDB object modeling  
- **JWT** for authentication  
- **Middleware** for access control and validation  

It provides a ready-to-use backend for projects that need **user management**, **authentication**, **student and product CRUD**, and **role-based authorization**.

---

## ⚙ Tech Stack

| Technology | Description |
|-------------|-------------|
| **Node.js** | JavaScript runtime for building the server |
| **Express.js** | Web framework for building APIs |
| **MongoDB + Mongoose** | NoSQL database and ODM |
| **JWT (JSON Web Token)** | Authentication and authorization |
| **bcryptjs** | Password hashing |
| **dotenv** | Environment variable management |
| **Joi** | Schema validation |

---

## 🔋 Features

✅ **User Authentication & Authorization** (JWT)  
✅ **Role-based Access Control** (Admin/User)  
✅ **CRUD Operations** for Users, Students, and Products  
✅ **Validation** using Joi  
✅ **Secure Password Hashing** with bcrypt  
✅ **Error Handling Middleware**  
✅ **Query Filters** (e.g., `/api/users?role=admin&age=25`)  
✅ **Environment Config Support (.env)**  

---
## 📦 Quick Start (Setup Guide)

### 1️⃣ Clone the repository
```bash
git clone https://github.com/sanashaju/node-express-jwt-auth-api.git
cd node-express-jwt-auth-api
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Create `.env` file in the root directory
```env
# Server Port
PORT=9002

# Database name
DATABASE=node-express-jwt-auth-api-dev

# MongoDB Connection URI
MONGO_URI=mongodb+srv://sana:root123@mycluster.pzvjxqd.mongodb.net/

# JWT Secret Key for Authentication
JWT_SECRET=this_is_my_secret

# Node Environment: development or production
NODE_ENV=development

```

### 4️⃣ Start the server
```bash
npm run dev   # Development mode
npm start     # Production mode
```

Server will run on:  
👉 **http://localhost:9002**




--- 
## Swagger API documentation

```
swagger: '2.0'
info:
  title: REST API
  description: Auto-generated Swagger doc
  version: 1.0.0
host: localhost:9002
basePath: /
schemes:
  - http
paths:
  /api/auth/register:
    post:
      description: ''
      parameters:
        - name: body
          in: body
          schema:
            type: object
            properties:
              username:
                example: any
              email:
                example: any
              password:
                example: any
              role:
                example: any
              age:
                example: any
      responses:
        '201':
          description: Created
        '400':
          description: Bad Request
  /api/auth/login:
    post:
      description: ''
      parameters:
        - name: body
          in: body
          schema:
            type: object
            properties:
              email:
                example: any
              password:
                example: any
      responses:
        '200':
          description: OK
        '400':
          description: Bad Request
        '401':
          description: Unauthorized
  /api/users/:
    get:
      description: ''
      parameters:
        - name: age
          in: query
          type: string
        - name: role
          in: query
          type: string
      responses:
        '200':
          description: OK
  /api/users/{id}:
    get:
      description: ''
      parameters:
        - name: id
          in: path
          required: true
          type: string
      responses:
        '200':
          description: OK
        '400':
          description: Bad Request
        '404':
          description: Not Found
  /api/products/:
    post:
      description: ''
      parameters:
        - name: body
          in: body
          schema:
            type: object
            properties:
              title:
                example: any
              author:
                example: any
              price:
                example: any
              category:
                example: any
              publisher:
                example: any
              isbn:
                example: any
              stock:
                example: any
      responses:
        '201':
          description: Created
        '400':
          description: Bad Request
        '403':
          description: Forbidden
    get:
      description: ''
      parameters:
        - name: category
          in: query
          type: string
        - name: minPrice
          in: query
          type: string
        - name: maxPrice
          in: query
          type: string
      responses:
        '200':
          description: OK
  /api/products/{id}:
    patch:
      description: ''
      parameters:
        - name: id
          in: path
          required: true
          type: string
        - name: body
          in: body
          schema:
            type: object
            properties:
              title:
                example: any
              author:
                example: any
              price:
                example: any
              category:
                example: any
              publisher:
                example: any
              isbn:
                example: any
              stock:
                example: any
      responses:
        '200':
          description: OK
        '400':
          description: Bad Request
        '403':
          description: Forbidden
        '404':
          description: Not Found
    delete:
      description: ''
      parameters:
        - name: id
          in: path
          required: true
          type: string
      responses:
        '200':
          description: OK
        '403':
          description: Forbidden
        '404':
          description: Not Found

```

If you like this project, **please ⭐ star the repo!**