import axios from 'axios';
import { API_URL } from "../utils/constants";

const get = async (url, page = 1) => {

    const apiUrl = `${url}?page=${page}`;

    const res = await axios.get(apiUrl);
    if(res.status === 200) {
        return res.data;
    }

    return null;
}

const fetchData = async (updateState, page = 1) => {
    const res = await get(API_URL, page);
    if (res === null) {
      updateState({
        error: true,
        isLoading: false,
        info: {},
        characters: []
      });
    }
    updateState({
      info: res.info,
      characters: res.results,
      isLoading: false
    })


    // that.setState({
    //   isLoading: true,
    //   characters: [],
    //   page: page
    // }, async () => {
    //   const res = await get(API_URL, page);
    //   if (res === null) {
    //     that.setState({
    //       error: true,
    //       isLoading: false
    //     });
    //   }
    //   that.setState({
    //     info: res.info,
    //     characters: res.results,
    //     isLoading: false
    //   });
    // })
  }


export default fetchData;