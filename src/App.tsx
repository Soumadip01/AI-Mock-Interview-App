import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "@/layouts/public-layouts";
import Home from "@/routes/home";
import Authentication from "@/layouts/auth";
import SignInPage from "@/routes/signIn";
import SignUpPage from "@/routes/signUp";
import ProtectedLayout from "@/layouts/protected-layouts";
import MainLaiyout from "./layouts/main-layouts";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* public*/}
        <Route element={<PublicLayout />}>
          <Route index element={<Home />}></Route>
        </Route>

        {/* Authentication */}
        <Route element={<Authentication />}>
          <Route path="/signIn" element={<SignInPage />}></Route>
          <Route path="/signUp" element={<SignUpPage />}></Route>
        </Route>

        {/* protected*/}
        <Route
          element={
            <ProtectedLayout>
              <MainLaiyout />
            </ProtectedLayout>
          }
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
