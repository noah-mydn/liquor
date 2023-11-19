import { ThemeProvider } from "@emotion/react";
import { Navbar } from "./components/Navbar";
import theme from "./theme/theme";
import { useMediaQuery } from "@mui/material";
import { Home } from "./pages/Home";
import React from "react";

function App() {
  const [cartItems, setCartItems] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState();
  const tabletScreen = useMediaQuery(theme.breakpoints.down("md"));
  const mobileScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const calculateTotalPrice = (cartItems) => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  const addToCart = (product) => {
    const updatedCart = [...cartItems];
    const existingItem = updatedCart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      updatedCart.push({
        ...product,
        quantity: 1,
      });
    }

    const total = calculateTotalPrice(updatedCart);

    setCartItems(updatedCart);
    setTotalPrice(total);
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar
        tabletScreen={tabletScreen}
        cartItems={cartItems}
        mobileScreen={mobileScreen}
        setCartItems={setCartItems}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        calculateTotalPrice={calculateTotalPrice}
      />
      <Home
        tabletScreen={tabletScreen}
        mobileScreen={mobileScreen}
        addToCart={addToCart}
        cartItems={cartItems}
      />
    </ThemeProvider>
  );
}

export default App;
