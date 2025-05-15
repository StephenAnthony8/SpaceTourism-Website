import { useEffect, useState } from "react";

interface MyProps {
    navpage: string;
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}
function NavOptions ({ navpage, activeTab, setActiveTab }: MyProps) {
    /* 
    ToDO : prevent rerendering if unaffected;
     */
    const [isActive, setIsActive] = useState<string>('inactive');

    useEffect(() => {
        if (navpage === activeTab) {
            setIsActive("active");
        } else {
            setIsActive('inactive');
        }
    }, [activeTab, navpage]);

    return (
        <a href="#"
        className={`upper underline underline-${isActive} nav-option`} 
        onClick={() => setActiveTab(navpage)}>
            <span>{navpage}</span>
        </a>
    );

}

export default NavOptions;