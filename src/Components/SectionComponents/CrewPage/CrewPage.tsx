import type { JSX } from "react";
import Pagination from "../../GroupedComponents/Pagination/Pagination";
import {
  UtilitySectionExplanation,
  UtilitySectionHeading,
  UtilitySectionTitle,
} from "../UtilitySectionComponents";
import "./CrewPage.css";
/**
 * CrewPage component for the Space Tourism website.
 * Displays crew details, including a title, crew member image, and content with pagination.
 *
 * @returns {JSX.Element} The rendered CrewPage component.
 */

export default function CrewPage(): JSX.Element {
  const pageNumber = "2";
  const pageTitle = "MEET YOUR CREW";
  const pageImage = "/assets/crew/image-mark-shuttleworth.png"; // Image path for the crew member
  // Image alt text for accessibility
  const imageAltText = "Mark ShuttleWorth" + " Image";

  return (
    <section className="crew-page section-page section-page-responsive text-blue flex-container ">
      {/* UtilitySectionTitle renders the page number and title */}
      <UtilitySectionTitle {...{ pageNumber, pageTitle }} />
      <div className="crew-page-container flex">
        <CrewContent />
        <aside className="crew-page-image fade-img flex">
          <img
            src={pageImage}
            alt={imageAltText}
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

function CrewContent(): JSX.Element {
  const name = "Mark Shuttleworth";
  const label = "Mission Specialist";
  const explanationText =
    "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
  const renderType = "small"; // Pagination type for small pagination controls
  const paginationOptions = [1, 2, 3, 4]; // Pagination options for crew members

  return (
    <div className="crew-content-container crew-content-container-responsive flex text-white">
      {/* UtilitySectionHeading renders the crew member's name and label */}
      <UtilitySectionHeading {...{ label, name }} />
      <div className="crew-content-pagination-explanation subcontainer flex">
        <UtilitySectionExplanation {...{ explanationText }} />
        <Pagination {...{ renderType, paginationOptions }} />
      </div>
    </div>
  );
}
