import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import theme from "../theme/theme";

export const Footer = ({ tabletScreen, mobileScreen }) => {
  return (
    <>
      {" "}
      <Grid
        container
        bgcolor={theme.palette.primary.dark}
        sx={{ py: 4, px: 2 }}
      >
        <Grid item xs={6} md={3} display="flex" flexDirection="column">
          <Typography
            variant="caption"
            component="caption"
            textAlign="left"
            color="#fff"
          >
            Contact Us
          </Typography>
          <Typography
            variant="caption"
            component="caption"
            textAlign="left"
            color="#fff"
          >
            About Us
          </Typography>
          <Typography
            variant="caption"
            component="caption"
            textAlign="left"
            color="#fff"
          >
            Get Sample
          </Typography>
          <Typography
            variant="caption"
            component="caption"
            textAlign="left"
            color="#fff"
          >
            Blogs
          </Typography>
        </Grid>
        <Grid item xs={6} md={3} display="flex" flexDirection="column">
          <Typography
            variant="caption"
            component="caption"
            textAlign="left"
            color="#fff"
          >
            Promotions
          </Typography>
          <Typography
            variant="caption"
            component="caption"
            textAlign="left"
            color="#fff"
          >
            Partners
          </Typography>
          <Typography
            variant="caption"
            component="caption"
            textAlign="left"
            color="#fff"
          >
            Careers
          </Typography>
          <Typography
            variant="caption"
            component="caption"
            textAlign="left"
            color="#fff"
          >
            FAQs
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          justifyContent={mobileScreen ? "flex-start" : "flex-end"}
          textAlign="left"
          mt={mobileScreen ? 4 : 0}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="start"
          >
            <Typography
              variant="body2"
              gutterBottom={4}
              sx={{ color: "white" }}
            >
              Get the latest info about promotions and sale
            </Typography>
            <Box display="flex" justifyContent="space-between">
              <TextField
                size="small"
                hiddenLabel
                id="promotion-email"
                placeholder="yourname@email.com"
                variant="filled"
                focused
                sx={{ background: "white", borderRadius: 1, mr: 2 }}
              />
              <Button
                sx={{
                  background: theme.palette.background.main,
                  color: "white",
                }}
              >
                Subscribe
              </Button>
            </Box>
            <Box
              display="flex"
              width="50%"
              alignItems="center"
              justifyContent="space-between"
              mt={1}
            >
              <Typography variant="caption" component="caption" fontSize={12}>
                <FacebookIcon sx={{ color: "white" }} />
              </Typography>
              <Typography variant="caption" component="caption" fontSize={12}>
                <InstagramIcon sx={{ color: "white" }} />
              </Typography>
              <Typography variant="caption" component="caption" fontSize={12}>
                <TwitterIcon sx={{ color: "white" }} />
              </Typography>
              <Typography variant="caption" component="caption" fontSize={12}>
                <WhatsAppIcon sx={{ color: "white" }} />
              </Typography>
              <Typography variant="caption" component="caption" fontSize={12}>
                <TelegramIcon sx={{ color: "white" }} />
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box
        py={1}
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor={theme.palette.secondary.dark}
      >
        <Typography
          variant="caption"
          fontSize={12}
          color="white"
          textAlign="center"
        >
          @Copyright 2023; Design and Code by ---
        </Typography>
      </Box>
    </>
  );
};
