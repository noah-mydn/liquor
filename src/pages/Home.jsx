import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import theme from "../theme/theme";
import { SpecialDeals } from "../components/Special Deals";
import { Categories } from "../components/Categories";
import { Blogs } from "../components/Blogs";
import { Reviews } from "../components/Reviews";
import { Footer } from "../components/Footer";
import { KeyboardArrowUp } from "@mui/icons-material";

export const Home = ({ mobileScreen, tabletScreen, addToCart, cartItems }) => {
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    setShowScrollTop(scrollTop > 400);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Grid container>
      <Grid item xs={12} position="relative" columnGap={0} rowGap={0} id="home">
        <Box
          sx={{
            display: "flex",
            paddingTop: mobileScreen ? "5em" : "8em",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={mobileScreen ? "./home-banner-sm.png" : "./home-banner.png"}
            alt="Home Banner"
            sx={{
              objectFit: "cover",
              width: mobileScreen ? "90%" : tabletScreen ? "80%" : "65%",
            }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} columnGap={0} rowGap={0} mt={2} id="specialDeals">
        <Typography
          variant="h4"
          component="h4"
          textAlign="center"
          color={theme.palette.info.main}
          gutterBottom={0}
          mt={2}
          mb={4}
        >
          Special Deals
        </Typography>
        <SpecialDeals mobileScreen={mobileScreen} tabletScreen={tabletScreen} />
      </Grid>
      <Grid
        item
        xs={12}
        columnGap={0}
        rowGap={0}
        mt={2}
        bgcolor={theme.palette.primary.main}
        id="categories"
      >
        <Typography
          variant="h4"
          component="h4"
          textAlign="center"
          color={theme.palette.info.main}
          gutterBottom={0}
          mt={2}
          mb={4}
        >
          Categories
        </Typography>
        <Categories
          mobileScreen={mobileScreen}
          tabletScreen={tabletScreen}
          addToCart={addToCart}
          cartItems={cartItems}
        />
      </Grid>
      <Grid
        item
        row
        xs={12}
        columnGap={0}
        rowGap={0}
        bgcolor={theme.palette.secondary.dark}
        id="blogs"
      >
        <Typography
          variant="h4"
          component="h4"
          textAlign="center"
          color={theme.palette.info.main}
          gutterBottom={0}
          mt={2}
          mb={4}
        >
          Blogs
        </Typography>
        <Blogs />
      </Grid>
      <Grid item row xs={12} columnGap={0} rowGap={0} id="reviews">
        <Typography
          variant="h4"
          component="h4"
          textAlign="center"
          color={theme.palette.info.main}
          gutterBottom={0}
          mt={2}
          mb={4}
        >
          What Our Customers Say
        </Typography>
        <Reviews mobileScreen={mobileScreen} />
      </Grid>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Box
          sx={{
            position: "fixed",
            bottom: "2em",
            right: "1em",
          }}
        >
          <IconButton
            sx={{
              background: theme.palette.background.main,
              "&:hover": {
                background: "#fff",
              },
            }}
            onClick={scrollToTop}
            aria-label="Scroll to Top"
          >
            <KeyboardArrowUp
              sx={{
                color: "#fff",
                "&:hover": {
                  color: theme.palette.background.main,
                },
              }}
            />
          </IconButton>
        </Box>
      )}
      <Footer tabletScreen={tabletScreen} mobileScreen={mobileScreen} />
    </Grid>
  );
};
