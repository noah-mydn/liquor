import {
  AppBar,
  Badge,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import theme from "../theme/theme";
import styled from "@emotion/styled";
import { navItems } from "../data/navigationData/navigationData";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";

export const Navbar = (props) => {
  const [isNavTransparent, setIsNavTransparent] = React.useState(true);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [cartOpen, setCartOpen] = React.useState(false);

  const { WINDOW } = props;
  let cartItems = props.cartItems;
  const tabletScreen = props.tabletScreen;
  const mobileScreen = props.mobileScreen;
  const setCartItems = props.setCartItems;
  const totalPrice = props.totalPrice;
  const calculateTotalPrice = props.calculateTotalPrice;
  const setTotalPrice = props.setTotalPrice;

  const handleCartToggle = () => {
    setCartOpen(!cartOpen);
  };

  const removeItemFromCart = (itemIndex) => {
    const updatedCart = [...cartItems];
    const removedItem = updatedCart.splice(itemIndex, 1)[0];
    const total = calculateTotalPrice(updatedCart);

    setCartItems(updatedCart);
    setTotalPrice(total);
  };

  React.useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const cartDrawer = (
    <Drawer
      anchor="right"
      open={cartOpen}
      onClose={() => setCartOpen(false)}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        "& .MuiDrawer-paper": {
          width: "300px",
        },
      }}
    >
      <Box>
        <Box display="flex" justifyContent="space-between" pl={2}>
          <Typography variant="h6" py={1} textAlign="center" color="primary">
            Your Cart
          </Typography>
          <IconButton onClick={handleCartToggle} size="small">
            <CloseIcon sx={{ color: theme.palette.primary.main }} />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {cartItems?.length > 0 ? (
            cartItems?.map((item, index) => (
              <Box
                display="flex"
                justifyContent="space-between"
                flexDirection="column"
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    width="100%"
                    px={1}
                    alignItems="start"
                    mx={mobileScreen ? 0 : 1}
                  >
                    <Typography
                      component="caption"
                      variant="caption"
                      width="50%"
                      textAlign="left"
                      sx={{
                        color: theme.palette.secondary.main,
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 1,
                      }}
                    >
                      {item?.title}
                    </Typography>
                    <Typography
                      component="caption"
                      variant="caption"
                      sx={{ color: theme.palette.secondary.main }}
                    >
                      {item?.quantity} &nbsp;&nbsp;
                    </Typography>
                    <Typography
                      component="caption"
                      variant="caption"
                      sx={{ color: theme.palette.secondary.main }}
                    >
                      ${item?.price * item?.quantity} &nbsp;&nbsp;
                    </Typography>
                  </Box>

                  <IconButton
                    onClick={() => removeItemFromCart(index)}
                    mx={mobileScreen ? 0 : 1}
                  >
                    <DeleteIcon color="error" />
                  </IconButton>
                </Box>
              </Box>
            ))
          ) : (
            <Box display="flex" justifyContent="center" alignItems="center">
              <Typography
                p={8}
                component="body2"
                variant="body2"
                sx={{ color: theme.palette.secondary.main }}
              >
                Your cart is empty.
              </Typography>
            </Box>
          )}
          {cartItems?.length > 0 && (
            <>
              <Divider />
              <Box display="flex" justifyContent="space-between" px={2} py={2}>
                <Typography variant="body2">TOTAL</Typography>
                <Typography variant="body2">
                  ${totalPrice.toFixed(2)}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="end" px={2}>
                <Button
                  sx={{
                    background: theme.palette.background.main,
                    color: "white",
                  }}
                  size="small"
                >
                  Checkout
                </Button>
              </Box>
            </>
          )}
        </List>
      </Box>
    </Drawer>
  );

  //Styling Navigation
  const NavigationLink = styled(Link)({
    display: "block",
    paddingBottom: "15px",
    textTransform: "uppercase",
    textDecoration: "none",
    position: "relative",
    fontSize: "1rem",
    cursor: "pointer",
    fontFamily: theme.typography.fontFamily,
    "&:hover": {
      color: theme.palette.background.main,
    },
    "&::before": { transition: "all 0.5s" },
    "&::after": {
      position: "absolute",
      width: 0,
      content: "''",
      background: theme.palette.info.light,
      color: "transparent",
      height: "2px",
      right: 0,
      bottom: 0,
      left: 0,
      transition: "all 0.5s",
    },
    "&:hover::after": {
      width: "100%",
    },
  });

  //Styling mobile navtext

  const CustomListItemText = styled(ListItemText)({
    color: theme.palette.info.main,
    fontSize: 14,
    textAlign: "center",
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      py={2}
      bgcolor="transparent"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      sx={{ minHeight: "90vh" }}
    >
      <Box display="flex" justifyContent="flex-end" px={1}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon sx={{ color: theme.palette.info.main }} />
        </IconButton>
      </Box>
      <List sx={{ marginBottom: "auto" }}>
        {navItems.map((mobileNav) => {
          return (
            <ListItem key={mobileNav.id}>
              <ListItemButton
                href={`#${mobileNav.link}`}
                onClick={() => setMobileOpen(false)}
              >
                <CustomListItemText>{mobileNav.navText}</CustomListItemText>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <Typography
        variant="body2"
        color={theme.palette.info.main}
        px={1}
        textAlign="center"
        fontStyle="italic"
      >
        "Too much of anything is bad, but too much good whiskey is barely
        enough."
        <br />
        <br />
        <strong>- Mark Twain</strong>
      </Typography>
    </Box>
  );

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsNavTransparent(false);
      } else {
        setIsNavTransparent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const container =
    WINDOW !== undefined ? () => window().document.body : undefined;

  return (
    <AppBar
      sx={{
        background: isNavTransparent
          ? "transparent"
          : theme.palette.secondary.main,
        transition: "background 0.5s ease-in-out",
      }}
      elevation={0}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={1}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ display: tabletScreen ? "block" : "none" }}
        >
          <MenuIcon sx={{ color: theme.palette.info.main }} />
        </IconButton>

        <Box component="img" src="./logo.png" width="60px" height="60px" />
        <Box
          display={tabletScreen ? "none" : "flex"}
          pb={0}
          pt={1}
          alignItems="center"
        >
          {navItems.map((nav, index) => {
            return (
              <NavigationLink
                key={nav.id}
                mx={2}
                color={theme.palette.info.main}
                fontWeight="bolder"
                href={`#${nav.link}`}
              >
                {nav.navText}
              </NavigationLink>
            );
          })}
        </Box>
        <Box display="flex">
          {cartItems?.length > 0 && (
            <IconButton onClick={handleCartToggle}>
              <Badge
                badgeContent={cartItems.length}
                color="background"
                sx={{ color: "white" }}
              >
                <ShoppingCartIcon sx={{ color: theme.palette.info.light }} />
              </Badge>
            </IconButton>
          )}
          {cartItems?.length === 0 && (
            <IconButton onClick={handleCartToggle}>
              <ShoppingCartIcon sx={{ color: theme.palette.info.light }} />
            </IconButton>
          )}
        </Box>
      </Box>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            backdropFilter: "blur(15px)",
            background: theme.palette.primary.light,
            width: 230,
          },
        }}
      >
        {drawer}
      </Drawer>
      {cartDrawer}
    </AppBar>
  );
};
