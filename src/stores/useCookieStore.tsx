import { create } from "zustand";

type CookieStore = {
    showBanner: boolean;
    setShowBanner: (value: boolean) => void;
};

export const useCookieStore = create<CookieStore>((set) => ({
    showBanner: false,
    setShowBanner: (value) => set({ showBanner: value }),
}));
