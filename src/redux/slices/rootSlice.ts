import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        game_title: "Grand Theft Auto: San Andreas",
        description: "Robbing Hookers and the occasional mission.",
        price: 60.00,
        rating: "M",
        date_made: "October 26, 2004",
        creator: "Rockstar North",
        review: "You had me at hookers"
    },
    reducers: {
        chooseGame_Title: (state, action) => { state.game_title = action.payload},
        chooseDescription: (state, action) => { state.description = action.payload},
        choosePrice: (state, action) => { state.price = action.payload},
        chooseRating: (state, action) => { state.rating = action.payload},
        chooseDate_Made: (state, action) => { state.date_made = action.payload},
        chooseCreator: (state, action) => { state.creator = action.payload},
        chooseReview: (state, action) => { state.review= action.payload}
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseGame_Title, chooseDescription, choosePrice, 
    chooseRating, chooseDate_Made, chooseCreator, chooseReview } = rootSlice.actions;