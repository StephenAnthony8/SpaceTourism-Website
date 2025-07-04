import "./App.css";
import MainPage from "./MainPage/MainPage";
import NavigationTab from "./Components/GroupedComponents/Navigation/NavigationTab";
import NavMobile from "./Components/GroupedComponents/Navigation/NavMenu/NavMobile";
import { useEffect, useState, type JSX } from "react";
import { CurrentDevice, NavMobileSetter } from "./UtilityComponents";
import { useMatch } from "react-router";

/**
 * App component for the Space Tourism website.
 * Sets up the main layout, navigation, and device context for the application.
 * Manages the page background state and renders the main content.
 *
 * @returns {JSX.Element} The rendered App component.
 */
function App(): JSX.Element {
  // State to manage the background of the main page
  // This can be used to dynamically change the background based on the current page or section
  const [pageBackground, setPageBackground] =
    useState<string>("bg-destination"); /* To be passed to MainPage */

  const matchDefault = useMatch("/");
  const matchHome = useMatch("/home");
  const matchDestination = useMatch("/destination");
  const matchCrew = useMatch("/crew");
  const matchTechnology = useMatch("/technology");
  useEffect(() => {
    if (matchHome || matchDefault) {
      setPageBackground("bg-homepage");
    } else if (matchDestination) {
      setPageBackground("bg-destination");
    } else if (matchCrew) {
      setPageBackground("bg-crew");
    } else if (matchTechnology) {
      setPageBackground("bg-technology");
    }
  }, [matchDefault, matchHome, matchDestination, matchCrew, matchTechnology]);
  return (
    <div className={"app flex " + pageBackground}>
      <CurrentDevice>

        <NavMobileSetter>
          <NavigationTab />
          <NavMobile />
          <MainPage />
        </NavMobileSetter>
      </CurrentDevice>
    </div>
  );
}

export default App;
