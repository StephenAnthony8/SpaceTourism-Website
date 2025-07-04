/* import React, { useState } from "react"; */
import LargePaginationOptions from "./LargePaginationOptions";
import SmallPaginationOptions from "./SmallPaginationOptions";
import "./Pagination.css";

interface Props {
  renderType: string;
  paginationOptions: number[];
  selected: number; // Page number for the destination section
  setSelected: React.Dispatch<React.SetStateAction<number>>; // Function to set the page number
}
/**
 * Pagination: renders either pagination menu based on renderType
 *
 * renderType: string specifying which render method to use | "small" or "large"
 *
 * paginationOptions: array of numbers to render
 */
export default function Pagination({
  renderType,
  paginationOptions,
  selected,
  setSelected,
}: Props) {
  /* const [active, setActive] = useState<number | null>(null); */

  /* @ts-expect-error: Correct element & type assignment */
  const RenderPagination: React.FC =
    renderType === "small" ? SmallPaginationOptions : LargePaginationOptions;

  return (
    <nav
      className={`pagination ${
        renderType === "large" ? "pagination-direction" : ""
      } flex`}
    >
      {paginationOptions.map((currentPage) => (
        <RenderPagination
          {...{ currentPage, active: selected, setActive: setSelected }}
          key={currentPage}
        />
      ))}
    </nav>
  );
}
