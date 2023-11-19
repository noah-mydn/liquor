import styled from "@emotion/styled";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import {
  All,
  Beer,
  Tequila,
  Vodka,
  Whisky,
  Wine,
  categories,
} from "../data/categories/categories";
import { Search } from "@mui/icons-material";
import theme from "../theme/theme";
import { Category } from "./Category";

export const Categories = ({
  mobileScreen,
  tabletScreen,
  addToCart,
  cartItems,
}) => {
  const [selectCategory, setSelectCategory] = React.useState("All");
  const [category, setCategory] = React.useState(All);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [visibleProducts, setVisibleProducts] = React.useState(8);

  const handleViewMore = () => {
    setVisibleProducts((prevCount) => prevCount + 8);
  };

  const handleChangeLiquorCategory = () => {
    switch (selectCategory) {
      case "All":
        setCategory(All);
        break;
      case "Whisky":
        setCategory(Whisky);
        break;
      case "Beer":
        setCategory(Beer);
        break;
      case "Tequila":
        setCategory(Tequila);
        break;
      case "Wine":
        setCategory(Wine);
        break;
      case "Vodka":
        setCategory(Vodka);
        break;
      default:
        return setCategory(All);
    }
  };

  React.useEffect(() => {
    handleChangeLiquorCategory();
    setSearchQuery("");
  }, [selectCategory]);

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setSelectCategory(value);
  };

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  React.useEffect(() => {
    setSearchQuery("");
  }, [selectCategory]);

  const filteredCategory = category.filter((choice) =>
    choice.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  React.useEffect(() => {
    console.log(filteredCategory?.length);
  }, [filteredCategory]);

  return (
    <Container>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px={2.5}
        flexDirection={mobileScreen ? "column" : "row"}
      >
        <Box pb={mobileScreen ? 4 : 0}>
          <InputBase
            onChange={handleSearchChange}
            value={searchQuery}
            size="small"
            sx={{
              flex: 1,
              background: "#fff",
              borderRadius: 2,
              paddingX: 1,
              paddingY: 0.5,
            }}
            placeholder="Search..."
            inputProps={{ "aria-label": "search liquor" }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" edge="end">
                  <Search sx={{ color: theme.palette.primary.main }} />
                </IconButton>
              </InputAdornment>
            }
          />
        </Box>
        <Select
          value={selectCategory}
          onChange={handleCategoryChange}
          label="Liquor"
          variant="standard"
          sx={{
            background: theme.palette.info.main,
            color: theme.palette.primary.main,
            borderRadius: 2,
            paddingX: 2,
            paddingY: 0.5,
          }}
        >
          {categories.map((category) => (
            <MenuItem
              value={category.title}
              key={category?.id}
              sx={{ color: "black" }}
            >
              {category?.title}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Grid container rowGap={6} mt={4} mb={2}>
        {filteredCategory.slice(0, visibleProducts).map((choice) => (
          <Grid
            item
            key={choice.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            display="flex"
            justifyContent="center"
          >
            <Category
              choice={choice}
              addToCart={addToCart}
              cartItems={cartItems}
            />
          </Grid>
        ))}
      </Grid>
      {filteredCategory?.length > visibleProducts && (
        <Box display="flex" justifyContent="center" py={4}>
          <Button
            variant="contained"
            onClick={handleViewMore}
            sx={{
              background: theme.palette.background.main,
              color: "#fff",
              "&:hover": {
                background: theme.palette.secondary.main,
                color: "white",
              },
            }}
          >
            View More
          </Button>
        </Box>
      )}
    </Container>
  );
};
