import  { useState } from "react";

interface MyProps {
  nums: number[];
  size: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  PaginationComponent: any;
}
/** 
 * nums: nodes to be rendered
 * size: (small or large) specifies which class to use while rendering
 * PaginationComponent: Component type to render 
 * Function: Provide a container for all pagination components to render
 */
export default function Pagination({ nums, size, PaginationComponent }: MyProps) {
  /* Tracks the clicked component */
  const [activePage, setActivePage] = useState<number | null>(null);
  /**
   * TODO
   * Add respective document links to various components
   */

  return (
    <nav className={`flex pagination-menu ${size}-pagination-menu  `}>
      {nums.map((num) => (
        <PaginationComponent
          key={num}
          pageCount={num}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      ))}
    </nav>
  );
}
