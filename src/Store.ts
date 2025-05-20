
import { useMediaQuery } from "react-responsive";
import { create } from "zustand";

type SpaceStore = {
    activePagination: number | null;
    setActivePagination: (activePagination: SpaceStore['activePagination']) => void;

    pageCount: number | null;
    setPageCount: (pageCount: SpaceStore['pageCount']) => void;
}

export const useSpaceStore = create<SpaceStore>((set) => ({
    activePagination: null,
    setActivePagination: (activePagination) => set(() => ({activePagination: activePagination})),

    pageCount: null,
    setPageCount: (pageCount) => set(() => ({pageCount: pageCount}))

}));

export interface devices {
    mobile: boolean
    tablet: boolean
    desktop: boolean
}
export const useDeviceMode = () => {
    const deviceTypes:devices =  {
        mobile: useMediaQuery({maxWidth: 600}),
        tablet: useMediaQuery({maxWidth: 1000}),
        desktop: useMediaQuery({minWidth: 1001})
    };
    return deviceTypes;
}