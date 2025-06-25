import Footer from "@/components/footer";
import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="w-full">
      {/* handler to store the user data */}
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default PublicLayout;
