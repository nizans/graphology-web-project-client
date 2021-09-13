import { BASE_URL } from 'config/constants';


const SERVICES_URL = new URL(BASE_URL + '/api/services');
const requests = {
  GET_ALL: {
    query: ['services'],
    url: SERVICES_URL,
    options: { method: 'get' },
  },
  GET_BY_ID: id => ({
    query: ['services', id],
    url: SERVICES_URL,
    options: { method: 'get' },
  }),

  ADD: {
    query: ['services'],
    url: SERVICES_URL,
    options: { method: 'post' },
    body: {},
  },

  DELETE: {
    query: ['services'],
    url: SERVICES_URL,
    options: { method: 'delete' },
  },

  UPDATE: {
    query: ['services'],
    url: SERVICES_URL,
    options: { method: 'put' },
  },
};

export const SERVICES_API = Object.freeze(requests);

// export const useFetchServices = () => {
//   return useQuery('services', async () => {
//     try {
//       const res = await fetch('/api/services');
//       const data = await res.json();
//       if (!res.ok) {
//         throw new Error(data.message);
//       }
//       return data;
//     } catch (error) {
//       throw error;
//     }
//   });
// };

// export const useFetchService = id => {
//   return useQuery(['services', id], async () => {
//     try {
//       const res = await fetch(`/api/services/${id}`);
//       const data = await res.json();
//       if (!res.ok) {
//         throw new Error(data.message);
//       }
//       return data;
//     } catch (error) {
//       throw error;
//     }
//   });
// };

// export const useDeleteService = () => {
//   const queryClient = useQueryClient();
//   return useMutation(
//     'services',
//     async id => {
//       try {
//         const res = await fetch(`/api/services/${id}`, { method: 'delete' });
//         const data = await res.json();
//         if (!res.ok) {
//           throw new Error(data.message);
//         }
//         return data;
//       } catch (error) {
//         throw error;
//       }
//     },
//     {
//       onSuccess: () => {
//         queryClient.refetchQueries('services');
//       },
//     }
//   );
// };

// export const useAddService = () => {
//   return useMutation('services', async service => {
//     try {
//       const res = await fetch('/api/services', {
//         method: 'post',
//         headers: new Headers({
//           Accept: 'application/json',
//         }),
//         body: service,
//       });
//       const data = await res.json();
//       if (!res.ok) {
//         throw new Error(data.message);
//       }
//       return data;
//     } catch (error) {
//       throw error;
//     }
//   });
// };
