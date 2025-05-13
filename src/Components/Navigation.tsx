interface MyProps {
    navpage: string;
}
function Navigation ({ navpage }: MyProps) {

    /* Implement a function that adds the 'selected' id to an active option */
    /* TO DO */
    /* 
        - Implement functional counter
        - Style counter {after does not cover it}
     */
    return (
        <li className="upper underline navigation">
            <span>{navpage}</span>
        </li>
    );

}

export default Navigation;