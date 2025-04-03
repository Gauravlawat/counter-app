import {createSlice} from "@reduxjs/toolkit";

export const counterSlice= createSlice({
    name:"counter",
    initialState: {value: 0},
    reducers:{

        Up: (state) => {
            state.value+=1;
        },
        Down: (state) => {
            state.value-=1;
        },
        Reset: (state) => {
            state.value=0;
        },
        
    }
})

export const {Up, Down, Reset} = counterSlice.actions
export default counterSlice.reducer