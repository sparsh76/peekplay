import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    recommend: null,
    newmovie: null,
    original: null,
    trending: null,
};

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers:{
        setMovies: (state,action) => {
            state.recommend = action.payload.recommend;
            state.newmovies = action.payload.newmovie;
            state.original = action.payload.original;
            state.trending = action.payload.trending;
        },
    },
});

export const { setMovies } = movieSlice.actions

export const selectRecommend = (state) => state.movie.recommend;

export const selectnewmovies = state => state.movie.newmovies

export const selectoriginal = state => state.movie.original

export const selecttrending = state => state.movie.trending

export default movieSlice.reducer;