interface MyProps {
    tabname: string;
}

function TabOptions ({ tabname }: MyProps) {
    return (
        <li className="uppercase underline tab-menu">
            <span>{tabname}</span>
        </li>
    );
}

export default TabOptions;