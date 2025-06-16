import { create } from "zustand"
import { AlbumDetailParams } from "../pages/AlbumDetailPage";
import { persist } from "zustand/middleware";


interface StoreParams {
    favorites: AlbumDetailParams[];
    addFavorite: (photo: AlbumDetailParams)=> void;
    removeFavorite: (id:number) => void;
}

export const useStore = create<StoreParams>()(
    persist(
        (set) => ({
            favorites: [],
            addFavorite: (photo) => set((state) => ({favorites: [...state.favorites, photo], })),
            removeFavorite: (id:number) => set((state) => ({favorites: state.favorites.filter((photo) => photo.id !== id),

            })),
        }),
        {
            name: "favorites-storage",
        }
    )
);