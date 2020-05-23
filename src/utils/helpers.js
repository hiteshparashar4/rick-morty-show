import cloneDeep from 'lodash/cloneDeep';
import { getDefaultState } from "../utils/constants";


const filterKeys = ['species', 'gender', 'origin'];

export const getStateObj = (response) => {

  if(response.status === 200) {
    const { info, results } = response.data;
    const filters = [];
    const selectedFilters = [];

    const chars = results.map((item) => {
      return {
        ...item,
        visible: true,
      };
    });

    filterKeys.forEach((filterKey) => {
      const filterObj = { name: filterKey, filterItems: [] };
  
      chars.map((char) => {
        const filterItem =
          filterKey === "origin"
            ? char[filterKey] && char[filterKey].name
            : char[filterKey] || "";
        if (!filterObj.filterItems.includes(filterItem)) {
          filterObj.filterItems.push(filterItem);
          selectedFilters.push(`${filterKey}__${filterItem}`);
        }
      });
  
      filters.push(filterObj);
    });

    return {
      isLoading: false,
      searchText: "",
      sortOrder: "asc",
      info: info,
      characters: chars,
      searchedChars: cloneDeep(chars),
      filters: filters,
      selectedFilters: selectedFilters,
    };
  }

  return getDefaultState();
};

export const getSideBarFilterResults = (
  characters,
  type,
  filterKey,
  checked,
  searchText
) => {
  const selectedFilters = [];

  const newCharacters = characters.map((char) => {
    const typeValue = type === "origin" ? char[type].name : char[type];
    if (typeValue === filterKey) {
      char.visible = checked;
    }

    if (char.visible === true) {
      const speciesFilter = `species__${char.species}`;
      const genderFilter = `gender__${char.gender}`;
      const originFilter = `origin__${char.origin.name}`;

      if (!selectedFilters.includes(speciesFilter))
        selectedFilters.push(speciesFilter);
      if (!selectedFilters.includes(genderFilter))
        selectedFilters.push(genderFilter);
      if (!selectedFilters.includes(originFilter))
        selectedFilters.push(originFilter);
    }
    return char;
  });

  const searchedChars = newCharacters.filter((item) => {
    if (item.visible === true && item.name.toLowerCase().includes(searchText)) {
      return true;
    }
    return false;
  });

  return {
    characters: newCharacters,
    searchedChars: searchedChars,
    selectedFilters: selectedFilters,
  };
};

export const getSearchFilterResult = (characters, searchText) => {
  const searchedChars = characters.filter((item) => {
    if (item.visible === true && item.name.toLowerCase().includes(searchText)) {
      return true;
    }
    return false;
  });

  return {
    searchedChars,
  };
};

export const getCreatedTimeString = (d) => {
  const date = new Date(d);
  const currentDate = new Date();

  const years = currentDate.getFullYear() - date.getFullYear();
  const months = currentDate.getMonth() - date.getMonth();
  const days = currentDate.getDate() - date.getDate();

  if (years > 0) return `created ${years} years ago`;
  if (months > 0) return `created ${months} months ago`;

  return `created ${days} days ago`;
};
