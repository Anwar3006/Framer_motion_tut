import NavBar from "@/components/navbar";
import { ReactNode } from "react";

const HomePageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default HomePageLayout;
