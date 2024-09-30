import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Artwork {
  length: number;
  slice(startIndex: number, arg1: number): unknown;
  authorId: number;
  created: string;
  id: number;
  imageUrl: string;
  locationId: number;
  name: string;
}

export const URL = "https://test-front.framework.team";

export const api = createApi({
  keepUnusedDataFor: 60,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints: (build) => ({
    paintigList: build.query<Artwork[], string | void>({
      query(searchQuery) {
        const url = searchQuery ? `/paintings?q=${searchQuery}` : "/paintings";
        return {
          url,
          method: "GET",
        };
      },
    }),
  }),
});

export const { usePaintigListQuery } = api;
