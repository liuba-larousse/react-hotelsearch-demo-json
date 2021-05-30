import React, {
  useEffect,
  useState
} from "react";
import s from "./index.module.scss";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  CircularProgress,
  Typography
} from "@material-ui/core";
// import Data from "../../database";
import * as Data from "../../context/Context";

export default function HotelPage() {
  const params = useParams();
  console.log(
    "paramsId",
    params.hotelId
  );

  const {
    hotels,
    loading
  } = Data.useData();

  const sh = hotels.find((hotel) => {
    return (
      hotel.id ===
      parseInt(params.hotelId)
    );
  });
  console.log("selected", sh);

  return (
    <>
      {loading === true ? (
        <div className={s.spinner}>
          <CircularProgress color="secondary" />
        </div>
      ) : hotels ? (
        <>
          <Typography
            variant="h4"
            component="h1"
          >
            {sh.name}
          </Typography>
          <Typography
            variant="body2"
            component="p"
          >
            {sh.guestReviews.total}{" "}
            reviews
          </Typography>
          {/* Hotel Name */}
          {/* Hotel reviews, location */}
          {/* Image Grid */}
          {/* Hosted by with Avatar*/}
          {/* Some info to take space */}
          {/* Description */}
          {/* Price Card */}

          <Link to="/">
            Back to homepage
          </Link>
        </>
      ) : null}
    </>
  );
}

// const options = {
//   method: "GET",
//   url: `https://hotels-com-free.p.rapidapi.com/pde/property-details/v1/hotels.com/${id}`,
//   params: {
//     rooms: "1",
//     checkIn: "2021-01-27",
//     checkOut: "2021-01-28",
//     locale: "en_US",
//     currency: "USD",
//     include: "neighborhood"
//   },
//   headers: {
//     "x-rapidapi-key":
//       "ecdac6c3b4msh04deba4e203ad98p1f2249jsnf68d6a89b2d0",
//     "x-rapidapi-host":
//       "hotels-com-free.p.rapidapi.com"
//   }
// };

// useEffect(() => {
//   async function fetchData() {
//     const result = await axios
//       .request(options)
//       .then(function (response) {
//         console.log(
//           "response.data:",
//           response.data
//         );
//         setData(
//           response.data.data.body
//         );
//       })
//       .catch(function (error) {
//         console.error(error);
//       });
//     return result;
//   }
//   fetchData();
// }, [id]);
