import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import styled from "@emotion/styled";
import theme from "../theme/theme";

export const Reviews = ({ mobileScreen }) => {
  const reviewData = [
    {
      url: "./reviews/boy-one.jpg",
      name: "John Doe",
      comment:
        "Exceptional service! The variety of liquors available is amazing, and the delivery was prompt. Will definitely shop here again!",
    },
    {
      url: "./reviews/girl-one.jpg",
      name: "Jane Smith",
      comment:
        "SIPnSHOP has a fantastic selection of premium spirits. The ordering process is smooth, and the packaging was excellent. Highly recommended!",
    },
    {
      url: "./reviews/boy-two.jpg",
      name: "Alex Johnson",
      comment:
        "Impressed with the quality of products and the attention to detail. The website is user-friendly, making it easy to find what I was looking for.",
    },
    {
      url: "./reviews/girl-two.jpg",
      name: "Emily Brown",
      comment:
        "Great experience overall! The customer support team was helpful, and the prices are competitive. SIPnSHOP is my go-to for liquor purchases.",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const ReviewContainer = styled(Box)({
    width: "100%",
    padding: "0.5em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "1em",
  });

  const Review = ({ review }) => {
    return (
      <ReviewContainer>
        <Box
          component="img"
          src={review?.url}
          alt="customer-profile-picture"
          width="100px"
          height="100px"
          borderRadius="50%"
          sx={{ objectFit: "cover" }}
        />
        <Typography
          mt={1}
          variant="h6"
          gutterBottom={3}
          component="h6"
          color={theme.palette.info.main}
        >
          {review?.name}
        </Typography>
        <Typography
          mt={2}
          textAlign="center"
          variant="body2"
          component="body2"
          gutterBottom={3}
          color={theme.palette.info.main}
          width={mobileScreen ? "80%" : "50%"}
        >
          {review?.comment}
        </Typography>
      </ReviewContainer>
    );
  };

  return (
    <Box mb={8}>
      <Slider {...settings} className="slick-review">
        {reviewData?.map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </Slider>
    </Box>
  );
};
