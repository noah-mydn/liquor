import { Rating } from "@mui/material";

export const specialDeals = [
  {
    id: 1,
    title: "Red Vodka",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    url: "./specialDeals/vodka.png",
    rate: <Rating name="read-only-rating" value={3.5} readOnly />,
    beforePrice: 29.99,
    price: 24.99,
  },
  {
    id: 2,
    title: "Royal Dragon",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    url: "./specialDeals/royalDragon.png",
    rate: <Rating name="read-only-rating" value={4} readOnly />,
    beforePrice: 49.99,
    price: 39.99,
  },
  {
    id: 3,
    title: "Jack Daniels",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    url: "./specialDeals/jackDaniels.png",
    rate: <Rating name="read-only-rating" value={4} readOnly />,
    beforePrice: 39.99,
    price: 34.99,
  },
  {
    id: 4,
    title: "L Auteur Brandy",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    url: "./specialDeals/brandy.png",
    rate: <Rating name="read-only-rating" value={3.5} readOnly />,
    beforePrice: 54.99,
    price: 49.99,
  },
  {
    id: 5,
    title: "Hennessy VS Cognac",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    url: "./specialDeals/hanessey.png",
    rate: <Rating name="read-only-rating" value={5} readOnly />,
    beforePrice: 79.99,
    price: 69.99,
  },
  {
    id: 6,
    title: "Debowa Polska Sliwa Plum Vodka",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    url: "./specialDeals/debowa.png",
    rate: <Rating name="read-only-rating" value={4.2} readOnly />,
    beforePrice: 44.99,
    price: 39.99,
  },
];
