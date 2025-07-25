import "./TechnologyPage.css";
import {
  UtilitySectionExplanation,
  UtilitySectionHeading,
  UtilitySectionTitle,
} from "../UtilitySectionComponents";
import Pagination from "../../GroupedComponents/Pagination/Pagination";
import { useContext, useState } from "react";
import { CurrentDeviceSize, technologyData } from "../../../Store";


import imageLaunchVehiclePortrait from "/assets/technology/image-launch-vehicle-portrait.jpg";
import imageLaunchVehicleLandscape from "/assets/technology/image-launch-vehicle-landscape.jpg";
import imageSpaceportPortrait from "/assets/technology/image-spaceport-portrait.jpg";
import imageSpaceportLandscape from "/assets/technology/image-spaceport-landscape.jpg";
import imageSpaceCapsulePortrait from "/assets/technology/image-space-capsule-portrait.jpg";
import imageSpaceCapsuleLandscape from "/assets/technology/image-space-capsule-landscape.jpg";

export default function TechnologyPage() {
  const [selected, setSelected] = useState<number>(0);
  const screenSize = useContext(CurrentDeviceSize);
    
  /* Entries */
  /**
   * selected - currently active option
   * setSelected - sets the currently active option
   * technologyData: Data for the technology page. Includes name, description  & images(landscape & portrait).
   
   Usage
   * technologyData[selected].option

   Options
   * images.landscape & images.portrait.webp - technology images
   * name - technology member name
   * role - technology member role
   * bio - technology member bio
   */
  const pageNumber = "3";
  const pageTitle = "SPACE LAUNCH 101";
  const renderType = "large"; // Pagination type for large pagination controls
  const paginationOptions = [1, 2, 3]; // Pagination options for technology sections
  const technologyImagesPortrait = [
    imageLaunchVehiclePortrait,
    imageSpaceportPortrait,
    imageSpaceCapsulePortrait
  ];
  const technologyImagesLandscape = [
    imageLaunchVehicleLandscape,
    imageSpaceportLandscape,
    imageSpaceCapsuleLandscape
  ];

  return (
    <section className="technology-page technology-page-responsive section-page section-page-responsive text-blue flex-container">
      <UtilitySectionTitle {...{ pageNumber, pageTitle }} />

      <div className="technology-page-container flex">
        <div className="technology-container technology-container-responsive flex">
          <Pagination {...{ renderType, paginationOptions, selected, setSelected }} />
          <TechnologyPageContent selected={selected} />
        </div>
        <aside className="technology-image flex">
          <img 
          src={screenSize === "Desktop" ? technologyImagesPortrait[selected] : technologyImagesLandscape[selected]}
          alt={technologyData[selected].name + " image"} />
        </aside>
      </div>
    </section>
  );
}

function TechnologyPageContent({ selected } : {selected: number} ) {
  // Content for the technology page

  const label = "The terminology...";
  const classes = "technology-content-title";

  return (
    <section className="technology-content technology-content-responsive flex">
      <UtilitySectionHeading {...{ label, classes }} name={technologyData[selected].name} />
      <UtilitySectionExplanation explanationText={technologyData[selected].description} />
    </section>
  );
}
