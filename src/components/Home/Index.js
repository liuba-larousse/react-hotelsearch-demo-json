import React, {
  useEffect,
  useState
} from "react";
import s from "./index.module.scss";
import Banner from "../Banner/Index";
import Card from "../Card/Index";
// import Data from "../../database";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";
import * as Data from "../../context/Context";

export default function Home() {
  const {
    hotels,
    loading
  } = Data.useData();

  return (
    <div>
      <Banner />
      {loading === true && (
        <div className={s.spinner}>
          <CircularProgress color="secondary" />
        </div>
      )}
      <div className={s.section}>
        {hotels
          ? hotels.map((hotel) => (
              <li key={hotel.id}>
                <Link
                  to={
                    "hotel/" + hotel.id
                  }
                  style={{
                    textDecoration:
                      "none"
                  }}
                >
                  <Card
                    title={hotel.name}
                    price={
                      hotel.ratePlan
                        .price.current
                    }
                    src={
                      hotel.imageUrls[0]
                    }
                    details={
                      hotel.details
                    }
                  />
                </Link>
              </li>
            ))
          : null}
      </div>
    </div>
  );
}
