import { useState, type JSX } from "react";
import "./App.css";
import NavigationTab from "./Components/GroupedComponents/Navigation/NavigationTab";
import MainPage from "./MainPage/MainPage";
import { CurrentDevice } from "./UtilityComponents";

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
  const [pageBackground, setPageBackground] = useState<string>("bg-destination"); /* To be passed to MainPage */

  return (
    <div className={"app flex " + pageBackground}>
      <CurrentDevice>
        <NavigationTab />
        <MainPage />
        {/*
         */}
        {/* <CompTest /> */}
      </CurrentDevice>
    </div>
  );
}

export default App;
