import axios from 'axios';
import Cookies from 'universal-cookie';

export const sendIngredientPhoto = (formData: FormData) => {
  return axios.post(`${process.env.REACT_APP_BASE_URL}/`, formData);
};

export const fetchIngredientsFromImage = (formData: FormData) => {
  return axios.post(
    `${process.env.REACT_APP_BASE_URL}/ingredients/image/search`,
    formData
  );
};

export const fetchImageSearchResult = (query: string) => {
  return axios.get(
    `${process.env.REACT_APP_BASE_URL}/recipes/image/additional-search?ing=${query}`
  );
};

export const fetchWordSearchResult = (query: string | null) => {
  return axios.get(
    `${process.env.REACT_APP_BASE_URL}/recipes/word/search?ing=${query}`
  );
};

export const fetchDetailInfo = (params: string | undefined) => {
  return axios.get(`http://localhost:3000/api/recipes/${params}`);
};

export const registerRecipe = (formData: FormData) => {
  const cookie = new Cookies().get('access_token');
  const header = axios.create({
    headers: {
      Authorization: `Bearer ${cookie}`,
    },
  });
  return header.post(
    `${process.env.REACT_APP_BASE_URL}/recipe-board/register`,
    formData
  );
};

export const deleteRecipe = (params: string | undefined) => {
  const cookie = new Cookies().get('access_token');
  const header = axios.create({
    headers: {
      Authorization: `Bearer ${cookie}`,
    },
  });

  return header.delete(
    `http://localhost:3000/api/recipe-board/delete/${params}`
  );
};

export const updateRecipe = (params: string | undefined) => {
  const cookie = new Cookies().get('access_token');
  const header = axios.create({
    headers: {
      Authorization: `Bearer ${cookie}`,
    },
  });
  return header.get(`http://localhost:3000/api/recipe-board/update/${params}`);
};

export const sendUpdatedRecipe = (
  params: string | undefined,
  formData: FormData
) => {
  const cookie = new Cookies().get('access_token');
  const header = axios.create({
    headers: {
      Authorization: `Bearer ${cookie}`,
    },
  });
  return header.post(
    `http://localhost:3000/api/recipe-board/update/${params}`,
    formData
  );
};
