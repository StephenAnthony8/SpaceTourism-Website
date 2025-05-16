interface MyProps {
  pageCount: number;
  activePage: number | null;
  setActivePage: React.Dispatch<React.SetStateAction<number | null>>;
}
/**
 * PageCount - The number of pages to be rendered
 * IsActive - Check for which node is currently active
 * SetIsActive - Sets the current component as the active item on click
 */
export default function SmallPaginationOptions({
  pageCount,
  activePage,
  setActivePage,
}: MyProps) {
  const selected: string = "selected";
  const unselected: string = "unselected";

  return (
    <li
      className={`circle ${
        pageCount === activePage ? selected : unselected
      } small-pagination`}
      onClick={() => setActivePage(pageCount)}
    />
  );
}
