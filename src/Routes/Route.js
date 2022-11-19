import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import MainLayout from "../Layout/MainLayout";
import Appointments from "../Pages/Appointments/Appointments/Appointments";
import AllUsers from "../Pages/Dashboard/Dashboard/AllUsers/AllUsers";
import MyAppointments from "../Pages/Dashboard/MyAppointments/MyAppointments";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Reset from "../Pages/Reset/Reset";
import SignUp from "../Pages/SingnUp/SignUp";
import AdminRoute from "./AdminRoute";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "appointment", element: <Appointments></Appointments> },
      { path: "signup", element: <SignUp></SignUp> },
      { path: "login", element: <Login></Login> },
      { path: "reset", element: <Reset></Reset> },
    ],
  },
  {
    path: '/dashboard', element: <PrivetRoute><DashboardLayout></DashboardLayout></PrivetRoute>, children: [
      {
        path: "/dashboard",
        element: <MyAppointments></MyAppointments>
      },
      { path: '/dashboard/users', element: <AdminRoute><AllUsers></AllUsers></AdminRoute> }
    ]
  }
]);
export default router;
