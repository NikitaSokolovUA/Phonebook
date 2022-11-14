import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk('contacts/fetchAll',    
    async (controller, thunkAPI) => {
        try {
            const responce = await axios.get('/contacts', {
                signal: controller.signal
            })
            return responce.data
        } catch (e) {
             return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact', 
    async (credentials, thunkAPI) => {
        try {
            const responce = await axios.post('/contacts', credentials)
            return responce.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            const responce = await axios.delete(`/contacts/${contactId}`)
            return responce.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)