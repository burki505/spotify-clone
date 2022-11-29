import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
        showSideAndHeader: true,
        showDropdown: false
    },
    reducers: {
        login(state,action) {
            state.isLoggedIn = true;
            localStorage.setItem("login",JSON.stringify(true));
        },
        logout(state,action) {
            state.isLoggedIn = false;
            localStorage.removeItem("login");
        },
        showHeaderAndSidebar(state,action) {
            state.showSideAndHeader = true;
        },
        hideHeaderAndSidebar(state,action) {
            state.showSideAndHeader = false;
        },
        toggleDropdownHandler(state,action) {
            console.log("here");
            state.showDropdown = !state.showDropdown;
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice;
