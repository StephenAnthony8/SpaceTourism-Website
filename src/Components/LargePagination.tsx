interface MyProps {
    pageCount: number;
}
export default function LargePagination ({ pageCount } : MyProps) {
    /* Changing variables in the class name are 'bg-' & text-' */
    return (
        <li className="flex flex-center circle text-white bg-dark large-pagination">
            {pageCount}
        </li>
    );
}