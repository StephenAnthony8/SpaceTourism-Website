import "./TechnologyPage.css";
import {
  UtilitySectionExplanation,
  UtilitySectionHeading,
  UtilitySectionTitle,
} from "../UtilitySectionComponents";
import Pagination from "../../GroupedComponents/Pagination/Pagination";

export default function TechnologyPage() {
  const pageNumber = "3";
  const pageTitle = "SPACE LAUNCH 101";
  const renderType = "large"; // Pagination type for large pagination controls
  const paginationOptions = [1, 2, 3]; // Pagination options for technology sections
  // Image path for the technology page 
  const pageImage = "/assets/technology/image-spaceport-portrait.jpg"; // Example image path
  /* Images are both landscape & Portrait */
  // Image alt text for accessibility
  const imageAltText = "Spaceport Image";

  return (
    <section className="technology-page technology-page-responsive section-page section-page-responsive text-blue flex-container">
      <UtilitySectionTitle {...{ pageNumber, pageTitle }} />

      <div className="technology-page-container flex">
        <div className="technology-container technology-container-responsive flex">
          <Pagination {...{ renderType, paginationOptions }} />
          <TechnologyPageContent />
        </div>
        <aside className="technology-image flex">
          <img src={pageImage} alt={imageAltText} />
        </aside>
      </div>
    </section>
  );
}

function TechnologyPageContent() {
  // Content for the technology page
  const name = "spaceport";
  const label = "The terminology...";
  const classes = "technology-content-title";
  // Explanation text for the technology page
  const explanationText =
    "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
  return (
    <section className="technology-content technology-content-responsive flex">
      <UtilitySectionHeading {...{ label, name, classes }} />
      <UtilitySectionExplanation {...{ explanationText }} />
    </section>
  );
}
