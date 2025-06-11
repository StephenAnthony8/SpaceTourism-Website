import Pagination from "../../GroupedComponents/Pagination/Pagination";
import "./CrewPage.css";

/**
 * CrewPage component for the Space Tourism website.
 * Displays crew details, including a title, crew member image, and content with pagination.
 *
 * @returns {JSX.Element} The rendered CrewPage component.
 */

export default function CrewPage() {
  return (
    <section className="crew-page crew-page-responsive text-white flex-container normal-font-settings">
      {/* 
        */}
      <h2 className="section-page-title upper flex">
        <b>02</b>MEET YOUR CREW
      </h2>
      <div className="crew-page-container flex">
        <CrewContent />
        <aside className="crew-page-image flex">
          <img
            src="/assets/crew/image-mark-shuttleworth.png"
            alt="Mark ShuttleWorth Image"
            className="crew-image crew-image-responsive fade-img"
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

function CrewContent() {
  return (
    <div className="crew-content-container crew-content-container-responsive flex text-white">
      <div className="crew-content-title subcontainer flex">
        <h3 className="crew-content-label upper">Mission Specialist</h3>
        <h1 className="crew-content-name upper">Mark Shuttleworth</h1>
      </div>
      <div className="crew-content-pagination-explanation subcontainer flex">
        <p className="section-content-explanation text-blue">
          Mark Richard Shuttleworth is the founder and CEO of Canonical, the
          company behind the Linux-based Ubuntu operating system. Shuttleworth
          became the first South African to travel to space as a space tourist.
        </p>
        <Pagination renderType="small" paginationOptions={[1, 2, 3, 4]} />
      </div>
    </div>
  );
}
