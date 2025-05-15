import { useState } from "react";
import LargePaginationOptions from "./LargePaginationOptions";
import SmallPagination from "../SmallPagination/SmallPagination";

export default function LargePagination() {
  const nums: number[] = [1, 2, 3];
  const [isActive, setIsActive] = useState<number | null>(null);
  /**
   * TODO
   * Pass components : Pagination size to Pagination component (to be created)
   * Convert current component to utility component for Large & small component rendering
   * Pass arrays (number of option components to be rendered)
   */

  return (
    <nav className={`flex ${"small"}-pagination-menu pagination-menu`}>
      {nums.map((num) => (
        
        <SmallPagination
          key={num}
          pageCount={num}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      ))}
    </nav>
  );
}
