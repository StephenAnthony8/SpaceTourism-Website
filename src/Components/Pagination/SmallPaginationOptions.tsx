interface Props {
  currentPage: number;
  active: number | null;
  setActive: React.Dispatch<React.SetStateAction<number | null>>;
}
/**
 * SmallPaginationOptions - renders the Small Pagination section
 * 
 * currentPage - Page to be rendered
 * 
 * activePage - stores currently active Page
 * 
 * setActivePage - Sets the current component as the active item (on click)
 */
export default function SmallPaginationOptions({
  active,
  setActive,
  currentPage,
}: Props) {
  const activePage = "smallPagination-active";
  const optionClasses = "smallPagination-tablet upper circle bg-white";
  return (
    <li
      className={`smallPagination ${
        active === currentPage ? activePage : ""
      } ${optionClasses}`}
      onClick={() => setActive(currentPage)}
    ></li>
  );
}
