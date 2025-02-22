import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./components/LoginScreen";
import DeviceMonitor from "./components/DeviceMonitor";
import SettingsScreen from "./components/SettingsScreen";
import Register from "./components/register";
import PrivateRoute from "./components/PrivateRoute";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/register" element={<Register />} />
        <Route 
          path="/monitor" 
          element={
            <PrivateRoute>
              <DeviceMonitor />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/settings" 
          element={
            <PrivateRoute>
              <SettingsScreen />
            </PrivateRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;