import { useContext } from "react";
import NavDropdown from "./NavDropdown";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import { CurrentDeviceSize } from "../../Store";

/**
 * NavigationTab: renders the complete Navigation section (Logo, menuOptions & dropdown Icon)
 */
export default function NavigationTab() {
  const screenSize: string = useContext(CurrentDeviceSize);
  return (
    <header className="navigationTab navigationTab-responsive flex">
      <NavLogo />
      {screenSize === "Mobile" ? <NavDropdown /> : <NavMenu />}
    </header>
  );
}
