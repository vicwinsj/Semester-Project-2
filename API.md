# 📘 HammerPrice API Documentation

This document outlines how the HammerPrice frontend interacts with the [Noroff Auction API](https://v2.api.noroff.dev/docs/static/index.html#/auction-profiles). All endpoints are part of a public backend hosted by Noroff.

---

## 🌐 Base URL

```
https://api.noroff.dev/api/v2/auction
```

---

## 🔐 Authentication

### ▶️ Register a New User

```
POST /auth/register
```

**Body:**

```json
{
  "name": "yourusername",
  "email": "yourname@stud.noroff.no",
  "password": "yourpassword"
}
```

> ⚠️ Only emails ending with `@stud.noroff.no` are accepted.

---

### ▶️ Log In

```
POST /auth/login
```

**Body:**

```json
{
  "email": "yourname@stud.noroff.no",
  "password": "yourpassword"
}
```

**Response:**

```json
{
  "accessToken": "your-token",
  "name": "yourusername"
}
```

> Save the `accessToken` in localStorage and use it in the `Authorization` header for protected routes.

---

## 📦 Listings

### ▶️ Get All Listings

```
GET /listings?_active=true&_seller=true
```

Returns all active listings, including seller and bid information.

---

### ▶️ Get a Single Listing

```
GET /listings/{id}
```

---

### ▶️ Create a New Listing

```
POST /listings
```

**Headers:**

```
Authorization: Bearer <accessToken>
Content-Type: application/json
```

**Body:**

```json
{
  "title": "Vintage Watch",
  "description": "Mint condition. 1960s Rolex.",
  "tags": ["watch", "vintage"],
  "media": ["https://example.com/image.jpg"],
  "endsAt": "2025-06-30T18:00:00Z"
}
```

---

## 💰 Bidding

### ▶️ Place a Bid

```
POST /listings/{id}/bids
```

**Headers:**

```
Authorization: Bearer <accessToken>
Content-Type: application/json
```

**Body:**

```json
{
  "amount": 1500
}
```

---

## 🔍 Search Listings

To filter listings by title:

```
GET /listings?title_like=watch
```

Returns listings with "watch" in the title.

---

## 👤 User Profile

### ▶️ Get Profile Info

```
GET /profiles/{username}
```

---

### ▶️ Get Listings by User

```
GET /profiles/{username}/listings
```

---

## ⚠️ Notes

- All authenticated requests must include a valid `accessToken`.
- Only logged-in users can create listings or place bids.
- The `media` field must include a valid image URL (e.g. from Cloudinary or Imgur).

---

## 📎 Example Usage (JavaScript + Vite)

```js
const API_BASE = import.meta.env.VITE_API_BASE_URL;
const token = localStorage.getItem("accessToken");

fetch(`${API_BASE}/listings`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify({
    title: "Retro Camera",
    description: "Old school film camera.",
    media: ["https://imgur.com/camera.jpg"],
    endsAt: "2025-12-01T12:00:00Z",
  }),
});
```
