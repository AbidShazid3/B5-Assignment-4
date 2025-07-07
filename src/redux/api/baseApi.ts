import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://library-management-server-rust.vercel.app/api' }),
    tagTypes: ['book', 'borrow'],
    endpoints: (builder) => ({
        getAllBooks: builder.query({
            query: () => '/books',
            providesTags: ['book'],
        }),
        getSingleBook: builder.query({
            query: (id) => `/books/${id}`,
            providesTags: ['book'],
        }),
        createBook: builder.mutation({
            query: (data) => ({
                url: '/books',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['book'],
        }),
        updateBook: builder.mutation({
            query: ({id, ...data}) => ({
                url: `/books/${id}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['book'],
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/books/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['book'],
        }),
        borrowBook: builder.mutation({
            query: (borrowData) => ({
                url: '/borrow',
                method: 'POST',
                body: borrowData
            }),
            invalidatesTags: ['book']
        }),
        getBorrowSummary: builder.query({
            query: () => '/borrow',
            providesTags: ['borrow'],
        }),
    })
})

export const {useGetAllBooksQuery, useGetSingleBookQuery, useCreateBookMutation ,useUpdateBookMutation ,useDeleteBookMutation, useBorrowBookMutation, useGetBorrowSummaryQuery} = baseApi;