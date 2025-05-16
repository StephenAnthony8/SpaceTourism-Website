interface MyProps {
  planet: string;
activePlanet: string;
setActivePlanet: React.Dispatch<React.SetStateAction<string>>;
}

export default function TabOptions({ planet, activePlanet, setActivePlanet }: MyProps) {

	const active: string = "active";
	const inactive: string = "inactive"; 

  return (
    <li className={`uppercase underline underline-${activePlanet === planet ? active : inactive} tab-option`} onClick={() => setActivePlanet(planet)}>
      <span>{planet}</span>
    </li>
  );
}
