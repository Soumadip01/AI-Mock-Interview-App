import Container from "@/components/container";
import Footer from "@/components/footer";
import Header from "@/components/ui/header";
import { Outlet } from "react-router-dom";

const MainLaiyout = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* handler to store the user data */}
      <Header></Header>
      <Container className="flex-grow">
        <main className="flex-grow">
          <Outlet />
        </main>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default MainLaiyout;
