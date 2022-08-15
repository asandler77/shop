import {ShopData} from '../../types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchShopData} from './ActionCreators';

interface ShopState {
  shopData: ShopData[];
  isLoading: boolean;
  error: string;
}

const initialState: ShopState = {
  shopData: [],
  isLoading: true,
  error: '',
};

export const userSlice = createSlice({
  name: 'shops',
  initialState,
  reducers: {
    shopDataFetching(state) {
      state.isLoading = true;
    },
    shopDataFetchingSuccess(state, action: PayloadAction<ShopData>) {
      state.isLoading = false;
      state.error = '';
      state.shopData = action.payload;
    },
    shopDataFetchingError(state, action: PayloadAction<string>) {
      (state.isLoading = false), (state.error = action.payload);
    },
  },
  extraReducers: {
    [fetchShopData.fulfilled]: (
        state,
        action: PayloadAction<ShopData>,
    ) => {
      state.isLoading = false;
      state.error = '';
      state.shopData = action.payload;
    },
    [fetchShopData.rejected]: (state, action: PayloadAction<ShopData>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchShopData.pending]: (state, action: PayloadAction<ShopData>) => {
      state.isLoading = true;
    },
  },
});

export default userSlice.reducer;
