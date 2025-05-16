import { useState } from "react";
import TabOptions from "./TabOptions";

export default function TabMenu ({ planets } : { planets: string[]}) {
    /* Use active planet name for Main UI tab */
    const [activePlanet, setActivePlanet] = useState<string>("");

    return <nav className="flex">
        {planets.map((planet) => <TabOptions 
        key={planet}
        planet={planet} 
        activePlanet={activePlanet} 
        setActivePlanet={setActivePlanet}
        />)}
    </nav>;

}