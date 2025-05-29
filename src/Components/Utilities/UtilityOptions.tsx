import { useContext } from "react";
import { CurrentDeviceSize } from "../../Store";

/* interface MyProps {
  navPage: string;
  activePage: string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
} */
interface Props {
  id: number
  option: string;
  selected: number|null;
  setSelected: React.Dispatch<React.SetStateAction<number|null>>;
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
  console.log(isNavigation);
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
