
import { createContext } from "react";
/* import { create } from "zustand"; */
import jsonData from "./data/data.json";

/* Screen sizes */
export interface currentDevice {
  maxWidth?: number;
  minWidth?: number;
}
export const mobile: currentDevice = { maxWidth: 730 };
export const tablet: currentDevice = { maxWidth: 1000 };
/* export const desktop: currentDevice = { minWidth: 1001 }; */

/* Context Provider - Device Size {store in variable "deviceSize"*/
export const CurrentDeviceSize: React.Context<string> = createContext("");
/* export const MainPageBgContext: React.Context<string> = createContext<string>("bg-homepage"); */
/* 
commonly recommended screen sizes

- **Mobile:**  
  320px – 480px (small phones)  
  481px – 767px (large phones)

- **Tablet:**  
  768px – 1024px

- **Laptop/Small Desktop:**  
  1025px – 1440px

- **Large Desktop:**  
  1441px and above
*/
interface ActiveState {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}
/* Context Provider - Navigation dropdown state */
// @ts-expect-error - Assignment of empty function to setActive as a placeholder raising error
export const NavMobileState: React.Context<ActiveState> = createContext({
  active: false,
  setActive: () => {},
});


/* Component Data */
export const destinationData = jsonData.destinations;
export const crewData = jsonData.crew;
export const technologyData = jsonData.technology;


/* Interfaces */
export interface PageProps {
  selected: number; // Page number for the destination section
  setSelected: React.Dispatch<React.SetStateAction<number>>; // Function to set the page number
}