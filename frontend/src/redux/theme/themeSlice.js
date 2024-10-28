import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: 'light', 
    colorPalette: 'default', 
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        },
        changeColorPalette: (state, action) => {
            state.colorPalette = action.payload; 
        },
    },
});

export const { toggleTheme, changeColorPalette } = themeSlice.actions;

export default themeSlice.reducer;







