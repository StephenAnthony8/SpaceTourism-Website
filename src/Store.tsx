import { createContext } from "react";
import { create } from "zustand";

type SpaceStore = {
  activePagination: number | null;
  setActivePagination: (
    activePagination: SpaceStore["activePagination"]
  ) => void;

  pageCount: number | null;
  setPageCount: (pageCount: SpaceStore["pageCount"]) => void;
};

export const useSpaceStore = create<SpaceStore>((set) => ({
  activePagination: null,
  setActivePagination: (activePagination) =>
    set(() => ({ activePagination: activePagination })),

  pageCount: null,
  setPageCount: (pageCount) => set(() => ({ pageCount: pageCount })),
}));

/* Screen sizes */
export interface currentDevice {
  maxWidth?: number;
  minWidth?: number;
}
export const mobile: currentDevice = { maxWidth: 600 };
export const tablet: currentDevice = { maxWidth: 1000 };
/* export const desktop: currentDevice = { minWidth: 1001 }; */

/* Context Provider - Device Size {store in variable "deviceSize"*/
export const CurrentDeviceSize: React.Context<string> = createContext("");
