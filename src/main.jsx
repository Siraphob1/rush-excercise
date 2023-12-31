import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignupPage from './pages/SignupPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import { MainPage } from './pages/MainPage.jsx';

import ForgotpasswordPage from './pages/ForgotpasswordPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import { MemberProvider } from './context/MemberContext.jsx';

import Firstpage from './pages/Firstpage.jsx';
import ActivityPage from './pages/Activity/ActivityPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import RequireAuth from './components/RequireAuth';
import Reset from './pages/Forgotpassword/Reset'
import Verify from './pages/Signup/Verify'
import ErrorPage from './pages/ErrorPage';



const router = createBrowserRouter([

  // Public routes
  {
    path: "/",
    element: <Firstpage />,  
    errorElement: <ErrorPage />,    
  },
  {
    path: "/login",
    element: <LoginPage/>,    
  },  
  {
    path: "/signup",    
    element:<SignupPage/>,     
  },
  {
    path: "/signup/verify",    
    element:<Verify/>,
  },

  {
    path: "/forgotpassword",
    element: <ForgotpasswordPage />,      
  },
  {
    path: "/forgotpassword/reset",
    element: <Reset />,      
  },

  // Private routes
  {
    path: "/mainpage",
    element:  <RequireAuth>
                <MainPage />
              </RequireAuth>,    
  },
  {
    path: "/profilepage",
    element:  <RequireAuth>
                <ProfilePage />
              </RequireAuth>,    
  }, 
  {
    path: "/activity",
    children:[
      {
        path: "Biking/:activityID",
        element:<RequireAuth>
                  <ActivityPage/>
                </RequireAuth>
      },
      {
        path: "Hiking/:activityID",
        element:<RequireAuth>
                  <ActivityPage/>
                </RequireAuth>
      },
      {
        path: "Running/:activityID",
        element:<RequireAuth>
                  <ActivityPage/>
                </RequireAuth>
      },
      {
        path: "Swimming/:activityID",
        element:<RequireAuth>
                  <ActivityPage/>
                </RequireAuth>
      },      
      {
        path: "Walking/:activityID",
        element:<RequireAuth>
                  <ActivityPage/>
                </RequireAuth>
      },
      
    ],    
  },
  {
    path: "/dashboard",
    element:  <RequireAuth>
                <DashboardPage />
              </RequireAuth>,    
  }, 
]);


ReactDOM.createRoot(document.getElementById('root')).render(  
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>   
  ,
)
