import { createSlice } from "@reduxjs/toolkit";

const gigSlice = createSlice({
  name: "gigs",
  initialState: {gigs: null},
  reducers: {
    setGig: (state, action) => {
      state.gigs = action.payload
    }
  }
})

export const { setGig } = gigSlice.actions
export default gigSlice.reducer