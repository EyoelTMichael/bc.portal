import { api } from "../../../store/app_api";

export const userEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    // createUser: builder.mutation({
    //   query: (newUser) => ({
    //     url: 'users',
    //     method: 'POST',
    //     body: newUser,
    //   }),
    // }),
     getAccountChildrenById: builder.query<any, any>({
      query: () => ({
        url: "/user/all",
        method: "get",
        // params: data?.params,
      }),
    //   providesTags: ["Account"],
    }),
    // ... add more user-related endpoints here
  }),
});

export const { useGetAccountChildrenByIdQuery } = userEndpoints;