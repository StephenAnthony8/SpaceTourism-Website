import "./DestinationPage.css";

import DestinationTabMenu from "../../GroupedComponents/DestinationTabMenu/DestinationTabMenu";

/**
 * DestinationPage component for the Space Tourism website.
 * Displays destination details, including a tab menu, title, image, description, and travel information.
 *
 * @returns {JSX.Element} The rendered DestinationPage component.
 */
export default function DestinationPage() {
  return (
    <section className="destination-page destination-page-responsive text-blue flex-container">
      <h2 className="section-page-title section-page-title-responsive text-white normal-font-settings upper flex">
        {/* Include json number & title here */}
        <b>01</b>PICK YOUR DESTINATION
      </h2>
      <div className="destination-page-container destination-page-container-responsive flex">
        <aside className="destination-image destination-image-responsive flex">
          {/* Include JSON Image & correct alt description */}
          <img
            src="/assets/destination/image-moon.webp"
            alt="Image of the Moon"
          />
        </aside>
        <DestinationContent />
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
function DestinationContent() {
  return (
    <div className="destination-content destination-content-responsive  normal-font-settings flex-container">
      <DestinationTabMenu />
      {/* COntent name - (Moon, Mars, Europa, etc) */}
      <h1 className="destination-content-title destination-content-title-responsive upper">Moon</h1>
      {/* Content description */}
      <p className="section-content-explanation">
        See our planet as you’ve never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you’re
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites.
      </p>
      <div className="divider bg-white"></div>
      <aside className="destination-content-container destination-content-container-responsive  upper normal-font-settings  flex-container">
        <div className="distance-travel-info distance-travel-info-responsive flex">
          <h2 className="distance-header text-blue">Avg. distance</h2>
          {/* Include JSON distance */}
          <p>384,400 km</p>
        </div>
        <div className="distance-travel-info distance-travel-info-responsive flex">
          <h2 className="distance-header text-blue">est. travel time</h2>
          {/* Include JSON travel time */}
          <p>3 days</p>
        </div>
      </aside>
    </div>
  );
}
