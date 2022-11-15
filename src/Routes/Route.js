import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Appointments from "../Pages/Appointments/Appointments/Appointments";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Reset from "../Pages/Reset/Reset";
import SignUp from "../Pages/SingnUp/SignUp";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "appointment", element: <Appointments></Appointments> },
      {
        path: "dashboard",
        element: (
          <PrivetRoute>
            <Dashboard></Dashboard>
          </PrivetRoute>
        ),
      },
      { path: "signup", element: <SignUp></SignUp> },
      { path: "login", element: <Login></Login> },
      { path: "reset", element: <Reset></Reset> },
    ],
  },
]);
export default router;
