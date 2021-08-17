import create from "zustand";

const loggedInStore = create((set) => ({
	loggedIn: false,
	setLoggedIn: (prev) => set((state) => ({ loggedIn: prev })),
}));
const useLoadingStore = create((set) => ({
	loading: true,
	setLoading: (prev) => set((state) => ({ loading: prev })),
}));

const useUserData = create((set) => ({
	userData: {},
	setUserData: (data) =>
		set((state) => ({
			userData: data,
		})),
}));

export { loggedInStore, useLoadingStore, useUserData };
