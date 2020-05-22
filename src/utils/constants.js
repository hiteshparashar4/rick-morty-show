export const API_URL = 'https://rickandmortyapi.com/api/character/';

export const getDefaultState = () => {
    return {
        isLoading: true,
        error: false,
        info: {},
        page: 1,
        characters: [],
        searchedChars: [],
        filters: [],
        selectedFilters: [],
        searchText: "",
        sortOrder: "asc",
      };
};