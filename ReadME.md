# Food Ordering App

## By Saransh Meena

### Overview

A fully functional food ordering application built using **React, Redux, and API integration**. This app allows users to search for restaurants, view menus, add items to the cart, and manage their profile.

---

## Features

### 🌟 **Header (Sticky)**

- Displays the company logo on the left.
- Navigation links on the right: **Home, Cart (with item count), About Us, Profile Avatar**.
- Profile avatar is **only visible after login** (controlled via `isLoggedIn` flag in Redux store).

### 🔒 **Login Page**

- Contains a **login card** with fields for **Username, Email, and Password**.
- Credentials are **hardcoded on the frontend**.
- User **cannot access any page until login** (secured with private routes).
- On successful login, user is redirected to the **Home Page**.

### 🏠 **Home Page**

- Fetches restaurant data via API if not present in Redux store.
- **Search Bar** with:
  - Input box
  - Search button
  - Clear button
  - Top-rated restaurant filter
- **Restaurant Cards** displayed in a grid format, showing:
  - Title, Area, Cuisines, Rating, Cost for Two, Expected Delivery Time, and Image.
- **Open/Close Label** achieved using a Higher-Order Component (HOC).
- Clicking on a restaurant redirects to the **Restaurant Menu Page**.

### 🍽️ **Restaurant Menu Page**

- Fetches **restaurant menu data** via API if not present in Redux store.
- Displays restaurant details and menu.
- Uses an **Accordion UI** to display menu items by category.
- Categories **expand/collapse**, allowing only one open at a time (Controlled Component).
- Each **Item List** shows:
  - Name, Description, Price, Veg/Non-Veg, and Image.
- Users can **add/remove** items to/from the **Cart**.

### 🛒 **Cart Page**

- If the cart is empty, shows a message: **"Cart is empty!!"**.
- If items exist, displays the **list of items and total price**.
- Users can **remove individual items** or **clear the cart** entirely.

### 👤 **Profile Page**

- **Profile Dropdown in Header** contains a **Logout button**.
- Clicking **Logout** redirects the user to the **Login Page**.
- Contains **two sections**:
  1. **Personal Info**
     - Displays Username and Email (entered at login).
     - Allows editing of username, email, phone number, and date of birth.
  2. **Address Section**
     - Supports **multiple addresses**.
     - Users can **add/edit addresses**.

### 📌 **Footer**

- Simple footer with **basic information and navigation links**.

---

## 📦 **State Management (Redux)**

The app stores and manages data using Redux. The following slices are used:

- **Cart Slice** → Stores cart items.
- **Restaurant Slice** → Stores restaurant data.
- **Menu Slice** → Stores menu data.
- **UserInfo Slice** → Stores user login details and profile info.

Custom **hooks** are used to fetch restaurant and menu data from **Swiggy’s API**.

---

## 🚀 **Getting Started**

### 📌 **Installation**

```bash
# Clone the repository
git clone https://github.com/yourusername/food-ordering-app.git

# Navigate to the project directory
cd food-ordering-app

# Install dependencies
npm install
```

### 📌 **Run the Application**

```bash
npm start
```

### 📌 **Build the Application**

```bash
npm run build
```

---

## 💡 **Technologies Used**

- **React.js** (Frontend UI)
- **Redux Toolkit** (State Management)
- **React Router** (Navigation)
- **Tailwind CSS** (Styling)
- **Swiggy API** (Fetching restaurant & menu data)
- **React Hooks** (Custom hooks for API calls)

---

## 📜 **License**

This project is open-source and available under the **MIT License**.

---

## 👨‍💻 **Author**

**Saransh Meena**  
📧 Email: saransh.meena88@gmail.com

---

Happy Coding! 🎉
