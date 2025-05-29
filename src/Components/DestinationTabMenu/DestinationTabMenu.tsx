import { useState } from "react";
import UtilityOptions from "../Utilities/UtilityOptions";
interface Props {
  menuOptions: {
    id: number,
    option: string
  }[];
}
/**
 * DestinationTabMenu - Generates "DestinationTabMenu" menu options
 * MenuOptions: Options to be generated
 */
export default function DestinationTabMenu ({ menuOptions }: Props) {
    const [selected, setSelected] = useState<number|null>(null);
    const optionClasses: string = "tabOptions";
    return (
        <nav className="destinationTabMenu flex">
            {menuOptions.map((value) => <UtilityOptions
            key={value.id}
            id={value.id}
            option={value.option}
            {...{selected, setSelected, optionClasses}}
            />)}
        </nav>
    );

}