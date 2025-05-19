import { useState } from "react";
import NavOptions from "./NavOptions";
import NavLogo from "./NavLogo";

export default function NavMenu() {
  /* 
    To-DO: Prevent rerendering of parent component & unaffected children
     */
  const [activePage, setActivePage] = useState<string>("");
  const navigationOptions: string[] = [
    "Home",
    "Destination",
    "Crew",
    "Technology",
  ];

  return (
    <div className="flex nav-bar">
      {/**
       * Desktop & tablet class: navigation-menu-desktop-tablet 
       * Mobile class: navigation-menu-mobile
       * <ul className="flex nav-menu navigation-menu-mobile"> 
       */}
       <NavLogo />
      <nav className="flex nav-menu">
        {navigationOptions.map((navPage) => (
          <NavOptions
            key={navPage}
            navPage={navPage}
            activePage={activePage}
            setActivePage={setActivePage}
          />
        ))}
      </nav>
    </div>
  );
}
