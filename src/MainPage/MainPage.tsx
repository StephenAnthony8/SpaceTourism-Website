import "./MainPage.css";
/* import HomePage from "../Components/SectionComponents/HomePage/HomePage"; */
import DestinationPage from "../Components/SectionComponents/HomePage/DestinationPage/DestinationPage";

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
    <main className="mainpage flex">
      {/* <HomePage /> */}
      <DestinationPage />
    </main>
  );
}
