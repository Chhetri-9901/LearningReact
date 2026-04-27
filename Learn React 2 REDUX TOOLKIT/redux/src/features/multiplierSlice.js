import { createSlice } from "@reduxjs/toolkit";

export const multiplierSlice = createSlice({
    name: 'multiplier',
    initialState: {
        value: 1
    },
    reducers: {
        multiply: (state, actions) => {
            state.value *= actions.payload;
        }
    }
})

export const {multiply} = multiplierSlice.actions
export default multiplierSlice.reducer