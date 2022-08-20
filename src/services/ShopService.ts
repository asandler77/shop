import {ShopData} from '../types';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';

export const postAPI = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({baseUrl: 'https://localhost.com'}),
  endpoints: builder => ({
    fetchAllPosts: builder.query<ShopData>({
      query: (limit: number = 5) => ({
        url: `/posts`
      })
    }),

    // fetchShopData: builder.query<ShopData>({
    //   query: () => ({
    //     url: 'shops',
    //   }),
    // }),
  }),
});

export const {useFetchShopDataQuery} = postAPI;
