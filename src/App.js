import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Section from "./Pages/Section";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Form from "./Auth/Form";
import Dashboard from "./Pages/Adds/Dashboard";
import Profile from "./Pages/Adds/Profile";
import AddPost from "./Pages/Adds/AddPost";
import ColumnList from "./Pages/Adds/ColumnList";
const routes = [
  {
    path: "/",
    element: <Section />,
    meta: { loginRequired: true },
  },
  {
    path: "/login",
    element: <Form />,
    meta: { loginRequired: false },
  },
  {
    path: "/contact",
    element: <Contact />,
    meta: { loginRequired: true },
  },
  {
    path: "/about",
    element: <About />,
    meta: { loginRequired: true },
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    meta: { loginRequired: true },
  },
  {
    path: "/profile",
    element: <Profile />,
    meta: { loginRequired: true },
  },
  {
    path: "/add-post",
    element: <AddPost />,
    meta: { loginRequired: true },
  },
  {
    path: "/list",
    element: <ColumnList />,
    meta: { loginRequired: true },
  },

];

const checkLogin = () => {
  const isLoggedIn = localStorage.getItem("auth_token");
  return isLoggedIn;
};

const RedirectToLogin = () => <Navigate to="/login" replace />;

function App() {
  const isLoggedIn = checkLogin();

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) =>
          route.meta.loginRequired ? (
            isLoggedIn ? (
              <Route key={index} path={route.path} element={route.element} />
            ) : (
              <Route
                key={index}
                path={route.path}
                element={<RedirectToLogin />}
              />
            )
          ) : (
            <Route key={index} path={route.path} element={route.element} />
          )
        )}
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
