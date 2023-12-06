import { BASE_URL } from '@/shared/constants/constant';

export const getCategories = async () => {
  try {
    const resp = await fetch(`${BASE_URL}/categories`);
    const response = await resp.json();
    if (response) return response;
    return [];
  } catch (error) {
    console.error(error);
  }
};
