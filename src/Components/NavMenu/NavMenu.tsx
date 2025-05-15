import { useState } from "react";
import NavOptions from "./NavOptions";
import NavLogo from "./NavLogo";

export default function NavMenu() {
  /* 
    To-DO: Prevent rerendering of parent component & unaffected children
     */
  const [activeTab, setActiveTab] = useState<string>("");
  const navigationOptions: string[] = [
    "Home",
    "Destination",
    "Crew",
    "Technology",
  ];

  return (
    <div className="flex nav-container">
      {/**
       * Desktop & tablet class: navigation-menu-desktop-tablet 
       * Mobile class: navigation-menu-mobile
       * <ul className="flex nav-menu navigation-menu-mobile"> 
       */}
       <NavLogo />
      <nav className="flex nav-menu nav-menu-desktop-tablet">
        {navigationOptions.map((option) => (
          <NavOptions
            key={option}
            navpage={option}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ))}
      </nav>
    </div>
  );
}
