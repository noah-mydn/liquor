import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import theme from "../theme/theme";

export const Category = ({ choice, addToCart, cartItems }) => {
  React.useEffect(() => {
    console.log(choice);
  }, [choice]);
  return (
    <Card
      sx={{
        maxWidth: 250,
        background: theme.palette.info.main,
        height: "100%",
      }}
      elevation={2}
    >
      <CardMedia
        component="img"
        alt={choice?.title}
        sx={{
          objectFit: "cover",
          width: "30%",
          paddingTop: 1,
          margin: "0 auto",
        }}
        image={choice?.url}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign="center"
        >
          {choice?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="center">
          {choice?.description}
        </Typography>
        <Typography textAlign="center" mt={2}>
          {choice?.rate}
        </Typography>
        <Typography variant="h6" textAlign="center" fontWeight="bolder">
          ${choice?.price}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => addToCart(choice)}
          size="small"
          variant="contained"
          sx={{
            background: theme.palette.background.main,
            color: theme.palette.info.main,
          }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};
