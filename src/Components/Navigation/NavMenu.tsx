import { useState } from "react";
import UtilityOptions from "../Utilities/UtilityOptions";

/**
 * NavMenu: Renders the Menu options section of the navigation section
 */
export default function NavMenu() {
  const [selected, setSelected] = useState<number | null>(null);
  const optionClasses: string = "navOptions nav-counter navOptions-responsive";
  const menuOptions = [
    { id: 0, option: "Home" },
    { id: 1, option: "Destination" },
    { id: 2, option: "Crew" },
    { id: 3, option: "Technology" },
  ];
  return (
    <nav className="navMenu navMenu-responsive flex">
      {menuOptions.map((value) => (
        <UtilityOptions
          key={value.id}
          id={value.id}
          option={value.option}
          {...{ selected, setSelected, optionClasses }}
          isNavigation={true}
        />
      ))}
    </nav>
  );
}
