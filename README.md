# GigFlow

GigFlow is a mini freelance marketplace platform where **Clients can post gigs** and **Freelancers can place bids** on those gigs.  
The system is designed with **role-based access control, transactional safety, and concurrency awareness** to ensure reliable hiring workflows.

---

## Key Features

- User authentication with JWT (HttpOnly cookies)
- Role-based access (Client / Freelancer)
- Clients can create gigs
- Freelancers can place bids on gigs
- Clients can view bids for their own gigs
- Secure hire flow using **MongoDB transactions**
- Protected routes on both backend and frontend
- Search functionality for gigs
- Clean separation of business logic and data access

---

## Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS
- Redux Toolkit (Session Management)
- Axios

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- MongoDB Transactions (Session-based)
- Zod (Request Validation)

---

## Transaction Handling

The **hire workflow** is implemented using **MongoDB sessions and transactions** to maintain data consistency.

During a hire:
- A bid is marked as `accepted`
- The corresponding gig is assigned to the freelancer
- Both operations execute atomically inside a transaction
- If any step fails, the entire operation is rolled back

This prevents:
- Partial updates
- Race conditions
- Inconsistent gig or bid states

---

## API Overview

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`

### Gigs
- `POST /api/gigs` (Client only)
- `GET /api/gigs` (with search support)

### Bids
- `POST /api/bids/:gigid`
- `GET /api/bids/:gigid` (Gig owner only)
- `PATCH /api/bids/:bidid/hire` (Transactional)

---

## Environment Variables

Create a `.env` file inside the `server` directory:

```env
PORT=3000
ORIGIN=http://localhost:5173
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

## Notes
- The project focuses on backend correctness and system reliability over UI polish.
- Designed to demonstrate real-world backend patterns such as:
    - Transactions
    - RBAC
    - Protected resource access
    - Clean controller logic

---

## Author
Aman Pandey,<br>
Full Stack Developer (MERN)