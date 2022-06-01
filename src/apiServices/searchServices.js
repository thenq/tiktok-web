import * as apiRequest from '~/utils/apiRequestConfig';

export const search = async (q, type = 'less') => {
  return await apiRequest.get('users/search', {
    params: {
      q,
      type,
    },
  });
};
