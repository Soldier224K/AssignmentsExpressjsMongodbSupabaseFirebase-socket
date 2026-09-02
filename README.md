# 🎓 Backend Development Curriculum & Assignments (1 to 15)
### ITM Skills University — Department of Computer Science & Engineering

Welcome to the comprehensive backend development assignment repository. This curriculum is designed to guide students progressively from core REST API principles to production-grade distributed architectures and real-time WebSocket applications.

---

## 🧭 Assignment Roadmap & Overview

| # | Assignment Title | Tech Stack & Core Concepts | Level | Folder Link |
|:---:|:---|:---|:---:|:---|
| **01** | **Hotel Management API** | Node.js, Express.js, Static/In-Memory Data, bcrypt, Passport-Local | Beginner | [View Assignment 01](./Assignment%2001%20-%20Hotel%20Management%20API/README.md) |
| **02** | **Hospital Management API** | Node.js, Express.js, MongoDB, Mongoose, Passport Auth, CRUD | Beginner-Int | [View Assignment 02](./Assignment%2002%20-%20Hospital%20Management%20API/README.md) |
| **03** | **Restaurant Management API** | Node.js, Express.js, MongoDB Atlas, JWT Auth, Bcrypt, Dotenv | Intermediate | [View Assignment 03](./Assignment%2003%20-%20Restaurant%20Management%20API/README.md) |
| **04** | **Salon Management API** | Node.js, Express.js, Supabase (PostgreSQL), Supabase Auth/Client | Intermediate | [View Assignment 04](./Assignment%2004%20-%20Salon%20Management%20API/README.md) |
| **05** | **Tic Tac Toe Multiplayer Game** | Node.js, Express.js, Socket.io, Real-time Rooms, Game State Engine | Intermediate | [View Assignment 05](./Assignment%2005%20-%20Tic%20Tac%20Toe%20Socket%20Game/README.md) |
| **06** | **Library Management API** | Node.js, Express.js, Firebase Firestore/Auth, Rate Limiting, Swagger Docs | Intermediate-Adv | [View Assignment 06](./Assignment%2006%20-%20Library%20Management%20API/README.md) |
| **07** | **E-Commerce Product & Cart API** | Node.js, Express.js, JSON File Storage/Static, Query Filtering, Middleware | Beginner | [View Assignment 07](./Assignment%2007%20-%20Ecommerce%20Product%20%26%20Cart%20API/README.md) |
| **08** | **Gym & Fitness Management API** | Node.js, Express.js, MongoDB, Mongoose, Passport-Local Session Auth | Beginner-Int | [View Assignment 08](./Assignment%2008%20-%20Gym%20Management%20API/README.md) |
| **09** | **Pharmacy Management API** | Node.js, Express.js, MongoDB Atlas, JWT, Role-Based Access Control (RBAC) | Intermediate | [View Assignment 09](./Assignment%2009%20-%20Pharmacy%20Management%20API/README.md) |
| **10** | **Car Rental & Fleet System API** | Node.js, Express.js, Supabase Database & Auth, Booking Workflow | Intermediate | [View Assignment 10](./Assignment%2010%20-%20Car%20Rental%20System%20API/README.md) |
| **11** | **Real-Time Collaborative Whiteboard** | Node.js, Express.js, Socket.io, Real-time Canvas Sync & Room State | Advanced | [View Assignment 11](./Assignment%2011%20-%20Real-Time%20Collaborative%20Whiteboard/README.md) |
| **12** | **Event Management & Ticketing API** | Node.js, Express.js, Firebase Firestore, Rate Limiting, Swagger OpenAPI | Advanced | [View Assignment 12](./Assignment%2012%20-%20Event%20Management%20%26%20Ticketing%20API/README.md) |
| **13** | **Real-Time Group Chat Application** | Node.js, Express.js, Socket.io, Chat Rooms, Typing Indicators, Presence | Real-time Focus | [View Assignment 13](./Assignment%2013%20-%20Real-Time%20Chat%20Application/README.md) |
| **14** | **Real-Time Live Quiz & Trivia Platform**| Node.js, Express.js, Socket.io, Live Timers, Dynamic Leaderboard, Host/Player | Real-time Focus | [View Assignment 14](./Assignment%2014%20-%20Real-Time%20Live%20Quiz%20Platform/README.md) |
| **15** | **Real-Time Live Auction & Bidding** | Node.js, Express.js, Socket.io, Live Outbidding Engine, Expiry Timers | Real-time Focus | [View Assignment 15](./Assignment%2015%20-%20Real-Time%20Live%20Auction%20Platform/README.md) |

---

## 🛠️ General Environment & Tooling Prerequisites

Students should ensure their local development environment is set up with:
1. **Node.js**: v18.x or v20.x LTS ([nodejs.org](https://nodejs.org/))
2. **npm**: v9.x or higher
3. **Git**: Installed and configured with GitHub credentials
4. **Postman / Thunder Client**: For API testing and request collection exports
5. **Database Accounts / Tools**:
   - MongoDB Community Edition / MongoDB Compass (for local DB assignments)
   - MongoDB Atlas Account ([mongodb.com/atlas](https://www.mongodb.com/atlas))
   - Supabase Account ([supabase.com](https://supabase.com/))
   - Firebase Console Account ([console.firebase.google.com](https://console.firebase.google.com/))

---

## 📐 General Code Quality & Architectural Standards

All submissions across all assignments are expected to maintain the following engineering practices:

1. **MVC / Layered Architecture**:
   - `controllers/`: Request handling and response logic
   - `models/`: Data schema and database interfaces
   - `routes/`: Express router endpoint declarations
   - `middleware/`: Authentication, validation, logging, and error handling
   - `config/`: Database connections and third-party SDK configurations
2. **Security & Secrets Management**:
   - Never commit sensitive keys, JWT secrets, database connection strings, or service account files (`.env` must be in `.gitignore`).
   - Provide a clean `.env.example` file in every project.
3. **Robust Error Handling**:
   - Use standard HTTP status codes (`200`, `201`, `400`, `401`, `403`, `404`, `429`, `500`).
   - Standardized JSON error response format:
     ```json
     {
       "success": false,
       "message": "Descriptive error message",
       "error": "Error details (optional in development)"
     }
     ```
4. **Real-time Event Conventions (Socket.io)**:
   - Consistent event naming conventions: `noun:action` (e.g. `room:join`, `message:receive`, `bid:placed`).
   - Always acknowledge or broadcast updates with structured payloads.

---

## 📊 Standard Grading Rubric (100 Marks per Assignment)

- **Core Functionality & Requirements (40 Marks)**: All mandatory endpoints/events work as specified.
- **Architecture & Code Organization (20 Marks)**: Clean folder structure, modular code, no code duplication.
- **Authentication, Authorization & Security (15 Marks)**: Safe password hashing, token validation, role checking.
- **Data Validation & Error Handling (15 Marks)**: Handled edge cases, bad inputs, meaningful error status codes.
- **Documentation & Testing (10 Marks)**: Detailed README, Postman collection / demo video link, clear setup steps.

---

© 2026 ITM Skills University. All rights reserved.
