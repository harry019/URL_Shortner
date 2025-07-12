# 🔗 URL Shortener Service using Node.js 🚀

This is a fully functional **URL shortening service**, just like [bit.ly](https://bit.ly), built with **Node.js**, **Express**, and **MongoDB**. It supports creating short URLs, redirecting to original URLs, and tracking click analytics including timestamps.

---

## 📌 Features

- 🔸 Shorten long URLs into short links  
- 🔸 Redirect to original URLs on visit  
- 🔸 Track total clicks and visit timestamps  
- 🔸 Easy lookup by short ID  
- ✅ MVC-based clean code structure  

---

## 🧠 Tech Stack

| Tech         | Description                |
|--------------|----------------------------|
| Node.js      | JavaScript runtime         |
| Express.js   | Web framework              |
| MongoDB      | NoSQL database             |
| Mongoose     | ODM for MongoDB            |
| nanoid       | Secure short ID generator  |
| Postman      | For API testing            |

---

## 📁 Project Structure

url-shortener/
├── config/
│ └── db.js # MongoDB connection
├── controllers/
│ └── urlController.js # Business logic
├── models/
│ └── Url.js # Mongoose schema
├── routes/
│ └── url.js # API routes
├── index.js # App entry point
├── package.json # Project metadata
└── README.md

---

## 🔗 API Endpoints

> Base URL → `http://localhost:8000`

| Method | Endpoint              | Description                        |
|--------|-----------------------|------------------------------------|
| POST   | `/url`                | Create a short URL                 |
| GET    | `/:shortId`           | Redirect to original URL           |
| GET    | `/analytics/:shortId` | View total clicks and visit times  |

---
