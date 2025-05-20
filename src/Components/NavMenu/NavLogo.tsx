/* import type { devices } from "../../Store"; */

export default function NavLogo(/* deviceType: devices */) {
  /* console.log(deviceType); */
  return (
    <div className="flex logo-container">
      <a href="#" className="nav-logo">
        <img src="/assets/shared/logo.svg" alt="Space Tourism Logo" />
      </a>
      {/*  (deviceType.desktop) ? */ <div className="line-separator"></div>/*  : "" */}
    </div>
  );
}
