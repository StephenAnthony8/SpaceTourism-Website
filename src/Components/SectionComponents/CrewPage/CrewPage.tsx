
import { useState, type JSX } from "react";
import Pagination from "../../GroupedComponents/Pagination/Pagination";
import {
  UtilitySectionExplanation,
  UtilitySectionHeading,
  UtilitySectionTitle,
} from "../UtilitySectionComponents";
import "./CrewPage.css";
import { crewData, type PageProps } from "../../../Store";
/**
 * CrewPage component for the Space Tourism website.
 * Displays crew details, including a title, crew member image, and content with pagination.
 *
 * @returns {JSX.Element} The rendered CrewPage component.
 */

export default function CrewPage(): JSX.Element {
  
  /* Entries */
  /**
   * selected - currently active option
   * setSelected - sets the currently active option
   * crewData: Data for the crew page. Includes name, role, bio & images.
   
   Usage
   * crewData[selected].option

   Options
   * images.webp - cre image
   * name - crew member name
   * role - crew member role
   * bio - crew member bio
   */
  const [selected, setSelected] = useState<number>(0);

  const pageNumber = "2";
  const pageTitle = "MEET YOUR CREW";

  return (
    <section className="crew-page section-page section-page-responsive text-blue flex-container ">
      {/* renders page number and title */}
      <UtilitySectionTitle {...{ pageNumber, pageTitle }} />
      <div className="crew-page-container flex">
        <CrewContent {...{selected, setSelected}} />
        <aside className="crew-page-image fade-img flex">
          <img
            src={crewData[selected].images.webp}
            alt={crewData[selected].name + " image"}
            className="crew-image crew-image-responsive"
          />
        </aside>
      </div>
    </section>
  );
}

/**
 * CrewContent component for the Space Tourism website.
 * Renders the crew member's role, name, description, and pagination controls.
 *
 * @returns {JSX.Element} The rendered CrewContent component.
 */

function CrewContent({selected, setSelected} : PageProps): JSX.Element {

  const renderType = "small"; // Pagination type for small pagination controls
  const paginationOptions = [0, 1, 2, 3]; // Pagination options for crew members

  return (
    <div className="crew-content-container crew-content-container-responsive flex text-white">
      {/* renders the crew member's name and label */}
      <UtilitySectionHeading
      label={crewData[selected].role}
      name={crewData[selected].name}
       />
      <div className="crew-content-pagination-explanation subcontainer flex">
        <UtilitySectionExplanation explanationText={crewData[selected].bio} />
        <Pagination {...{ renderType, paginationOptions, selected, setSelected }} />
      </div>
    </div>
  );
}
