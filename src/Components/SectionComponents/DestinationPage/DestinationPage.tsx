import "./DestinationPage.css";

import DestinationTabMenu from "../../GroupedComponents/DestinationTabMenu/DestinationTabMenu";
import {
  UtilitySectionExplanation,
  UtilitySectionTitle,
} from "../UtilitySectionComponents";
import { useState, type JSX } from "react";
import { destinationData, type PageProps } from "../../../Store";

/**
 * DestinationPage component for the Space Tourism website.
 * Displays destination details, including a tab menu, title, image, description, and travel information.
 *
 * @returns {JSX.Element} The rendered DestinationPage component.
 */
export default function DestinationPage(): JSX.Element {
  /* Entries */
  /**
   * selected: The currently selected destination index.
   * setSelected: Function to update the selected destination index.
   * destinationData: Data for the destinations, including name, description, distance, travel time, and images. 
   
   Useage
   * destinationData[selected].option

   Options
   * images.webp - images
   * name - destination name
   * description - destination description
   * distance & travel - destination distance & travel
   */
  const [selected, setSelected] = useState<number>(0);
  return (
    <section className="destination-page section-page section-page-responsive text-blue flex-container">
      <UtilitySectionTitle pageNumber="1" pageTitle="PICK YOUR DESTINATION" />
      <div className="destination-page-container destination-page-container-responsive flex">
        <aside className="destination-image destination-image-responsive flex">
          {/* JSON Image & alt description */}
          <img
            src={destinationData[selected].images.webp}
            alt={destinationData[selected].name + " image"}
          />
        </aside>
        <DestinationContent {...{ selected, setSelected }} />
      </div>
    </section>
  );
}

/**
 * DestinationContent component for the Space Tourism website.
 * Renders the content for a specific destination, including tab menu, title, description, and travel info.
 *
 * @returns {JSX.Element} The rendered DestinationContent component.
 */
function DestinationContent({ selected, setSelected }: PageProps): JSX.Element {
  return (
    <div className="destination-content destination-content-responsive  normal-font-settings flex-container">
      <DestinationTabMenu {...{ selected, setSelected }} />
      {/* Content name - (Moon, Mars, Europa, etc) */}
      <h1 className="destination-content-title destination-content-title-responsive upper">
        {destinationData[selected].name}
      </h1>
      {/* Content description */}
      <UtilitySectionExplanation
        explanationText={destinationData[selected].description}
      />
      <div className="divider bg-white"></div>
      <aside className="destination-content-container destination-content-container-responsive  upper normal-font-settings  flex-container">
        <div className="distance-travel-info distance-travel-info-responsive flex">
          <h2 className="distance-header text-blue">Avg. distance</h2>
          {/* distance */}
          <p>{destinationData[selected].distance}</p>
        </div>
        <div className="distance-travel-info distance-travel-info-responsive flex">
          <h2 className="distance-header text-blue">est. travel time</h2>
          {/* travel time */}
          <p>{destinationData[selected].travel}</p>
        </div>
      </aside>
    </div>
  );
}
