interface Props {
  currentPage: number;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
}
/**
 * LargePaginationOptions - renders the Large Pagination section
 * 
 * currentPage - Page to be rendered
 * 
 * activePage - Stores currently active page
 * 
 * setActivePage - Sets the current component as the active item (on click)
 */
export default function LargePaginationOptions({
  active,
  setActive,
  currentPage,
}: Props) {
  const activePage = "bg-white text-dark";
  const optionClasses = "largePagination-tablet-mobile upper circle flex";
  return (
    <li
      className={`largePagination ${optionClasses} ${
        active === currentPage - 1 ? activePage : "bg-dark text-white"
      }`}
      onClick={() => setActive(currentPage - 1)}
    >
      <span>{currentPage}</span>
    </li>
  );
}
