import * as apiRequest from '~/utils/apiRequest';

export const search = async (q, type = 'less') => {
  return await apiRequest.get('users/search', {
    params: {
      q,
      type,
    },
  });
};
