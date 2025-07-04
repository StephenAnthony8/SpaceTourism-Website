import "./NavMenu.css";
import NavMenu from "./NavMenu";
import { NavMobileState } from "../../../../Store";
import { useContext, useEffect, useState } from "react";
export default function NavMobile() {
  const { active, setActive } = useContext(NavMobileState);
  const [drawer, setDrawer] = useState<string>("invisible");
  const handleDropdown = () => {
    setDrawer("invisible");
    setActive(false);
  };

  useEffect(() => {
    if (active) {
      setDrawer("flex");
    } else {
      setDrawer("invisible");
    }
  }, [active]);

  return (
    <aside className={`navmobile navmobile-container ${drawer}`}>
      <div className="dropdown-icon-container">
        <div className="navDropdown flex">
          <img
            src="/assets/shared/icon-close.svg"
            alt="close dropdown"
            className="dropdown-image"
            onClick={handleDropdown}
          />
        </div>
      </div>
      <NavMenu />
    </aside>
  );
}
