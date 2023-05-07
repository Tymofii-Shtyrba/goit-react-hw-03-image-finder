import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';

const getData = async (query, page) => {
  const response = await axios.get(`?key=34711882-d2bb8b31b4862e0108a3dd354&q=${query.replaceAll(' ', '+')}&image_type=photo&page=${page}&per_page=12`);
  const dataArray = response.data;
  return dataArray;
}

export { getData };