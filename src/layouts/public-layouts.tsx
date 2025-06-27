import Footer from "@/components/footer";
import Header from "@/components/header";
import AuthHandler from "@/handler/auth-handler";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="w-full">
      {/* handler to store the user data */}
      <AuthHandler/>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default PublicLayout;
