import { ReactNode } from "react";
import Navbar from "@/layout/navbar";
import Footer from "@/layout/footer";
import { routes } from "@/data/navigationRoutes";
import { classNames } from "@/utility/classNames";

export interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout(props: MainLayoutProps) {
  return (
    <>
      <div className={classNames("min-h-screen font-sans")}>
        <Navbar routes={routes} />
        <main>{props.children}</main>
      </div>
      <Footer />
    </>
  );
}
