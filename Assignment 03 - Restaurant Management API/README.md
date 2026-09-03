# 🍽️ Restaurant Management API

A robust RESTful API built with **Node.js**, **Express**, **MongoDB (Mongoose)**, and **Socket.io** for managing restaurant menu items and processing orders in real time.

---

## 🌐 Live Deployment

The API is deployed and accessible on Render:

- **Primary URL:** [https://assignment-3-restaurant-management-api-lp8b.onrender.com](https://assignment-3-restaurant-management-api-lp8b.onrender.com)
- **Menu Endpoint:** [https://assignment-3-restaurant-management-api-lp8b.onrender.com/api/menu](https://assignment-3-restaurant-management-api-lp8b.onrender.com/api/menu)
- **Orders Endpoint:** [https://assignment-3-restaurant-management-api-lp8b.onrender.com/api/orders](https://assignment-3-restaurant-management-api-lp8b.onrender.com/api/orders)

---

## 🚀 Features

- **Menu Management (CRUD):**
  - Create, read, update, and delete menu items.
  - Category filtering (`Appetizer`, `Main Course`, `Dessert`, `Beverage`).
  - Item availability tracking.

- **Order Processing:**
  - Create new orders with table numbers and item references.
  - Automatic calculation of `totalPrice` based on referenced menu items.
  - Fetch all orders with full menu item details using Mongoose `populate()`.
  - Update order status (`Pending`, `Preparing`, `Ready`, `Served`).

- **Real-Time WebSocket Updates (Socket.io):**
  - Emits `newOrder` event to connected clients when an order is created.
  - Emits `orderStatusUpdated` event when an order status changes.
  - Enables real-time kitchen display screens and waitstaff tracking.

---

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas with Mongoose ODM
- **Real-Time Communication:** Socket.io
- **Middleware:** CORS, dotenv
- **Hosting:** Render

---

## 📁 Project Structure

```text
Assignment3/
├── config/
│   └── db.js              # MongoDB database connection configuration
├── models/
│   ├── MenuItem.js        # Mongoose schema for menu items
│   └── Order.js           # Mongoose schema for orders
├── routes/
│   ├── menuRoutes.js      # Routes and handlers for /api/menu
│   └── orderRoutes.js     # Routes and handlers for /api/orders
├── .env                   # Environment variables (git-ignored)
├── .gitignore             # Git ignore file
├── package.json           # Dependencies and scripts
├── server.js              # Express app and Socket.io server entry point
└── README.md              # Project documentation
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and configure the following variables:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

---

## 📥 Getting Started Locally

### 1. Clone the repository

```bash
git clone git@github.com:Soldier224K/assignment-3-restaurant-management-api.git
cd assignment-3-restaurant-management-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file in the root folder with your MongoDB connection string and preferred port:

```env
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/restaurantDB
```

### 4. Run the server

```bash
node server.js
```

or if using `npm start`:

```bash
npm start
```

The server should start on `http://localhost:3000`.

---

## 📡 API Reference

### Base URL
- **Local:** `http://localhost:3000`
- **Production:** `https://assignment-3-restaurant-management-api-lp8b.onrender.com`

---

### 🥗 Menu Endpoints (`/api/menu`)

| Method | Endpoint | Description | Query Parameters |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/menu` | Create a new menu item | None |
| `GET` | `/api/menu` | Retrieve all menu items | `?category=` (Optional) |
| `PUT` | `/api/menu/:id` | Update an existing menu item | None |
| `DELETE` | `/api/menu/:id` | Delete a menu item by ID | None |

#### 1. Create Menu Item
- **Endpoint:** `POST /api/menu`
- **Body:**
```json
{
  "name": "Classic Cheeseburger",
  "description": "Juicy beef patty with cheddar cheese, lettuce, and tomato.",
  "price": 14.99,
  "category": "Main Course",
  "availability": true
}
```
> **Allowed categories:** `'Appetizer'`, `'Main Course'`, `'Dessert'`, `'Beverage'`

#### 2. Get All Menu Items
- **Endpoint:** `GET /api/menu`
- **Filter by category:** `GET /api/menu?category=Main Course`
- **Response:**
```json
[
  {
    "_id": "6a86989cf4d90bb0dfd527fc",
    "name": "Classic Cheeseburger",
    "description": "Juicy beef patty with cheddar cheese, lettuce, and tomato.",
    "price": 14.99,
    "category": "Main Course",
    "availability": true,
    "createdAt": "2026-08-20T06:03:08.803Z",
    "updatedAt": "2026-08-20T06:03:08.803Z"
  }
]
```

#### 3. Update Menu Item
- **Endpoint:** `PUT /api/menu/:id`
- **Body:**
```json
{
  "price": 15.99,
  "availability": false
}
```

#### 4. Delete Menu Item
- **Endpoint:** `DELETE /api/menu/:id`
- **Response:**
```json
{
  "message": "Menu item deleted"
}
```

---

### 📦 Order Endpoints (`/api/orders`)

| Method | Endpoint | Description | Real-time Event Emitted |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/orders` | Place a new order | `newOrder` |
| `GET` | `/api/orders` | Get all orders with populated menu items | None |
| `PUT` | `/api/orders/:id/status` | Update order status | `orderStatusUpdated` |

#### 1. Create Order
- **Endpoint:** `POST /api/orders`
- **Body:**
```json
{
  "tableNumber": 5,
  "items": [
    "6a86989cf4d90bb0dfd527fc"
  ]
}
```
> Note: `totalPrice` is automatically calculated from the database based on the provided item IDs. Default status is `"Pending"`.

#### 2. Get All Orders
- **Endpoint:** `GET /api/orders`
- **Response:**
```json
[
  {
    "_id": "6a8699bcf4d90bb0dfd52801",
    "tableNumber": 5,
    "items": [
      {
        "_id": "6a86989cf4d90bb0dfd527fc",
        "name": "Classic Cheeseburger",
        "price": 14.99,
        "category": "Main Course"
      }
    ],
    "totalPrice": 14.99,
    "status": "Pending",
    "createdAt": "2026-08-20T06:10:00.000Z",
    "updatedAt": "2026-08-20T06:10:00.000Z"
  }
]
```

#### 3. Update Order Status
- **Endpoint:** `PUT /api/orders/:id/status`
- **Body:**
```json
{
  "status": "Preparing"
}
```
> **Allowed statuses:** `'Pending'`, `'Preparing'`, `'Ready'`, `'Served'`

---

## ⚡ Real-Time Socket.io Events

The server initializes a Socket.io instance listening on the same HTTP server with CORS enabled.

### Available Events:

1. **`newOrder`**:
   - Broadcast when a new order is successfully created via `POST /api/orders`.
   - Payload: Complete order object.

2. **`orderStatusUpdated`**:
   - Broadcast when an order's status is modified via `PUT /api/orders/:id/status`.
   - Payload: Updated order object with populated items.

### Client Example:

```javascript
import { io } from "socket.io-client";

const socket = io("https://assignment-3-restaurant-management-api-lp8b.onrender.com");

socket.on("connect", () => {
  console.log("Connected to socket server with ID:", socket.id);
});

socket.on("newOrder", (order) => {
  console.log("New order placed:", order);
});

socket.on("orderStatusUpdated", (updatedOrder) => {
  console.log("Order status updated:", updatedOrder);
});
```

---

## 🧪 Testing with cURL

### Get all menu items:
```bash
curl -X GET "https://assignment-3-restaurant-management-api-lp8b.onrender.com/api/menu"
```

### Filter menu by category:
```bash
curl -X GET "https://assignment-3-restaurant-management-api-lp8b.onrender.com/api/menu?category=Main%20Course"
```

### Create a menu item:
```bash
curl -X POST "https://assignment-3-restaurant-management-api-lp8b.onrender.com/api/menu" \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Iced Tea",
       "description": "Freshly brewed lemon iced tea",
       "price": 3.50,
       "category": "Beverage",
       "availability": true
     }'
```

---

## 📄 License

This project is licensed under the [ISC](LICENSE) License.
