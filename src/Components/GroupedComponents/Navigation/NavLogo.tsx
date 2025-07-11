import { useContext } from "react";
import { CurrentDeviceSize } from "../../../Store";
import { Link } from "react-router";
import logo from "/assets/shared/logo.svg";

/**
 * NavLogo: renders the Logo + Line section of the Navigation Tab
 */
export default function NavLogo() {
  const deviceSize = useContext(CurrentDeviceSize);
  return(
    <div className="navLogo navLogo-responsive flex">
      <Link to="/" className="logoLink">
      <img src={logo} alt="Space Tourism Logo" className="logo logo-responsive"/>
      </Link>
      {deviceSize === "Desktop" && <div className="logoLine"></div>}
    </div>
  );
}
