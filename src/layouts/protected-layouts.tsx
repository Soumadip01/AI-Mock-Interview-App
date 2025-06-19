import LoaderPage from "@/routes/loader";
import { useAuth } from "@clerk/clerk-react";
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  const { isLoaded, isSignedIn } = useAuth();
  if (!isLoaded) {
    return <LoaderPage />;
  }
  if (!isSignedIn) {
    return <Navigate to={"/signIn"} replace />;
  }
  return children;
};

export default ProtectedLayout;
