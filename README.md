🎬 Binni Movies

MERN Stack Movie Management Application
Binni Movies is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application that implements JWT-based authentication and role-based access control.

The platform allows users to browse movies stored in the database, while admins can securely manage movie content through protected routes.

🚀 Live Demo

   💠 https://binni-movies.vercel.app/

🧠 Key Highlights

   💠 Clean MERN architecture
  
   💠 Secure admin authentication using JWT
  
   💠 Role-based API protection
  
   💠 External API data seeding into MongoDB
  
   💠 Scalable and modular code structure
  
   💠 Fully deployed frontend and backend

🛠 Tech Stack

  Frontend

   💠 React.js
  
   💠 Context API
  
   💠 React Router DOM
  
   💠 Protected Routes
  
   💠 Responsive CSS
  
  Backend

   💠 Node.js
  
   💠 Express.js
  
   💠 MongoDB
  
   💠 JWT Authentication
  
   💠 Middleware-based Authorization

  Deployment

   💠 Frontend: Vercel
  
   💠 Backend: Render
  
   💠 Database: MongoDB Atlas

✨ Features

👤 User Features

   💠 View movies from database
  
   💠 Browse movies with pagination
    
   💠 Search and sort movies
  
   💠 Recommendation section
  
   💠 Fast and responsive UI

🔐 Admin Features

   💠 Admin login & logout
  
   💠 Add new movies
  
   💠 Update existing movies
  
   💠 Delete movies
  
   💠 Access-controlled routes

📂 Project Structure

   💠 Backend
  
```
backend/
├── config/
│   └── db.js
├── controllers/
│   ├── admin.controller.js
│   └── movie.controller.js
├── middlewares/
│   ├── auth.middleware.js
│   └── role.middleware.js
├── models/
│   ├── admin.model.js
│   └── movie.model.js
├── routes/
│   ├── admin.route.js
│   └── movie.route.js
├── services/
│   └── fetchMovie.service.js
├── app.js
└── server.js
```


   💠 Frontend
  ```
  frontend/
      └── src/
      ├── api/
      │   └── movie.api.js
      ├── components/
      │   ├── admin/
      │   │   └── AdminDashboard.jsx
      │   ├── common/
      │   │   ├── Loader.jsx
      │   │   └── Navbar.jsx
      │   ├── movies/
      │   │   ├── MovieCard.jsx
      │   │   ├── MovieGrid.jsx
      │   │   ├── Pagination.jsx
      │   │   ├── RecommendationSection.jsx
      │   │   ├── SearchBar.jsx
      │   │   └── SortBar.jsx
      │   └── safe/
      │       └── ProtectedRoute.jsx
      ├── context/
      │   ├── AdminAuthProvider.jsx
      │   └── MovieContext.jsx
      ├── pages/
      │   ├── admin/
      │   │   ├── AddMovie.jsx
      │   │   ├── EditMovie.jsx
      │   │   ├── DeleteMovie.jsx
      │   │   ├── AdminLogin.jsx
      │   │   └── AdminLogout.jsx
      │   └── user/
      │       ├── Hero.jsx
      │       └── Home.jsx
      ├── App.jsx
      ├── index.css
      └── main.jsx
```
🔐 Authentication & Authorization
  
   💠 JWT-based authentication
    
   💠 Admin token stored on client
  
   💠 authMiddleware verifies token
  
   💠 roleMiddleware("admin") restricts admin-only APIs
  
   💠 Frontend routes protected using ProtectedRoute

🔌 Backend API Endpoints

🧑‍💼 Admin Routes (/admin)
  | Method | Endpoint              | Description                |
| ------ | --------------------- | -------------------------- |
| POST   | `/admin/login`        | Admin login                |
| POST   | `/admin/logout`       | Admin logout               |
| POST   | `/admin/add-movie`    | Add new movie (Admin only) |
| PUT    | `/admin/update-movie` | Update movie (Admin only)  |
| DELETE | `/admin/delete-movie` | Delete movie (Admin only)  |

 💠 ✔ Protected using authMiddleware + roleMiddleware

🎥 Movie Routes (/movies)
  | Method | Endpoint       | Description                                    |
| ------ | -------------- | ---------------------------------------------- |
| GET    | `/movies`      | Fetch all movies from database                 |
| POST   | `/movies/seed` | Fetch movies from external API and store in DB |

👨‍💻 Author

 💠 Tushar Gupta

 💠 MERN Stack Developer

 💠 Project: Binni Movies
