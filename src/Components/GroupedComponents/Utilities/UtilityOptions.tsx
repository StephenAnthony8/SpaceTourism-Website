import { useContext } from "react";
import { CurrentDeviceSize } from "../../../Store";
import "./UtilityOptions.css";

interface Props {
  id: number
  option: string;
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  isNavigation?: boolean;
  optionClasses: string;
}
export default function UtilityOptions({
  id,
  option,
  selected,
  setSelected,
  isNavigation = false,
  optionClasses
}: Props) {
  const currentDevice = useContext(CurrentDeviceSize);
  return (

    <li
      className={`utilityOptions flex text-white upper position-${
        isNavigation && currentDevice === "Mobile" ? "right" : "bottom"
      } select-state${selected === id ? "-active" : ""} ${optionClasses}`}

      onClick={() => setSelected(id)}
    >
      
      <span>{option}</span>
    </li>

  );
}
