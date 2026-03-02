# Thadam (தடம்) - Modern CRM System

**Thadam** is a professional, full-stack Customer Relationship Management (CRM) solution designed to streamline client data management. Built with the MERN stack, it features a robust authentication flow, complex data structures, and industry-standard synchronization tools.

---

## 🚀 Features

* **Secure Authentication:** Integrated with **WorkOS** for a professional-grade Auth Guard and session management.
* **Comprehensive CRUD:** Full Create, Read, Update, and Delete capabilities for customer profiles handling 15+ data points.
* **Advanced Data Fetching:** Utilizes **Tanstack Query (React Query)** for efficient caching, synchronization, and server-state management.
* **Interactive Dashboard:** A clean, paginated table interface with integrated search and filtering.
* **Real-time Feedback:** Integrated **goey-toast** notifications for instant user feedback on actions.
* **Data Integrity:** Includes a Delete Workflow with confirmation dialogs to prevent accidental data loss.
* **Responsive Design:** Built with **Bootstrap 5** for a seamless experience across all devices.

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React.js
- **State Management:** React Context API & Tanstack Query
- **Form Management:** React-Hook-Form
- **Styling:** Bootstrap 5
- **Notifications:** goey-toast

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (via Mongoose)
- **Authentication:** WorkOS

---

## 📂 Project Structure

```text
Thadam/
├── client/                # React Frontend
│   ├── src/
│   │   ├── components/    # Reusable UI (Table, Form Modal, AuthGuard)
│   │   ├── hooks/         # Tanstack Query custom hooks
│   │   ├── pages/         # Dashboard and Customer Detail views
│   │   └── context/       # Global State management
├── server/                # Node.js & Express Backend
│   ├── models/            # Mongoose Schemas (Customer)
│   ├── routes/            # RESTful API Endpoints
│   └── controllers/       # Business logic
└── README.md
