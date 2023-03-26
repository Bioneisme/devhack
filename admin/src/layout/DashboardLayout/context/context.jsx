import {
  createContext,
  useReducer
} from 'react';


export const LayoutContext = createContext(0);

const initialState = {
  collapsed: false,
  hide: true,
  searchHide: true,
  activeSearch: false,
};


const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_COLLAPSED': {
      return {
        ...state,
        collapsed: !state.collapsed,
      }
    }
    case 'SET_HIDE': {
      return {
        ...state,
        hide: !state.hide,
      }
    }
    case 'SET_SEARCH_HIDE': {
      return {
        ...state,
        searchHide: !state.searchHide,
      }
    }
    case 'SET_ACTIVE_SEARCH': {
      return {
        ...state,
        activeSearch: !state.activeSearch,
      }
    }
    default: {
      return state;
    }
  }
}


export const LayoutContextProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  const [layoutState, dispatch] = value;
  function handleCollapsed() {
    dispatch({ type: 'SET_COLLAPSED' });
  }

  function handleSearchHide() {
    dispatch({ type: 'SET_SEARCH_HIDE' });
  }

  function handleHide() {
    dispatch({ type: 'SET_HIDE' });
  }

  return <LayoutContext.Provider value={ {
    layoutState, handleCollapsed, handleSearchHide, handleHide
  }}>
    {children}
  </LayoutContext.Provider>
}
