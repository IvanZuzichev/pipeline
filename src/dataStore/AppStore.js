import { create } from "zustand";

const AppStore = create((set) => ({
    isAuth: false,
    toggle: () => {
        set((state) => ({
            isAuth: !state.isAuth
        }))
    }
}))

export default AppStore;