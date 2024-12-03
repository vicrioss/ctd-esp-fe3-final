import { useEffect } from "react";
import { createContext, useContext, useReducer, useMemo, useCallback } from "react";
import axios from "axios";

export const initialState = { theme: "light", data: [], favoritos: [] };

const actionTypes = {
  SET_THEME: "SET_THEME",
  SET_DATA: "SET_DATA",
  ADD_FAV: "ADD_FAV",
  REMOVE_FAV: "REMOVE_FAV", 
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_THEME:
      return { ...state, theme: action.payload };
    case actionTypes.SET_DATA:
      return { ...state, data: action.payload };
    case actionTypes.ADD_FAV:
      return {
        ...state,
        favoritos: [...state.favoritos, action.payload],
      };
    case actionTypes.REMOVE_FAV:
      return {
        ...state,
        favoritos: state.favoritos.filter((fav) => fav.id !== action.payload),
      };
    default:
      return state;
  }
};

export const ContextGlobal = createContext({});

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(state.favoritos));
  }, [state.favoritos]);

  const toggleTheme = useCallback(() => {
    dispatch({
      type: actionTypes.SET_THEME,
      payload: state.theme === "light" ? "dark" : "light",
    });
  }, [state.theme]);

  useEffect(() => {
    document.body.className = state.theme; 
  }, [state.theme]);

  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => {
        dispatch({ type: actionTypes.SET_DATA, payload: res.data });
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  const contextValue = useMemo(
    () => ({
      state,
      dispatch,
      toggleTheme,
    }),
    [state, toggleTheme]
  );

  return <ContextGlobal.Provider value={contextValue}>{children}</ContextGlobal.Provider>;
};

export const useGlobalContext = () => useContext(ContextGlobal);

