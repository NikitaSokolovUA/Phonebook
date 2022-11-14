const { createSlice } = require("@reduxjs/toolkit");
const { registration, login, logOut, refreshUser } = require("./operation");

const authSlice = createSlice({
    name: 'auth', 
    initialState: {
        user: {
            name: '',
            email: '',
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: {
        [registration.fulfilled](state, action) {
            state.isLoggedIn = true;
            state.token = action.payload.token
            state.user = action.payload.user
        },
        [login.fulfilled](state, action) {
            state.isLoggedIn = true;
            state.token = action.payload.token
            state.user= action.payload.user
        },
        [logOut.fulfilled](state) {
            state.isLoggedIn = false
            state.token = null
            state.user = {name: '', email: ''}
        },
        [refreshUser.fulfilled](state, action) {
            state.isLoggedIn = true
            state.user.name = action.payload.name
            state.user.email = action.payload.email
        },
        [refreshUser.pending](state) {
            state.isRefreshing= true
        },
        [refreshUser.rejected](state) {
            state.isRefreshing= false
        }
    }
})

export const authReducer = authSlice.reducer