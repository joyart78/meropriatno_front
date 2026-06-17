import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "/api",
  }),
  endpoints: (builder) => ({
    sendContactForm: builder.mutation<{ success: boolean }, ContactFormData>({
      query: (data) => ({
        url: "/contact",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSendContactFormMutation } = baseApi;
