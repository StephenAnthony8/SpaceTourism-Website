import "./MainPage.css";
/* import HomePage from "../Components/SectionComponents/HomePage/HomePage";
import DestinationPage from "../Components/SectionComponents/DestinationPage/DestinationPage";
import CrewPage from "../Components/SectionComponents/CrewPage/CrewPage";
import TechnologyPage from "../Components/SectionComponents/TechnologyPage/TechnologyPage";
import { useMatch } from "react-router";
import { useEffect, useState } from "react"; */
import { Outlet } from "react-router";


/**
 * MainPage component for the Space Tourism website.
 * Acts as the main content container, rendering the current section (e.g., HomePage, DestinationPage).
 *
 * @returns {JSX.Element} The rendered MainPage component.
 */
export default function MainPage() {
  /* const backgroundPages: string[] = [
        "bg-homepage",
        "bg-destination",
        "bg-crew",
        "bg-technology",
      ]; */




  return (
    <main className="mainpage normal-font-settings flex">
      <Outlet />
    </main>
  );
}
