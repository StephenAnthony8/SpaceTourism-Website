import { useEffect, useState } from "react";
import UtilityOptions from "../../Utilities/UtilityOptions";
import "./NavMenu.css";
import { useLocation } from "react-router";
import { Link } from "react-router";

/**
 * NavMenu: Renders the Menu options section of the navigation section
 */
export default function NavMenu() {
  // State to manage the selected menu option
  const [selected, setSelected] = useState<number>(0);
  const optionClasses: string = "navOptions nav-counter navOptions-responsive";
  const menuOptions = [
    { id: 0, option: "Home" },
    { id: 1, option: "Destination" },
    { id: 2, option: "Crew" },
    { id: 3, option: "Technology" },
  ];

  const currentUrl = useLocation();
  useEffect(() => {
    switch (currentUrl.pathname) {
      case "/":
      case "/home":
        setSelected(0);

        break;
      case "/destination":
        setSelected(1);

        break;
      case "/crew":
        setSelected(2);

        break;
      case "/technology":
        setSelected(3);

        break;
    }
  }, [selected, setSelected, currentUrl]);

  return (
    <nav className="navMenu navMenu-responsive flex">
      {menuOptions.map((value) => (
        <Link to={`/${value.option.toLowerCase()}`} key={value.id}>
          <UtilityOptions
            id={value.id}
            option={value.option}
            {...{ selected, setSelected, optionClasses }}
            isNavigation={true}
          />
        </Link>
      ))}
    </nav>
  );
}
