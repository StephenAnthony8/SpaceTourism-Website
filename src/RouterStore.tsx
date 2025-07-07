import { createHashRouter } from "react-router";
import App from "./App";
import HomePage from "./Components/SectionComponents/HomePage/HomePage";
import CrewPage from "./Components/SectionComponents/CrewPage/CrewPage";
import DestinationPage from "./Components/SectionComponents/DestinationPage/DestinationPage";
import TechnologyPage from "./Components/SectionComponents/TechnologyPage/TechnologyPage";

export const router = createHashRouter([{
    path: "/",
    element: <App />,
    children: [
        // Routes for main secion of website
        {index: true, Component: HomePage}, // Default route
        {path: 'home', Component: HomePage},
        {path: 'destination', Component: DestinationPage},
        {path: 'crew', Component: CrewPage},
        {path: 'technology', Component: TechnologyPage},
    ]
}])

