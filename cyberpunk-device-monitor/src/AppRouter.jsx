import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./components/LoginScreen";
import DeviceMonitor from "./components/DeviceMonitor";
import SettingsScreen from "./components/SettingsScreen";
import Register from "./components/register";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/monitor" element={<DeviceMonitor />} />
        <Route path="/settings" element={<SettingsScreen />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
