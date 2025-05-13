interface MyProps {
    tabname: string;
}

export default function TabsMenu ({ tabname }: MyProps) {
    return (
        <li className="uppercase underline tab-menu">
            <span>{tabname}</span>
        </li>
    );
}