import { create } from "zustand";

type AuthstoreTypes = {
    token: string | null;
    addtoken: (token: string) => void;
    removetoken: () => void;
    loadToken: () => void;
};

export const useAuthstore = create<AuthstoreTypes>((set) => ({
    token: null,

    addtoken: (token) => {
        localStorage.setItem("token", JSON.stringify(token));
        set({ token });
    },

    removetoken: () => {
        localStorage.removeItem("token");
        set({ token: null });
    },

    loadToken: () => {
        if (typeof window !== "undefined") {
            const storedToken = localStorage.getItem("token");
            if (storedToken) {
                try {
                    const token = JSON.parse(storedToken);
                    set({ token: token || null });
                } catch (error) {
                    localStorage.removeItem("token");
                    set({ token: null });
                }
            } else {
                set({ token: null });
            }
        }
    }
}));