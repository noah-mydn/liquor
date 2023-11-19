import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import styled from "@emotion/styled";
import { specialDeals } from "../data/specialDeals/specialDeals";
import theme from "../theme/theme";

export const SpecialDeals = ({ tabletScreen, mobileScreen }) => {
  const [isHover, setIsHover] = React.useState(null);

  const handleHover = (text) => {
    setIsHover(text);
  };

  const resetHover = () => {
    setIsHover(null);
  };
  var settings = {
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const ImageWrapper = styled(Box)({
    position: "relative",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 4,
    marginBottom: "2em",
    background: "white",
    width: "280px",
    height: "280px",
    "&:hover .slide-in": {
      transform: "translateY(0)",
    },
  });

  const SliderImage = ({ product }) => {
    return (
      <ImageWrapper
        onMouseOver={() => handleHover(product?.text)}
        onMouseLeave={resetHover}
      >
        <Box
          component="img"
          src={product?.url}
          alt={product?.title}
          borderRadius={4}
          display="block"
          sx={{
            objectFit: "contain",
            width: "30%",
            transition: "0.5s ease-in-out",
          }}
        />

        <Typography
          variant="body2"
          style={{
            background: theme.palette.background.main,
            borderRadius: "50%",
            padding: "1.5em 2em",
            textAlign: "center",
            color: "white",
          }}
        >
          NOW <br />
          <Typography
            variant="caption"
            fontSize={13}
            sx={{
              textDecoration: "line-through",
            }}
          >
            {product?.beforePrice}
          </Typography>
          <br />${product?.afterPrice}
        </Typography>
        <Box position="absolute" top={0} right={0}>
          <Box
            component="img"
            src="./specialDeals/special-offer.png"
            width={120}
          />
        </Box>
        <Box
          className="slide-in"
          sx={{
            position: "absolute",
            inset: 0,
            padding: "0.3em",
            background: "rgba(255,255,255,0.73)",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            transition: "0.5s ease-in-out",
            transform: "translateY(-100%)",
          }}
        >
          <Typography
            variant="h6"
            component="h6"
            color={theme.palette.background.main}
            textTransform="uppercase"
            fontWeight="bolder"
            textAlign="center"
          >
            {product?.title}
          </Typography>
          <Typography
            variant="body2"
            component="body2"
            color={theme.palette.background.main}
            fontWeight="bolder"
          >
            {product?.rate}
          </Typography>
          <Button
            variant="contained"
            color="background"
            sx={{
              marginTop: 2,
              color: "white",
            }}
          >
            Add To Cart
          </Button>
        </Box>
      </ImageWrapper>
    );
  };

  return (
    <Container>
      <Slider
        {...settings}
        className="slick"
        centerMode={true}
        centerPadding="15px"
      >
        {specialDeals.map((specialDeal) => {
          return <SliderImage product={specialDeal} />;
        })}
      </Slider>
    </Container>
  );
};
