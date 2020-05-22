import axios from 'axios';
import { API_URL } from "../utils/constants";
import cloneDeep from 'lodash/cloneDeep';

const filterKeys = ['species', 'gender', 'origin'];

const fetchData = (updateState, page = 1) => {
    const apiUrl = `${API_URL}?page=${page}`;
    axios.get(apiUrl).then(res => {
      const chars = res.data.results.map(item => {
        return {
          ...item,
          visible: true
        }
      });

      const filters = [];
      const selectedFilters = [];

      filterKeys.forEach(filterKey => {
        const filterObj = { name: filterKey, filterItems: [] };
    
        chars.map(char => {
          const filterItem = filterKey === 'origin' ? (char[filterKey] && char[filterKey].name) : char[filterKey] || '';
          if(!filterObj.filterItems.includes(filterItem)) {
            filterObj.filterItems.push(filterItem);
            selectedFilters.push(`${filterKey}__${filterItem}`);
          }
        })
    
        filters.push(filterObj);
      });

      updateState({
        info: res.data.info,
        characters: chars,
        searchedChars: cloneDeep(chars),
        filters: filters,
        selectedFilters: selectedFilters,
        isLoading: false,
        searchText: '',
        page: page
      })
    })
    .catch(() => {
      updateState({
        error: true,
        isLoading: false,
        info: {},
        characters: [],
        filters: [],
        selectedFilters: [],
        searchText: ''
      });
    });
  }

export default fetchData;