# 🎓 Backend Development Curriculum & Assignments (1 to 15)
### ITM Skills University — Department of Computer Science & Engineering
**Student Name:** Raj Rasal | **Student ID:** 150096725066

Welcome to the comprehensive backend development assignment repository. This curriculum is designed to guide students progressively from core REST API principles to production-grade distributed architectures and real-time WebSocket applications.

---

## 🌐 Live Deployment & Project Directory

| # | Assignment Title | Tech Stack & Core Concepts | Live Production URL | Folder Link |
|:---:|:---|:---|:---|:---|
| **01** | **Hotel Management API** | Node.js, Express.js, Static Data, bcrypt, Passport-Local | [hotelmanagementapi-74g8.onrender.com](https://hotelmanagementapi-74g8.onrender.com/) | [Assignment 01](./Assignment%2001%20-%20Hotel%20Management%20API) |
| **02** | **Hospital Management API** | Node.js, Express.js, MongoDB, Mongoose, Passport Auth | [hospital-management-api-2.onrender.com](https://hospital-management-api-2.onrender.com/) | [Assignment 02](./Assignment%2002%20-%20Hospital%20Management%20API) |
| **03** | **Restaurant Management API** | Node.js, Express.js, MongoDB Atlas, JWT Auth, Bcrypt | [assignment-3-restaurant-management-api-lp8b.onrender.com](https://assignment-3-restaurant-management-api-lp8b.onrender.com/) | [Assignment 03](./Assignment%2003%20-%20Restaurant%20Management%20API) |
| **04** | **Salon Management API** | Node.js, Express.js, Supabase (PostgreSQL), Supabase Auth | [salonmanagementapi.onrender.com](https://salonmanagementapi.onrender.com/) | [Assignment 04](./Assignment%2004%20-%20Salon%20Management%20API) |
| **05** | **Tic Tac Toe Multiplayer Game** | Node.js, Express.js, Socket.io, Real-time Rooms | [tic-tac-toe-qxvh.onrender.com](https://tic-tac-toe-qxvh.onrender.com/) | [Assignment 05](./Assignment%2005%20-%20Tic%20Tac%20Toe%20Socket%20Game) |
| **06** | **Library Management API** | Node.js, Express.js, Firebase Firestore/Auth, Swagger Docs | [librarymanagementapi-syeu.onrender.com](https://librarymanagementapi-syeu.onrender.com/)<br>• [Swagger UI Docs](https://librarymanagementapi-syeu.onrender.com/api-docs) | [Assignment 06](./Assignment%2006%20-%20Library%20Management%20API) |
| **07** | **E-Commerce Product & Cart API** | Node.js, Express.js, `fs/promises` JSON Storage, Sessions | [assignment-7-e-commerce-product-and.onrender.com](https://assignment-7-e-commerce-product-and.onrender.com/) | [Assignment 07](./Assignment%2007%20-%20Ecommerce%20Product%20%26%20Cart%20API) |
| **08** | **Gym & Fitness Management API** | Node.js, Express.js, MongoDB, Mongoose, Passport-Local | [assignmentsexpressjsmongodbsupabasefireb.onrender.com](https://assignmentsexpressjsmongodbsupabasefireb.onrender.com/) | [Assignment 08](./Assignment%2008%20-%20Gym%20Management%20API) |
| **09** | **Pharmacy Management API** | Node.js, Express.js, MongoDB Atlas, JWT, RBAC | [assignmentsexpressjsmongodbsupabasefireb-9hre.onrender.com](https://assignmentsexpressjsmongodbsupabasefireb-9hre.onrender.com/) | [Assignment 09](./Assignment%2009%20-%20Pharmacy%20Management%20API) |
| **10** | **Car Rental & Fleet System API** | Node.js, Express.js, Supabase Database & Auth | [assignmentsexpressjsmongodbsupabasefireb-kncn.onrender.com](https://assignmentsexpressjsmongodbsupabasefireb-kncn.onrender.com/) | [Assignment 10](./Assignment%2010%20-%20Car%20Rental%20System%20API) |
| **11** | **Collaborative Whiteboard** | Node.js, Express.js, Socket.io, Real-time Canvas Sync | [assignment-11-hk3b.onrender.com](https://assignment-11-hk3b.onrender.com/) | [Assignment 11](./Assignment%2011%20-%20Real-Time%20Collaborative%20Whiteboard) |
| **12** | **Event Ticketing API** | Node.js, Express.js, Firebase Firestore, Swagger OpenAPI | [assignments12.onrender.com](https://assignments12.onrender.com/)<br>• [Swagger UI Docs](https://assignments12.onrender.com/api-docs) | [Assignment 12](./Assignment%2012%20-%20Event%20Management%20%26%20Ticketing%20API) |
| **13** | **Real-Time Group Chat** | Node.js, Express.js, Socket.io, Chat Rooms, Typing, Presence | [assignments13.onrender.com](https://assignments13.onrender.com/) | [Assignment 13](./Assignment%2013%20-%20Real-Time%20Chat%20Application) |
| **14** | **Multiplayer Live Quiz Platform** | Node.js, Express.js, Socket.io, Live Timers, Leaderboard | [assignment14-dyzn.onrender.com](https://assignment14-dyzn.onrender.com/)<br>• [Host Screen](https://assignment14-dyzn.onrender.com/host.html)<br>• [Player GamePad](https://assignment14-dyzn.onrender.com/player.html) | [Assignment 14](./Assignment%2014%20-%20Real-Time%20Live%20Quiz%20Platform) |
| **15** | **Real-Time Live Auction Platform** | Node.js, Express.js, Socket.io, Live Outbidding & Anti-Snipe | [assignment15-yplc.onrender.com](https://assignment15-yplc.onrender.com/) | [Assignment 15](./Assignment%2015%20-%20Real-Time%20Live%20Auction%20Platform) |

---

## 🛠️ Environment & Tooling Prerequisites

1. **Node.js**: v18.x or v20.x LTS ([nodejs.org](https://nodejs.org/))
2. **npm**: v9.x or higher
3. **Database Accounts / Tools**:
   - MongoDB Compass / MongoDB Atlas ([mongodb.com/atlas](https://www.mongodb.com/atlas))
   - Supabase Account ([supabase.com](https://supabase.com/))
   - Firebase Console ([console.firebase.google.com](https://console.firebase.google.com/))

---

## 📐 General Code Quality & Architectural Standards

All submissions across all assignments maintain the following engineering practices:
1. **MVC / Layered Architecture**:
   - `controllers/`: Request handling and response logic
   - `models/`: Data schema and database interfaces
   - `routes/`: Express router endpoint declarations
   - `middleware/`: Authentication, validation, logging, and error handling
   - `config/`: Database connections and third-party SDK configurations
2. **Security & Secrets Management**:
   - Never commit sensitive keys, JWT secrets, database connection strings, or service account files (`.env` must be in `.gitignore`).
   - Clean `.env.example` provided in every project.
3. **Robust Error Handling**:
   - Standardized JSON responses with standard HTTP status codes (`200`, `201`, `400`, `401`, `403`, `404`, `429`, `500`).
4. **Real-time Event Conventions (Socket.io)**:
   - Consistent event naming conventions: `noun:action` (e.g. `board:join`, `chat:send`, `bid:placed`).

---

© 2026 ITM Skills University — Department of Computer Science & Engineering. All rights reserved.
