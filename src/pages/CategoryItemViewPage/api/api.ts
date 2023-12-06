import { BASE_URL } from '@/shared/constants/constant';

export const getOneProduct = async (productId: string) => {
  try {
    const resp = await fetch(`${BASE_URL}/${productId}`);
    const response = await resp.json();
    if (response) return response;
    return null;
  } catch (error) {
    console.error(error);
  }
};
