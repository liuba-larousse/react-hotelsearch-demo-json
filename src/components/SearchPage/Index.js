import React, { useEffect, useState } from "react";
import s from "./index.module.scss";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SearchResult from "./../SearchResult/Index";
import { useHistory } from "react-router-dom";
import * as Data from "../../context/Context";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";

export default function SearchPage() {
  const history = useHistory();
  const [sortedHotels, setSortedHotels] = useState([]);

  const { loading, hotels } = Data.useData();

  function sortByRating() {
    const sortedHotels = [...hotels].sort((a, b) =>
      a.guestReviews.unformattedRating > b.guestReviews.unformattedRating
        ? -1
        : 1
    );
    return (
      sortedHotels,
      setSortedHotels(sortedHotels),
      console.log("sorted hotels by rating:", sortedHotels)
    );
  }

  function sortByPrice() {
    const sortedHotels = [...hotels].sort((a, b) =>
      a.ratePlan.price.exactCurrent > b.ratePlan.price.exactCurrent ? 1 : -1
    );
    return (
      sortedHotels,
      setSortedHotels(sortedHotels),
      console.log("sorted hotels by price:", sortedHotels)
    );
  }

  function sortByReviews() {
    const sortedHotels = [...hotels].sort((a, b) =>
      a.guestReviews.total > b.guestReviews.total ? -1 : 1
    );
    return (
      sortedHotels,
      setSortedHotels(sortedHotels),
      console.log("sorted hotels by reviews:", sortedHotels)
    );
  }

  const hotelsToRender =
    hotels.length > 0 && sortedHotels.length > 0 ? sortedHotels : hotels;

  return (
    <>
      <div className={s.info}>
        <Typography gutterBottom variant="body2" component="p">
          {" "}
          300+ stays
        </Typography>
        <Typography gutterBottom variant="h3" component="h2">
          Stays nearby
        </Typography>
        <div className={s.buttonBox}>
          <Button onClick={sortByRating} variant="outlined" color="primary">
            rating
          </Button>
          <Button onClick={sortByPrice} variant="outlined" color="primary">
            price
          </Button>
          <Button variant="outlined" color="primary" onClick={sortByReviews}>
            most reviews
          </Button>
        </div>
        {loading === true && (
          <div className={s.spinner}>
            <CircularProgress color="secondary" />
          </div>
        )}
        {hotelsToRender.map((hotel) => (
          <>
            <Link
              to={"hotel/" + hotel.id}
              style={{
                textDecoration: "none"
              }}
            >
              <li key={hotel.id}>
                <SearchResult
                  title={hotel.name}
                  price={hotel.ratePlan.price.current}
                  src={hotel.imageUrls[0]}
                  rating={hotel.guestReviews.rating}
                  reviews={hotel.guestReviews.total}
                  details={hotel.details}
                />
              </li>
            </Link>
          </>
        ))}
        <div className={s.link}>
          <Button color="primary" onClick={() => history.push("/")}>
            Go home
          </Button>
        </div>
      </div>
    </>
  );
}
