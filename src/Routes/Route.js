import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Appointments from "../Pages/Appointments/Appointments/Appointments";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import SignUp from "../Pages/SingnUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "appointment", element: <Appointments></Appointments> },
      { path: "signup", element: <SignUp></SignUp> },
      { path: "login", element: <Login></Login> },
      { path: "register", element: <Register></Register> },
    ],
  },
]);
export default router;
