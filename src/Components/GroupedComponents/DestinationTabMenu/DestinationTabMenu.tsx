import { type JSX } from "react";
import UtilityOptions from "../Utilities/UtilityOptions";
import "./DestinationTab.css";
import type { PageProps } from "../../../Store";
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
export default function DestinationTabMenu({ selected, setSelected }: PageProps): JSX.Element {
  /* const [selected, setSelected] = useState<number | null>(0); */
  const menuOptions = [
    { id: 0, option: "Moon" },
    { id: 1, option: "Mars" },
    { id: 2, option: "Europa" },
    { id: 3, option: "Titan" },
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
