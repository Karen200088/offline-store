import { BASE_URL } from '@/shared/constants/constant';

export const getCategoryItems = async (categoryName: string) => {
  try {
    const resp = await fetch(`${BASE_URL}/category/${categoryName}`);
    const response = await resp.json();
    if (response) return response;
    return [];
  } catch (error) {
    console.error(error);
  }
};
