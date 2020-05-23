import axios from 'axios';
import { API_URL } from "../utils/constants";

let request = null;

const fetchData = async (page = 1) => {
  const apiUrl = `${API_URL}?page=${page}`;

  if(request) {
    request.cancel();
  }

  const source = axios.CancelToken.source();
  request = source;

  const result = await axios.get(apiUrl, {cancelToken: source.token});
  return result;
};

export default fetchData;