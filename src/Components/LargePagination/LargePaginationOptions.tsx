import { useEffect, useState } from "react";

interface MyProps {
    pageCount: number;
    isActive: number | null;
    setIsActive: React.Dispatch<React.SetStateAction<number | null>>;
}
export default function LargePaginationOptions ({ pageCount, isActive, setIsActive } : MyProps) {
    /* classes[0] sets the text color & classes[1] sets the bg color */
    const [classes, setClasses] = useState<string[]>(["white", "dark"]);
    useEffect(() => {
        /* pageCount is the comparison value for setting active values */
        if (isActive === pageCount) {
            setClasses(["dark", "white"]);
        } else {
            setClasses(["white", "dark"]);
        }
    }, [pageCount, isActive]);


    /* Changing variables in the class name are 'bg-' & text-' */
    return (
        <li 
        className={`flex flex-center circle text-${classes[0]} bg-${classes[1]} large-pagination`}
        onClick={() => setIsActive(pageCount)}
        >
            {pageCount}
        </li>
    );
}