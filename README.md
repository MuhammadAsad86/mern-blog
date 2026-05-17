. Full Stack MERN Blogging Platform with Admin Dashboard

A modern, fast, and fully responsive blogging platform built with the MERN stack, designed for real world publishing, content management, and user engagement. The application combines secure authentication, rich blog editing, advanced search capabilities, and a powerful admin dashboard into one complete system.

. ✨ Key Features

. 🔐 Secure Authentication System

* JWT based authentication with HTTP only cookies for secure session handling
* Google Sign In integration using Firebase Authentication
* Protected frontend routes and backend APIs
* Role based access control for Admin and Users
* Encrypted passwords using Bcrypt.js

 📊 Advanced Admin Dashboard

* Full admin control panel with analytics overview
* Monitor total users, posts, and comments
* Monthly activity statistics and growth tracking
* Manage users, posts, and comments with complete CRUD operations
* Admin verification and role management system

✍️ Rich Blog Creation Experience

* Powerful WYSIWYG editor using React Quill
* Upload blog thumbnails and profile images with Cloudinary
* SEO friendly automatic slug generation
* Category based blog organization
* Real time content editing and updates

. 🔎 Smart Search & Filtering

* MongoDB regex based search across titles and blog content
* Dynamic filtering by category, keywords, and publish date
* Latest and oldest sorting functionality
* Optimized pagination with "Show More" loading
* Fast and scalable querying system

. 💬 Interactive Community Features

* Nested comment system for discussions
* Like and unlike functionality for posts
* Real time engagement tracking
* Human readable timestamps using Moment.js
* User specific interaction history

. 🎨 Modern UI / UX

* Fully responsive design for Mobile, Tablet, and Desktop
* Dark and Light theme support
* Clean UI built with Tailwind CSS and Flowbite React
* Persistent global state using Redux Toolkit + Redux Persist
* Smooth navigation and optimized user experience

---

. 🛠️ Tech Stack

. Frontend

* React.js
* Vite
* Tailwind CSS
* Flowbite React
* Redux Toolkit
* Redux Persist

. Backend

* Node.js
* Express.js
* JWT Authentication
* Cookie Parser
* Bcrypt.js

. Database & Cloud Services

* MongoDB Atlas
* Mongoose ODM
* Cloudinary API
* Firebase Authentication

. Deployment

* Render

---

. 🚀 Installation & Local Setup

. 1. Clone the Repository

```bash
git clone <your-github-repository-url>
cd MERN-Blog-App
```

. 2. Install Dependencies

. Backend

```bash
cd api
npm install
```

. Frontend

```bash
cd client
npm install
```

. 3. Configure Environment Variables

Create a `.env` file inside the backend directory.

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
FIREBASE_API_KEY=your_firebase_api_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

. 4. Run the Application

. Start Backend Server

```bash
npm run dev
```

. Start Frontend

```bash
npm run dev
```

---

. 🌍 Deployment

The application is deployed using the Render cloud platform.

You can also deploy:

* Frontend on Vercel
* Backend on Render
* Database on MongoDB Atlas

---

. 📌 Future Improvements

* Real time notifications
* Bookmark and save posts
* Rich analytics dashboard
* AI based content recommendations
* Email verification and password recovery
* Multi author collaboration support

---

. 📄 License

This project is open source and available under the MIT License.
