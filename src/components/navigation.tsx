import { MainRoutes } from "@/lib/helper";
import { cn } from "@/lib/utils";
import { Link, NavLink } from "react-router-dom";

interface NavigationProps {
  isMobile?: boolean;
}

const Navigation = ({ isMobile = false }: NavigationProps) => {
  return (
    <ul
      className={cn(
        "flex items-center gap-6",
        isMobile && "items-start flex-col gap-8"
      )}
    >
      {MainRoutes.map((routes) => {
        return (
          <NavLink
            key={routes.href}
            to={routes.href}
            className={({ isActive }) =>
              cn(
                "text-base text-neutral-600",
                isActive && "text-neutral-900 font-semibold"
              )
            }
          >
            {routes.label}
          </NavLink>
        );
      })}
    </ul>
  );
};

export default Navigation;
