import { useState } from "react";
import UtilityOptions from "../Utilities/UtilityOptions";
import "./DestinationTab.css";
/* interface Props {
  menuOptions: {
    id: number,
    option: string
  }[];
} */
/**
 * DestinationTabMenu - Generates "DestinationTabMenu" menu options
 *
 * MenuOptions: Options to be generated
 */
export default function DestinationTabMenu() {
  const [selected, setSelected] = useState<number | null>(null);
  const menuOptions = [
    { id: 1, option: "Moon" },
    { id: 2, option: "Mars" },
    { id: 3, option: "Europa" },
    { id: 4, option: "Titan" },
  ];
  const optionClasses: string = "tabOptions";
  return (
    <nav className="destinationTabMenu destinationTab-responsive flex">
      {menuOptions.map((value) => (
        <UtilityOptions
          key={value.id}
          id={value.id}
          option={value.option}
          {...{ selected, setSelected, optionClasses }}
        />
      ))}
    </nav>
  );
}
