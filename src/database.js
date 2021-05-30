import React, {
  useState,
  useEffect
} from "react";

export default function Data() {
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
      });
  };
  useEffect(() => {
    getData();
  }, []);

  // console.log("hotels:", data);

  return data.hotels;
}

// method: "GET",
// url:
//   "https://hotels4.p.rapidapi.com/properties/list",
// params: {
//   adults1: "1",
//   pageNumber: "1",
//   destinationId: "1506246",
//   pageSize: "25",
//   checkOut: "2020-01-15",
//   checkIn: "2020-01-08",
//   sortOrder: "PRICE",
//   locale: "en_US",
//   currency: "USD"
// },
// headers: {
//   "x-rapidapi-key":
//     "ecdac6c3b4msh04deba4e203ad98p1f2249jsnf68d6a89b2d0",
//   "x-rapidapi-host":
//     "hotels4.p.rapidapi.com"
// }
