import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "@/layouts/public-layouts";
import HomePage from "@/routes/home";
import Authentication from "@/layouts/auth";
import SignInPage from "@/routes/signIn";
import SignUpPage from "@/routes/signUp";
import ProtectedLayout from "@/layouts/protected-layouts";
import MainLaiyout from "./layouts/main-layouts";
import Generate from "./components/generate";
import DashBoard from "./routes/dashboard";
import CreateEditPage from "./routes/create_edit_page";
import MockLoadPage from "./routes/mock_load_page";
import MockInterviewPage from "./routes/mock_interview_page";
import Feedback from "./routes/feedback";


const App = () => {
  return (
    <Router>
      <Routes>
        {/* public*/}
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />}></Route>
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
        >
          <Route element={<Generate />} path="/generate">
            <Route index element={<DashBoard />} />
            <Route path=":interviewId" element={<CreateEditPage />} />
            <Route path="interview/:interviewId" element={<MockLoadPage />} />
            <Route
              path="interview/:interviewId/start"
              element={<MockInterviewPage />}
            />
            <Route path="feedback/:interviewId" element={<Feedback />} />
          </Route>
        </Route>
      </Routes>
    </Router >
  );
};

export default App;
