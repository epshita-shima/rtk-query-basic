import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes:['Users',"User"],
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "users",
      providesTags: ["Users"],
      keepUnusedDataFor:600,
    }),
    getUsersById: builder.query({
      query: (userId) => `users/${userId}`,
      providesTags:(result,error,arg)=>[
        "Users",
        {type:"User",id:arg},
      ]
    }),
    addUser: builder.mutation({
      query: (data) => ({
        url: "users",
        method: "POST",
        body: data,
      }),
      invalidatesTags:['Users']
    }),
    editUser: builder.mutation({
      query: ({id,data}) => ({
        url: `user/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags:(result,error,arg)=>[
        "Users",
        {type:"User",id:arg.id},
      ]
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags:["Users"]
    }), 
  }),
 
});
export const { useGetAllUsersQuery, useGetUsersByIdQuery, useAddUserMutation,useEditUserMutation ,useDeleteUserMutation} =
  usersApi;
