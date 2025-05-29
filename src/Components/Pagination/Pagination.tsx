interface Props {
  renderType: string;
  paginationOptions: number[];
}

import React, { useState } from "react";
import LargePaginationOptions from "./LargePaginationOptions";
import SmallPaginationOptions from "./SmallPaginationOptions";

/**
 * Pagination: renders either pagination menu based on renderType
 * 
 * renderType: string specifying which render method to use | "small" or "large"
 * 
 * paginationOptions: array of numbers to render
 */
export default function Pagination({renderType, paginationOptions}: Props) {
  const [active, setActive] = useState<number | null>(null);


  /* @ts-expect-error: Correct element & type assignment */
  const RenderPagination: React.FC = (renderType === "small" ? SmallPaginationOptions : LargePaginationOptions);

  return (
    <nav className="pagination flex">
      {paginationOptions.map((currentPage) => (
        <RenderPagination {...{ currentPage, active, setActive }} 
        key={currentPage}
        />
      ))}
    </nav>
  );
}
