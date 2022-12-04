import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes:['Users'],
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "users",
      providesTags: ["Users"],
    }),
    getUsersById: builder.query({
      query: (userId) => `users/${userId}`,
    }),
    addUser: builder.mutation({
      query: (data) => ({
        url: "users",
        method: "POST",
        body: data,
      }),
      invalidatesTags:['Users']
    }),
  }),
});
export const { useGetAllUsersQuery, useGetUsersByIdQuery, useAddUserMutation } =
  usersApi;
