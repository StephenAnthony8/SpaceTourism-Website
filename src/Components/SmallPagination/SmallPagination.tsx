import { useEffect, useState } from "react";

interface MyProps {
  pageCount: number;
  isActive: number | null;
  setIsActive: React.Dispatch<React.SetStateAction<number | null>>;
}
export default function SmallPagination({
  pageCount,
  isActive,
  setIsActive,
}: MyProps) {
  const [bgOpacity, setBgOpacity] = useState<string>("unselected");

  useEffect(() => {
    if (pageCount === isActive) {
      setBgOpacity("selected");
    } else {
      setBgOpacity("unselected");
    }
  }, [pageCount, isActive]);

  return (
    <li
      className={`circle ${bgOpacity} small-pagination`}
      onClick={() => setIsActive(pageCount)}
    />
  );
}
