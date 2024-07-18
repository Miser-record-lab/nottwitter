import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import LogInPage from "./pages/auth/login/LogInPage";
import SignUpPage from "./pages/auth/signup/SignUpPage";
import NotificationPage from "./pages/notification/NotificationPage";
import ProfilePage from "./pages/profile/ProfilePage";

import Sidebar from "./components/common/SideBar";
import RightPanel from "./components/common/RightPanel";

function App() {
  return (
    <div className="flex max-w-6xl mx-auto">
      <Sidebar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LogInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/notifications' element={<NotificationPage />} />
        <Route path='/profile/:id' element={<ProfilePage />} />
      </Routes>
      <RightPanel />
    </div>
  )
}

export default App
