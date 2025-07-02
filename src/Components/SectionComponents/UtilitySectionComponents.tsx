import type { JSX } from "react";

export function UtilitySectionTitle({
  pageNumber,
  pageTitle,
}: {
  pageNumber: string;
  pageTitle: string;
}): JSX.Element {
  return (
    <h2 className="section-page-title section-page-title-responsive upper text-white flex">
      {/* Include json number & title here */}
      <b>0{pageNumber}</b>
      {pageTitle}
    </h2>
  );
}
interface sectionContentProps {
  label: string;
  name: string;
  classes?: string;
  // Optional classes for additional styling
}
export function UtilitySectionHeading({
  label,
  name,
  classes,
}: sectionContentProps): JSX.Element {
  return (
    <>
      <div
        className={`${classes} section-content-title section-content-title-responsive upper subcontainer flex`}
      >
        <h3 className="section-content-label">{label}</h3>
        <h1 className="section-content-name">{name}</h1>
      </div>
    </>
  );
}

export function UtilitySectionExplanation({
  explanationText,
  classes,
}: {
  explanationText: string;
  classes?: string;
}): JSX.Element {
  return (
    <p className={`${classes} section-content-explanation text-blue`}>
      {explanationText}
    </p>
  );
}