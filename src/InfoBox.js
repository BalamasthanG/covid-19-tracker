import React from "react";
import { Card, Typography, CardContent } from "@material-ui/core";
import "./Infobox.css";

function InfoBox({ title, cases, total, onClick, active, isRed }) {
  return (
    <Card
      onClick={onClick}
      className={`infobox ${active && "infobox--selected"} ${
        isRed && "infobox--red"
      }`}
    >
      <CardContent>
        <Typography className="infobox__title" color="textSecondary">
          {title}
        </Typography>

        <h2 className={`infobox__cases ${!isRed && "infobox__cases--green"}`}>
          {cases}
        </h2>

        <Typography className="infobox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
