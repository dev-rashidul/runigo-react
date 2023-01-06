import { createBrowserRouter } from "react-router-dom";
import MyDetails from "../components/Pages/Account/MyDetails/MyDetails";
import MyOrder from "../components/Pages/Account/MyOrder/MyOrder";
import BecomeMentor from "../components/Pages/BecomeMentor/BecomeMentor";
import PersonalInfo1 from "../components/Pages/BecomeMentor/BecomeMentorForm/PersonalInfo1/PersonalInfo1";
import PersonalInfo2 from "../components/Pages/BecomeMentor/BecomeMentorForm/PersonalInfo2/PersonalInfo2";
import SuccessForm from "../components/Pages/BecomeMentor/BecomeMentorForm/SuccessForm/SuccessForm";
import UniversityInfo2 from "../components/Pages/BecomeMentor/BecomeMentorForm/UniversityInfo2/UniversityInfo2";
import UniversityInfo3 from "../components/Pages/BecomeMentor/BecomeMentorForm/UniversityInfo3/UniversityInfo3";
import Contact from "../components/Pages/Contact/Contact";
import Dashboard from "../components/Pages/Dashboard/Dashboard";
import NoMeeting from "../components/Pages/Dashboard/NoMeeting/NoMeeting";
import Home from "../components/Pages/Home/Home";
import Lesson from "../components/Pages/Lesson/Lesson";
import Mentor from "../components/Pages/Mentor/Mentor";
import Account from "../Layout/AccountLayout/Account";
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
    path: "/become-mentor",
    element: <BecomeMentor></BecomeMentor>,
  },
  {
    path: "/contact",
    element: <Contact></Contact>,
  },

  // My Account Route

  {
    path: '/account',
    element: <Account></Account>,
    children: [
      {
        path: '/account',
        element: <MyDetails></MyDetails>
      },
      {
        path: '/account/my-details',
        element: <MyDetails></MyDetails>
      },
      {
        path: '/account/my-order',
        element: <MyOrder></MyOrder>
      },
      {
        path: '/account/account-settings',
        element: <MyOrder></MyOrder>
      },
    ]
  },

  // These are for Just Check
  
  {
    path: "/no-meeting",
    element: <NoMeeting></NoMeeting>,
  },

  {
    path: "/university-info2",
    element: <UniversityInfo2></UniversityInfo2>,
  },

  {
    path: "/university-info3",
    element: <UniversityInfo3></UniversityInfo3>,
  },

  {
    path: "/personal-info1",
    element: <PersonalInfo1></PersonalInfo1>,
  },

  {
    path: "/personal-info2",
    element: <PersonalInfo2></PersonalInfo2>,
  },

  {
    path: "/success",
    element: <SuccessForm></SuccessForm>,
  },

]);
