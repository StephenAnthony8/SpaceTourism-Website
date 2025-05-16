interface MyProps {
  pageCount: number;
  activePage: number | null;
  setActivePage: React.Dispatch<React.SetStateAction<number | null>>;
}
/**
 * PageCount - The number of pages to be rendered
 * activePage - Check for which node is currently active
 * setActivePage - Sets the current component as the active item on click
 */
export default function LargePaginationOptions({
  pageCount,
  activePage,
  setActivePage,
}: MyProps) {
  const selected: string = "text-dark bg-white"; /* Selected state */
  const unselected: string = "text-white bg-dark"; /* Unselected state */

  return (
    <li
      className={`flex flex-center circle ${
        pageCount === activePage ? selected : unselected
      } large-pagination`}
      onClick={() => setActivePage(pageCount)}
    >
      {pageCount}
    </li>
  );
}
