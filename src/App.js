import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";
import ProfileBody from "./components/ProfileBody.js";
import LoginPage from "./components/LoginPage.js";
import PrivateRoute from "./components/PrivateRoute"; // Import the PrivateRoute component
import Footer from "./components/Footer.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/home",
        element: <PrivateRoute element={<Body />} />, // Protected Route
      },
      {
        path: "/about",
        element: <PrivateRoute element={<About />} />, // Protected Route
      },
      {
        path: "/restaurant/:resId",
        element: <PrivateRoute element={<RestaurantMenu />} />, // Protected Route
      },
      {
        path: "/cart",
        element: <PrivateRoute element={<Cart />} />, // Protected Route
      },
      {
        path: "/profile",
        element: <PrivateRoute element={<ProfileBody />} />, // Protected Route
      },
    ],
    errorElement: <Error />, // Global error handler
  },
]);

root.render(<RouterProvider router={appRouter} />);
