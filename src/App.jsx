import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import CommonLoginScreen from "./Components-Login/CommonLoginScreen";
import ForgotPassword from "./Components-ForgotPassword/ForgotPassword";
import PlacementReset from "./Components-PlacementReset/PlacementReset";
import ResetPassword from "./Components-ResetPassword/ResetPassword";
import SuccessfulPage from "./Components-SuccessfulPage/SuccessfulPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/PRP_Portal/Login" replace />,
  },
  {
    path: "/PRP_Portal/Login",
    element: <CommonLoginScreen />,
  },
  {
    path: "/PRP_Portal/ForgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "/PRP_Portal/ResetLinkSent",
    element: <PlacementReset />,
  },
  {
    path: "/PRP_Portal/ResetPassword",
    element: <ResetPassword />,
  },
  {
    path: "/PRP_Portal/PasswordResetSuccess",
    element: <SuccessfulPage />,
  },
  {
    path: "*",
    element: <Navigate to="/PRP_Portal/Login" replace />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
