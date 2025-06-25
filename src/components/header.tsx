import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react";
import Container from "./container";
import Logo from "./logo";
import Navigation from "./navigation";
import { NavLink } from "react-router-dom";
import ProfileContainer from "./profile_container";
import ToggleContainer from "./toggle_container";

const Header = () => {
  const { userId } = useAuth();
  return (
    <header
      className={cn("w-full border-b duration-150 transition-all ease-in-out")}
    >
      <Container>
        <div className="flex items-center gap-4 w-full">
          {/*  logo  */}
          <Logo />

          {/*  navigation */}
          <nav className="hidden md:flex items-center gap-3">
            <Navigation />
            {userId && (
              <NavLink
                to={"/generate"}
                className={({ isActive }) =>
                  cn(
                    "text-base text-neutral-600",
                    isActive && "text-neutral-900 font-semibold"
                  )
                }
              >
                {" "}
                Take Interview
              </NavLink>
            )}
          </nav>
          <div className="ml-auto flex items-center gap-6">
            {/* profile */}
            <ProfileContainer />
            {/*  Mobile Toggle section */}
            <ToggleContainer />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
