# Dragon News Auth

> A full-stack React project for a news portal with authentication, category-based news, and detailed news views. Built with Vite, Firebase, TailwindCSS, DaisyUI, and React Router.

---

## Table of Contents
- Features
- Project Structure
- Setup & Installation
- Main Components & Files
- Authentication
- Routing
- News Data
- License

---

## Features
- User authentication (login/register) with Firebase
- Category-based news listing
- Detailed news card view
- Responsive layouts with TailwindCSS & DaisyUI
- Protected routes for authenticated users
- Modern UI with reusable components

---

## Project Structure
```
react-dragon-news-auth/
├── public/
│   └── ...
├── src/
│   ├── assets/           # Images and icons
│   ├── components/       # Reusable UI components
│   ├── firebase/         # Firebase config
│   ├── layouts/          # Layout components (Home, Auth)
│   ├── pages/            # Main pages (CategoryNews, NewsDetails, Login, Register)
│   ├── provider/         # Context providers (AuthProvider)
│   ├── routes/           # App routing
│   └── main.jsx          # App entry point
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

---

## Setup & Installation
1. **Created repository:**
   ```bash
   cd react-dragon-news-auth
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure Firebase:**
   - Add your Firebase config to _firebase_init.js.
4. **Run the development server:**
   ```bash
   npm run dev
   ```
5. **Open in browser:**
   - Visit `http://localhost:5173` (default Vite port)

---

## Main Components & Files
- **HomeLayout.jsx**: Main layout for home and category pages. Includes header, navbars, and main content area.
- **AuthLayout.jsx**: Layout for authentication pages (login/register).
- **CategoryNews.jsx**: Lists news articles for a selected category using `NewsCard`.
- **NewsDetails.jsx**: Shows detailed view of a single news article, including image, author, and details.
- **Login.jsx & Register.jsx**: User authentication forms.
- **NewsCard.jsx**: Card component for displaying news summary in lists.
- **AuthProvider.jsx**: Provides authentication context and methods using Firebase.
- **router.jsx**: Defines all app routes and loaders for fetching news data.

---

## Authentication
- Uses Firebase for user authentication.
- AuthProvider.jsx manages user state and exposes methods for login, registration, and logout.
- Auth pages are wrapped in `AuthLayout` for consistent UI.

---

## Routing
- Built with React Router v6.
- Main routes:
  - `/category/:id` — Category news listing
  - `/news/:id` — News details
  - `/auth/login` & `/auth/register` — Authentication
- Data is fetched using route loaders from the Programming Hero News API.

---

## News Data
- News data is fetched from (https://-----------------------/api/news/category/:id).
- Each news card displays title, image, author, date, rating, and views.
- Detailed news view includes full article, author info, and category navigation.

---

## License
This project is for educational purposes and follows open-source principles.
