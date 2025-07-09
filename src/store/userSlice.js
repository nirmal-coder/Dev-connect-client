import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: null,
  },
  reducers: {
    updateProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { updateProfile } = userSlice.actions;

export default userSlice.reducer;
