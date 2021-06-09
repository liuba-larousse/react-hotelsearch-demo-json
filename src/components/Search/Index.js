import React, { useState } from "react";
import s from "./index.module.scss";
import Button from "@material-ui/core/Button";
import { DateRangePicker, DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import PeopleIcon from "@material-ui/icons/People";
import { useHistory } from "react-router-dom";
import { Typography } from "@material-ui/core";

export default function Search() {
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection"
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className={s.container}>
      {}
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
        direction="vertical"
      />
      <div className={s.input}>
        <Typography variant="body1" component="p">
          Number of guests
        </Typography>
        <PeopleIcon />

        <input min={0} defaultValue={2} type="number" />
        <Button
          variant="outlined"
          color="primary"
          onClick={() => history.push("./search")}
        >
          Search hotels
        </Button>
      </div>
    </div>
  );
}
