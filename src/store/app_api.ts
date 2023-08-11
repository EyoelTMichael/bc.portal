import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../core/utils/custom_base_query';

export const api = createApi({
  baseQuery: axiosBaseQuery({ baseUrl: "http://192.168.43.82:5259"}),
  tagTypes: [
    "site"
  ],
  endpoints: (builder) => ({
    // your endpoints here
  }),
});