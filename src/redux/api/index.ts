import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IDog } from "../interfaces";

export const dogApi = createApi({
  reducerPath: "dogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thedogapi.com/v1",
  }),
  endpoints: (builder) => ({
    getDogsList: builder.query<IDog[], number | void>({
      query: (limit = 1): string =>
        `/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=${limit}`,
    }),
  }),
});

export const { useGetDogsListQuery } = dogApi;
