import $api from '../Api';

export const getCharacter = async () => {
  const { data } = await $api.get('character/');
  return data;
};
export const getSingleCharacter = async (id: any) => {
  const { data } = await $api.get('character/' + id);
  return data;
};
