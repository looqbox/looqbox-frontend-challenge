import DataContext from "../contexts/DataContext";

function ContextWrapper({ children }) {
  
  return (
    <DataContext.Provider
      value={{}}
    >
      {children}
    </DataContext.Provider>
  );
}

export default ContextWrapper;
