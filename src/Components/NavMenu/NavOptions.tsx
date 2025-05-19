interface MyProps {
  navPage: string;
  activePage: string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
}
function NavOptions({ navPage, activePage, setActivePage }: MyProps) {
  return (
    <a
      href="#"
      className={`upper underline underline-${
        navPage === activePage ? "active" : "inactive"
      } nav-option`}
      onClick={() => setActivePage(navPage)}
    >
      <span>{navPage}</span>
    </a>
  );
}

export default NavOptions;
