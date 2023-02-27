import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import { setCredentials } from '../login/authSlice';

export const API_PORT = import.meta.env.VITE_API_PORT;

const baseQuery = fetchBaseQuery({
  baseUrl: `http://localhost:${API_PORT}/`,
  prepareHeaders: (headers, { getState, endpoint }) => {
    const token = (getState() as RootState).auth.accessToken;
    if (token) {
      headers.set('Authorization', 'Bearer ' + token);
    }
    return headers;
  },
});

//@ts-ignore
// export const baseQueryWithReauth = async (args, api, extraoptions) => {
//   let result = await baseQuery(args, api, extraoptions);
//   if (result?.error?.status === 403) {
//     console.log('sending refresh token failed');
//     const refreshResult = await baseQuery('/user/refresh', api, extraoptions);
//     console.log(refreshResult);
//     if (!refreshResult?.data) {
//       const user = api.getState().auth.user;
//       api.dispatch(setCredentials({ ...refreshResult.data, user }));
//       result = await baseQuery(args, api, extraoptions);
//     } else {
//       api.dispatch(logOut());
//     }
//   }
// };

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: (builder) => ({}),
});
