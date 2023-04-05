import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

export interface globalStateType {
    activeCardIdx: number;
    addButtonTop: number;
    contentsWrapPt: number;
    activeHeaderTabId: "question" | "response";
}

const initialState: globalStateType = {
    activeCardIdx: -1,
    addButtonTop: 0,
    contentsWrapPt: 100.2,
    activeHeaderTabId: "question",
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setActiveCardIdx: (state, action: PayloadAction<number>) => {
            state.activeCardIdx = action.payload;
        },
        setAddButtonTop: (state, action: PayloadAction<number>) => {
            state.addButtonTop = action.payload;
        },
        setContentsWrapPt: (state, action: PayloadAction<number>) => {
            state.contentsWrapPt = action.payload;
        },
        setActiveHeaderTabId: (state, action: PayloadAction<"question" | "response">) => {
            state.activeHeaderTabId = action.payload;
        },
    },
});

export const { setActiveCardIdx, setAddButtonTop, setContentsWrapPt, setActiveHeaderTabId } = globalSlice.actions;

export const globalState = (state: RootState) => state.global;

export default globalSlice.reducer;
