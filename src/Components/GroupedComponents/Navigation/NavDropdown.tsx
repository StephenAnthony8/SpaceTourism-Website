/* interface Props {
	active: string;
	setActive: React.Dispatch<React.SetStateAction<string>>;
} */
/**
 * NavDropdown: Renders the hamburger/close menu icon in mobile mode
 *
 * active: contains the icon state (active / inactive)
 *
 * setActive: sets the icon state
 */
export default function NavDropdown() {
  return (
    <div className="navDropdown flex">
      <img
        src="/assets/shared/icon-hamburger.svg"
        alt="dropdown"
        className="dropdown-image"
      />
    </div>
  );
}
