import React, { createContext, useContext, useReducer } from "react";

// Prepare the data layer
export const DataLayerContext = createContext();

// Wrap our app and provide the Data Layer
export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

// Pull information from the data layer
export const useDataLayerValue = () => useContext(DataLayerContext);
