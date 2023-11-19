import styled from "@emotion/styled";
import {
  Box,
  Card,
  CardMedia,
  Typography,
  CardActions,
  CardActionArea,
  CardContent,
  Button,
} from "@mui/material";
import React from "react";
import theme from "../theme/theme";

export const Blogs = () => {
  const CardData = [
    {
      id: 1,
      url: "./blogs/blog-one.webp",
      alt: "Culture of Beer",
      title: "Unraveling the Fascinating Culture of Beer",
      desc: "Embark on a journey through the rich history and cultural impact of beer. Explore the traditions, rituals, and global significance that make beer more than just a beverage.",
    },
    {
      id: 2,
      url: "./blogs/blog-two.webp",
      alt: "German Beer",
      title: "Discovering the Delights of German Beer",
      desc: "Immerse yourself in the world of German beer, renowned for its purity and centuries-old brewing techniques. Uncover the secrets behind the flavors that have made German beer a global favorite.",
    },
    {
      id: 3,
      url: "./blogs/blog-three.jpeg",
      alt: "Tequila",
      title: "Tequila Tales: A Journey into Mexico's Iconic Spirit",
      desc: "Embark on a flavorful adventure delving into the history, production, and diverse types of tequila. Uncover the magic behind Mexico's beloved and iconic spirit, Tequila.",
    },
  ];

  const BlogButton = styled(Button)({
    padding: "0.5em 1em",
    background: theme.palette.background.main,
    fontFamily: "Jost",
    color: theme.palette.info.main,
    margin: "1em auto",
    "&:hover": {
      background: theme.palette.secondary.main,
      color: "#fff",
    },
  });

  const BlogContainer = ({ url, alt, title, desc }) => {
    return (
      <Card
        sx={{ maxWidth: 300, margin: "2em 0", borderRadius: 4 }}
        elevation={4}
      >
        <CardActionArea>
          <CardMedia component="img" height="200" image={url} alt={alt} />
          <CardContent sx={{ height: 150 }}>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text"
              sx={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 3,
                fontWeight: "normal",
              }}
            >
              {desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ marginTop: 1 }}>
          <BlogButton>View Blog</BlogButton>
        </CardActions>
      </Card>
    );
  };

  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      flexWrap="wrap"
    >
      {CardData.map((blog) => {
        return (
          <BlogContainer
            key={blog.id}
            url={blog.url}
            alt={blog.alt}
            title={blog.title}
            desc={blog.desc}
          />
        );
      })}
    </Box>
  );
};
