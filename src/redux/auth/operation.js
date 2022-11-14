import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'

const setAuthToken = (token) => {
     axios.defaults.headers.common['Authorization'] = token
}

const clearAuthToken = () => {
    axios.defaults.headers.common['Authorization'] = ''
}


export const registration = createAsyncThunk(
    'auth/registration',
    async (credentials, thunkAPI) => {
        try {
            const responce = await axios.post('/users/signup', credentials)
            setAuthToken(responce.data.token)
            return responce.data            
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const responce = await axios.post('/users/login', credentials)
            setAuthToken(responce.data.token)
            return responce.data 
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const logOut = createAsyncThunk(
    'auth/logout',
    async(_, thunkAPI) => {
    try {
        const responce = await axios.post('/users/logout')
        clearAuthToken()
        return responce.data 
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
    }
)

export const refreshUser = createAsyncThunk(
    'auth/refreshUser',
    async (_, thunkAPI)=>{
        try {
            const state = thunkAPI.getState()
            const persistToken = state.auth.token

            if (persistToken === null) {
                return thunkAPI.rejectWithValue('no token to do fetch')
            }

            setAuthToken(persistToken)
            const responce = await axios.get('/users/current')
            return responce.data
            
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)