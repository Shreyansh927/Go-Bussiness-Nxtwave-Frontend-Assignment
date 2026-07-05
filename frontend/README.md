# 🚀 Go Business Frontend Assignment

A modern and responsive **Referral Dashboard** built using **React + Vite**. The application provides secure authentication, protected routes, referral analytics, search, sorting, and client-side pagination while consuming REST APIs.

---

## 📖 Overview

This project demonstrates a complete frontend implementation of the **Go Business Referral Dashboard** with authentication, dashboard analytics, referral management, and responsive UI.

---

# ✨ Features

## 🔐 Authentication

- User Login
- User Logout
- JWT Bearer Token Authentication
- Protected Routes
- Automatic Redirection for Unauthorized Users

---

## 📊 Dashboard

- Referral Overview
- Service Summary
- Referral Link
- Referral Code
- Total Earnings
- Referral Statistics

---

## 👥 Referrals

- View All Referrals
- Search Referrals (API-based)
- Sort Referrals by Date
- Client-side Pagination (10 rows/page)
- Referral Details
- Responsive Referral Table

---

## ⚡ Performance

- Debounced Search (500ms)
- Optimized API Calls
- Efficient State Management
- Responsive UI

---

# 🛠 Tech Stack

| Technology | Usage |
|------------|------|
| React 19 | Frontend Library |
| Vite | Build Tool |
| JavaScript (ES6+) | Programming Language |
| Axios | API Calls |
| React Router DOM | Routing |
| js-cookie | Token Storage |
| CSS3 | Styling |

---

# 🌐 APIs Used

## Authentication

- Login API
- Logout Logic

## Dashboard

- Referral Dashboard API

Supports

- Dashboard Overview
- Service Summary
- Referral Code
- Referral Link
- Referral List

### Search

```
GET /api/referrals?search=value
```

### Sort

```
GET /api/referrals?sort=asc
```

### Search + Sort

```
GET /api/referrals?search=value&sort=desc
```

> Search and sorting are implemented using the backend API as required by the assignment.

---

# 📂 Folder Structure

```text
frontend
│
├── public
│
├── src
│   │
│   ├── assets
│   │
│   ├── footer
│   │   ├── index.css
│   │   └── index.jsx
│   │
│   ├── header
│   │   ├── index.css
│   │   └── index.jsx
│   │
│   ├── Home
│   │   ├── index.css
│   │   └── index.jsx
│   │
│   ├── Login
│   │   ├── index.css
│   │   └── index.jsx
│   │
│   ├── Not-found-page
│   │   ├── index.css
│   │   └── index.jsx
│   │
│   ├── Referrals
│   │   ├── index.css
│   │   └── index.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── protected-route.jsx
│
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

# 🔒 Protected Routing

The application uses a custom **Protected Route** component.

- Checks authentication token
- Prevents unauthorized access
- Redirects unauthenticated users to Login page

---

# 📄 Pagination

The Referral API returns the complete dataset.

Pagination is implemented **entirely on the client side** with:

- 10 referrals per page
- Page navigation
- Current record count

---

# 🔍 Search

- API-based search
- Debounced input (500ms)
- Searches by Referral Name or Service

---

# ↕ Sorting

Sort referrals by date

- Newest First
- Oldest First

Sorting is handled by the backend API.

---

# 📱 Responsive Design

Optimized for

- 💻 Desktop
- 💼 Laptop
- 📱 Tablet
- 📲 Mobile

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone <repository-url>
```

---

## Install Dependencies

```bash
npm install
```

---

## Run Development Server

```bash
npm run dev
```

Application runs on

```
http://localhost:5173
```

---

# 🔑 Environment Variables

Create a `.env` file in the root directory.

```env
VITE_SIGNUP_URL=
VITE_LOGIN_URL=
VITE_REFERRAL_URL=
```

---

# 📦 Important Commands

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

## Build for Production

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Lint Project

```bash
npm run lint
```

---

# 📸 Screens Included

- Login Page
- Dashboard
- Referral Summary
- Search & Sort
- Pagination
- Responsive Layout

---

# 🎯 Assignment Highlights

✅ Login & Logout

✅ Protected Routes

✅ Dashboard Overview

✅ Referral Summary

✅ Referral Code & Link

✅ API Integration

✅ API-based Search

✅ API-based Sorting

✅ Client-side Pagination

✅ Responsive Design

✅ Clean Component Structure

✅ Modern React Hooks

---

# 👨‍💻 Developed By

**Shreyansh Dixit**

Frontend Assignment Submission for **Go Business**

---

# 🙏 Thank You

Thank you for taking the time to review my submission.

I appreciate your consideration and look forward to your feedback.