
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