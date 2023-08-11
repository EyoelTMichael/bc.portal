import { api } from "../../../store/app_api";

export const siteEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
     getSites: builder.query<any, any>({
      query: (data) => ({
        url: "/site/all",
        method: "get",
        params: data?.params,
      }),
      providesTags: ["site"],
    }),
    createSite: builder.mutation<any, any>({
      query: (data) => ({
        url: '/site',
        method: "post",
        data: data?.body,
        params: data?.params,
      }),
      invalidatesTags: (result) => (result ? ["site"] : []),
    }),
    // ... add more user-related endpoints here
  }),
});

export const { useGetSitesQuery, useCreateSiteMutation } = siteEndpoints;
