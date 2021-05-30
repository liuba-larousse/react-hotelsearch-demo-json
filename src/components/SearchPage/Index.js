import React, {
  useEffect,
  useState
} from "react";
import s from "./index.module.scss";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SearchResult from "./../SearchResult/Index";

import Data from "../../database";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";

export default function SearchPage() {
  const [
    loading,
    setLoading
  ] = useState(false);

  const hotels = Data();
  console.log("pulled hotels:", hotels);

  const [
    showHotels,
    setShowHotels
  ] = useState([]);

  useEffect(() => {
    setShowHotels(hotels);
    hotels.length > 0
      ? setLoading(false)
      : setLoading(true);
  }, [hotels]);

  console.log(
    "show hotels:",
    showHotels
  );

  function sortByRating() {
    const sortedHotels = [
      ...hotels
    ].sort((a, b) =>
      a.guestReviews.unformattedRating >
      b.guestReviews.unformattedRating
        ? 1
        : -1
    );
    return (
      sortedHotels,
      setShowHotels(sortedHotels),
      console.log(
        "sorted hotels by rating:",
        sortedHotels
      )
    );
  }

  function sortByPrice() {
    const sortedHotels = [
      ...hotels
    ].sort((a, b) =>
      a.ratePlan.price.exactCurrent >
      b.ratePlan.price.exactCurrent
        ? 1
        : -1
    );
    return (
      sortedHotels,
      setShowHotels(sortedHotels),
      console.log(
        "sorted hotels by price:",
        sortedHotels
      )
    );
  }

  function sortByReviews() {
    const sortedHotels = [
      ...hotels
    ].sort((a, b) =>
      a.guestReviews.total >
      b.guestReviews.total
        ? 1
        : -1
    );
    return (
      sortedHotels,
      setShowHotels(sortedHotels),
      console.log(
        "sorted hotels by price:",
        sortedHotels
      )
    );
  }

  return (
    <>
      <div className={s.info}>
        <Typography
          gutterBottom
          variant="body2"
          component="p"
        >
          {" "}
          300+ stays
        </Typography>
        <Typography
          gutterBottom
          variant="h3"
          component="h2"
        >
          Stays nearby
        </Typography>
        <div className={s.buttonBox}>
          <Button
            onClick={sortByRating}
            className={s.button}
          >
            rating
          </Button>

          <Button
            className={s.button}
            onClick={sortByPrice}
          >
            price
          </Button>
          <Button
            className={s.button}
            onClick={sortByReviews}
          >
            most reviews
          </Button>
        </div>
        {loading === true && (
          <div className={s.spinner}>
            <CircularProgress color="secondary" />
          </div>
        )}
        {showHotels
          ? showHotels.map((hotel) => (
              <>
                <Link
                  to={
                    "hotel/" + hotel.id
                  }
                  style={{
                    textDecoration:
                      "none"
                  }}
                >
                  <li key={hotel.id}>
                    <SearchResult
                      title={hotel.name}
                      price={
                        hotel.ratePlan
                          .price.current
                      }
                      src={
                        hotel
                          .optimizedThumbUrls
                          .srpDesktop
                      }
                      rating={
                        hotel
                          .guestReviews
                          .rating
                      }
                      reviews={
                        hotel
                          .guestReviews
                          .total
                      }
                    />
                  </li>
                </Link>
              </>
            ))
          : null}
      </div>
    </>
  );
}
