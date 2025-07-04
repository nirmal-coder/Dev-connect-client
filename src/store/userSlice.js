import { createSlice } from "@reduxjs/toolkit";

const profile = createSlice({
  name: "profile",
  initialState: {
    profileData: {},
  },
  reducers: {
    updateProfile: (state, action) => {
      state.profileData = action.payload;
    },
  },
});

const { updateProfile } = profile.actions;

export default profile.reducer;
