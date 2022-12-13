import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../components/Pages/Dashboard/Dashboard";
import NoMeeting from "../components/Pages/Dashboard/NoMeeting/NoMeeting";
import Home from "../components/Pages/Home/Home";
import Lesson from "../components/Pages/Lesson/Lesson";
import Mentor from "../components/Pages/Mentor/Mentor";
import Main from "../Layout/Main";
import Login from "../SignUp/Login/Login";
import Register from "../SignUp/Register/Register";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/lesson",
    element: <Lesson></Lesson>,
  },
  {
    path: "/mentor",
    element: <Mentor></Mentor>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
  },
  {
    path: "/no-meeting",
    element: <NoMeeting></NoMeeting>,
  },
]);
