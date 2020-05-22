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

export const getSideBarFilterResults = (characters, type, filterKey, checked, searchText) => {
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
        if (
          item.visible === true &&
          item.name.toLowerCase().includes(searchText)
        ) {
          return true;
        }
        return false;
      });

      return {
          characters: newCharacters,
          searchedChars: searchedChars,
          selectedFilters: selectedFilters
      };
}

export const getSearchFilterResult = (characters, searchText) => {

    const searchedChars = characters.filter((item) => {
        if (
          item.visible === true &&
          item.name.toLowerCase().includes(searchText)
        ) {
          return true;
        }
        return false;
      });

    return {
        searchedChars
    };
};