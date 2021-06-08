import React from "react";
import s from "./index.module.scss";
import { useParams } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import DateRangeIcon from "@material-ui/icons/DateRange";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import Button from "@material-ui/core/Button";
import StarIcon from "@material-ui/icons/Star";
import { useHistory } from "react-router-dom";
import { CircularProgress, Typography, Avatar } from "@material-ui/core";
import * as Data from "../../context/Context";

export default function HotelPage() {
  const history = useHistory();
  const params = useParams();
  console.log("paramsId", params.hotelId);

  const { hotels, loading } = Data.useData();

  const sh = hotels.find((hotel) => {
    return hotel.id === parseInt(params.hotelId);
  });
  console.log("selected", sh);

  const nights = 6;
  const cleaning = 55;

  return (
    <>
      {loading === true ? (
        <div className={s.spinner}>
          <CircularProgress color="secondary" />
        </div>
      ) : hotels ? (
        <div className={s.container}>
          {/* Hotel Name */}
          <Typography variant="h4" component="h1" gutterBottom>
            {sh.name}
          </Typography>
          {/* Hotel reviews, location */}
          <Typography
            variant="body1"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            {sh.guestReviews.total} reviews · {sh.location}
          </Typography>

          {/* Image Grid */}
          <div className={s.imageContainer}>
            <div className={s.mainImg}>
              <img src={sh.imageUrls[0]} alt="" />
            </div>
            <div className={s.imageGrid}>
              <div class={s.one}>
                <img src={sh.imageUrls[1]} alt="" />
              </div>
              <div className={s.two}>
                <img src={sh.imageUrls[2]} alt="" />
              </div>
              <div className={s.three}>
                <img src={sh.imageUrls[3]} alt="" />
              </div>
              <div className={s.four}>
                <img src={sh.imageUrls[4]} alt="" />
              </div>
            </div>
          </div>

          <div className={s.bottomContainer}>
            <div className={s.bottomLeft}>
              {/* Hosted by with Avatar*/}
              <div className={s.hostContainer}>
                <div className={s.host}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    Entire bungalow hosted by {sh.host}
                  </Typography>
                  <Typography variant="body1" component="p" gutterBottom>
                    {sh.details}
                  </Typography>
                </div>
                <Avatar
                  alt=""
                  src="https://a0.muscache.com/im/pictures/user/b991c741-04cb-449d-ae2d-1f1316ebb393.jpg?im_w=240"
                />
              </div>

              {/* Some info to take space */}

              <div className={s.infoContainer}>
                <HomeIcon fontSize="large" className={s.icon} color="primary" />
                <div className={s.info}>
                  <Typography variant="subtitle1" component="p">
                    Entire home
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component="p"
                    color="textSecondary"
                  >
                    You’ll have the house to yourself.
                  </Typography>
                </div>
              </div>
              <div className={s.infoContainer}>
                <DateRangeIcon
                  fontSize="large"
                  className={s.icon}
                  color="primary"
                />
                <div className={s.info}>
                  <Typography variant="subtitle1" component="p">
                    Free cancellation for 48 hours
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component="p"
                    color="textSecondary"
                  >
                    You can cancell and get a full refund.
                  </Typography>
                </div>
              </div>
              <div className={s.infoContainer}>
                <MeetingRoomIcon
                  fontSize="large"
                  className={s.icon}
                  color="primary"
                />
                <div className={s.info}>
                  <Typography variant="subtitle1" component="p">
                    Self check-in
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component="p"
                    color="textSecondary"
                  >
                    You can check in with the doorman.
                  </Typography>
                </div>
              </div>
              {/* Description */}
              <div className={s.description}>
                <Typography variant="body2" component="p">
                  {sh.description}
                </Typography>
              </div>
            </div>
            {/* Price Card */}

            <div className={s.bottomRight}>
              <div className={s.priceContainer}>
                <div>
                  <div className={s.priceLineTop}>
                    <Typography variant="h5" component="p" gutterBottom>
                      {sh.ratePlan.price.current} / night
                    </Typography>
                    <div className={s.priceReviews}>
                      <StarIcon color="primary" />
                      {sh.guestReviews.rating} ( {sh.guestReviews.total}{" "}
                      reviews)
                    </div>
                  </div>
                  <div>
                    <div className={s.checkInAndOut}>
                      <div className={s.checkIn}>
                        <Typography variant="caption" component="p">
                          CHECK IN
                        </Typography>
                        <Typography variant="caption" component="p">
                          07/01/2021
                        </Typography>
                      </div>
                      <div className={s.checkOut}>
                        <Typography variant="caption" component="p">
                          CHECK OUT
                        </Typography>
                        <Typography variant="caption" component="p">
                          07/08/2021
                        </Typography>
                      </div>
                    </div>
                    <div className={s.guestsAmount}>
                      <Typography variant="caption" component="p">
                        GUESTS
                      </Typography>
                      <Typography variant="caption" component="p">
                        2 guests
                      </Typography>
                    </div>

                    <Button
                      variant="contained"
                      color="secondary"
                      fullWidth
                      className={s.button}
                    >
                      Reserve
                    </Button>
                    <Typography
                      variant="overline"
                      component="p"
                      color="textSecondary"
                      gutterBottom
                      align="center"
                    >
                      You wont be charged yet
                    </Typography>
                    <div className={s.priceLine}>
                      <Typography
                        variant="subtitle1"
                        component="p"
                        gutterBottom
                        align="center"
                      >
                        {sh.ratePlan.price.current} X {nights} nights
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        component="p"
                        gutterBottom
                        align="center"
                      >
                        $ {sh.ratePlan.price.exactCurrent * nights}
                      </Typography>
                    </div>
                    <div className={s.priceLine}>
                      <Typography
                        variant="subtitle1"
                        component="p"
                        gutterBottom
                        align="center"
                      >
                        Cleaning fee
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        component="p"
                        gutterBottom
                        align="center"
                      >
                        $ {cleaning}
                      </Typography>
                    </div>
                    <div className={s.totalLine}>
                      <Typography
                        variant="subtitle1"
                        component="p"
                        gutterBottom
                        align="center"
                      >
                        TOTAL
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        component="p"
                        gutterBottom
                        align="center"
                      >
                        $ {cleaning + sh.ratePlan.price.exactCurrent * nights}
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={s.link}>
            <Button color="primary" onClick={() => history.push("/")}>
              Go home
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
}
