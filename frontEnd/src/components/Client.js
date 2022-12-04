import React from "react";
//import mui
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

export default function Client({ el }) {
  return (
    <div style={{ margin: "10px" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            FullName:{el.fullName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Number Gifts
            <CardGiftcardIcon />:{el.nbrGifts}
          </Typography>
          Reset Default:{el.resetDefault}
        </CardContent>
      </Card>
    </div>
  );
}
