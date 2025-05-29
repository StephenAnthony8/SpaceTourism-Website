import { useContext } from "react";
import { CurrentDeviceSize } from "../../Store";

/**
 * NavLogo: renders the Logo + Line section of the Navigation Tab
 */
export default function NavLogo() {
  const deviceSize = useContext(CurrentDeviceSize);
  return(
    <div className="navLogo navLogo-responsive flex">
      <img src="/assets/shared/logo.svg" alt="Space Tourism Logo" className="logo logo-responsive"/>
      {deviceSize === "Desktop" && <div className="logoLine"></div>}
    </div>
  );
}
