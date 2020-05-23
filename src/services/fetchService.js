import axios from 'axios';
import { API_URL } from "../utils/constants";

const fetchData = async (page = 1) => {
  const apiUrl = `${API_URL}?page=${page}`;
  const result = await axios.get(apiUrl);
  return result;
};

export default fetchData;