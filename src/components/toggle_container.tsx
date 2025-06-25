import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";
import Navigation from "./navigation";

const ToggleContainer = () => {
    const { userId } = useAuth();
    return (
        <Sheet>
            <SheetTrigger className="block md:hidden">  <Menu /></SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle></SheetTitle>
                </SheetHeader>
                <nav className="gap-6 flex flex-col items-start">
                    <Navigation isMobile />
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
            </SheetContent>
        </Sheet>

    )
}

export default ToggleContainer
