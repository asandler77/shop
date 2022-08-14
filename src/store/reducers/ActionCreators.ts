import axios from 'axios';
import {ShopData} from '../../types';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchShopData = createAsyncThunk(
    'shops/fetchAll',
    async (_, thunkAPI) => {
        console.log('thunk')
    try {
        const response = await axios.get<ShopData[]>('http://localhost:3000/shops')
        return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(`REquest failed with error: ${e.message}`);
    }
  },
);
