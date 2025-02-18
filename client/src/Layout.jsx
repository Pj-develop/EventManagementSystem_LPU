import Footer from "./pages/Footer";
import Header from "./pages/Header";
import { Outlet } from "react-router-dom";
import Announcement from "./pages/Announcement";
import Recruit from "./pages/Recruit";
import StudentOrg from "./pages/StudentOrg";
import Membership from "./pages/Membership";


export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <Announcement />
      <Recruit />
      <StudentOrg />
      <Membership />

      <Footer />
    </div>
  );
}
