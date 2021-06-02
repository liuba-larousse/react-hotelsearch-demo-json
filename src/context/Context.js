import React, {
  useContext,
  useEffect,
  useState
} from "react";

const DataContext =
  React.createContext("");

function useData() {
  return useContext(DataContext);
}

function DataProvider({ children }) {
  const [loading, setLoading] =
    useState(true);

  const [data, setData] = useState({
    hotels: []
  });

  const getData = async () => {
    try {
      const response = await fetch(
        "/hotelsdata.json",
        {
          headers: {
            "Content-Type":
              "application/json",
            Accept: "application/json"
          }
        }
      );
      console.log(response);
      const myJson =
        await response.json();
      setData(myJson);
    } catch (e) {
      console.log("error", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const hotels = data.hotels;

  console.log("hotels:", hotels);
  const value = {
    loading,
    setLoading,
    hotels,
    getData
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
}

export { useData, DataProvider };
