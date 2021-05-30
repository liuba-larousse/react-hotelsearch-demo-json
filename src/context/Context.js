import React, {
  useContext,
  useEffect,
  useState
} from "react";

const DataContext = React.createContext(
  ""
);

function useData() {
  return useContext(DataContext);
}

function DataProvider({ children }) {
  const [
    loading,
    setLoading
  ] = useState(true);

  const [data, setData] = useState({
    hotels: []
  });

  const getData = () => {
    fetch("hotelsdata.json", {
      headers: {
        "Content-Type":
          "application/json",
        Accept: "application/json"
      }
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
        setLoading(false);
      });
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
