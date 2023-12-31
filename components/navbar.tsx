import { UserButton, auth } from "@clerk/nextjs";
import ManNav from "./main-nav";
import { redirect } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

const Navbar = () => {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div>Title Here</div>
        <ManNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4 ">
          <ThemeToggle />
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
