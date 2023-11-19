import { Rating } from "@mui/material";

export const categories = [
  {
    id: 6,
    title: "All",
  },
  {
    id: 1,
    title: "Vodka",
  },
  {
    id: 2,
    title: "Beer",
  },
  {
    id: 3,
    title: "Wine",
  },

  {
    id: 4,
    title: "Whisky",
  },
  {
    id: 5,
    title: "Tequila",
  },
];

export const Vodka = [
  {
    id: 5001,
    title: "Red Vodka",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    url: "./specialDeals/vodka.png",
    rate: <Rating name="read-only-rating" value={3.5} readOnly />,
    price: 20.99,
  },
  {
    id: 5002,
    title: "Absolute Vodka",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    url: "./vodka/absolute-vodka.png",
    rate: <Rating name="read-only-rating" value={3.5} readOnly />,
    price: 20.99,
  },
  {
    id: 5003,
    title: "Reyka Vodka",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    url: "./vodka/reyka-vodka.png",
    rate: <Rating name="read-only-rating" value={4} readOnly />,
    price: 20.99,
  },
  {
    id: 5004,
    title: "UV Blue Respberry Vodka",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    url: "./vodka/uvblue-raspberry-vodka.png",
    rate: <Rating name="read-only-rating" value={5} readOnly />,
    price: 20.99,
  },
  {
    id: 5005,
    title: "Vanilla Vodka",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    url: "./vodka/vanilla-vodka.png",
    rate: <Rating name="read-only-rating" value={3.5} readOnly />,
    price: 20.99,
  },
  {
    id: 5006,
    title: "Xotic Vodka",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    url: "./vodka/xotic-vodka.png",
    rate: <Rating name="read-only-rating" value={3} readOnly />,
    price: 20.99,
  },
  {
    id: 5007,
    title: "Debowa Polska Sliwa Plum Vodka",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    url: "./specialDeals/debowa.png",
    rate: <Rating name="read-only-rating" value={4.2} readOnly />,
    price: 20.99,
  },
];

export const Whisky = [
  {
    id: 1001,
    title: "Chivas Regal Whisky",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    url: "./whisky/chivas-regal-whisky.png",
    rate: <Rating name="read-only-rating" value={3.5} readOnly />,
    price: 33.99,
  },
  {
    id: 1002,
    title: "Grant's Triple Wood Whisky",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    url: "./whisky/grants-triple-wood-whisky.png",
    rate: <Rating name="read-only-rating" value={3.5} readOnly />,
    price: 33.99,
  },
  {
    id: 1003,
    title: "Hellyers Road Whisky",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    url: "./whisky/hellyers-road-whisky.png",
    rate: <Rating name="read-only-rating" value={3.5} readOnly />,
    price: 33.99,
  },
  {
    id: 1004,
    title: "Jack Daniel's",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    url: "./specialDeals/jackDaniels.png",
    rate: <Rating name="read-only-rating" value={5} readOnly />,
    price: 20.99,
  },
];

export const Beer = [
  {
    id: 2001,
    title: "Corona Extra Beer",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    url: "./beer/corona-extra-beer.png",
    rate: <Rating name="read-only-rating" value={5} readOnly />,
    price: 33.99,
  },
  {
    id: 2002,
    title: "Crown Beer",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    url: "./beer/crown-beer.png",
    rate: <Rating name="read-only-rating" value={4} readOnly />,
    price: 33.99,
  },
  {
    id: 2003,
    title: "Heineken Beer",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    url: "./beer/heineken-beer.png",
    rate: <Rating name="read-only-rating" value={3.5} readOnly />,
    price: 33.99,
  },
  {
    id: 2004,
    title: "Singha Beer",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    url: "./beer/singha-beer.png",
    rate: <Rating name="read-only-rating" value={3.5} readOnly />,
    price: 20.99,
  },
];

export const Wine = [
  {
    id: 3001,
    title: "Barossa Valley Wine",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    url: "./wine/barossa-valley-wine.png",
    rate: <Rating name="read-only-rating" value={5} readOnly />,
    price: 27.99,
  },
  {
    id: 3002,
    title: "Guigal Cotes Du Rhone Rouge",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    url: "./wine/guigal-cotes-du-rhone-rouge.png",
    rate: <Rating name="read-only-rating" value={4} readOnly />,
    price: 35.99,
  },
  {
    id: 3003,
    title: "Kalleske Old Vine Vrenache Bottle",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    url: "./wine/kalleske-old-vine-vrenache-bottle.png",
    rate: <Rating name="read-only-rating" value={3.5} readOnly />,
    price: 30.99,
  },
  {
    id: 3004,
    title: "Mr. Mick Tempranillo",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    url: "./wine/mr-mick-tempranillo.png",
    rate: <Rating name="read-only-rating" value={3.5} readOnly />,
    price: 24.99,
  },
  {
    id: 3005,
    title: "Tyrrell's Old Winery Verdelho",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    url: "./wine/tyrrells-old-winery_verdelho.png",
    rate: <Rating name="read-only-rating" value={4.5} readOnly />,
    price: 31.6,
  },
];

export const Tequila = [
  {
    id: 4001,
    title: "818 Tequila Blanco",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    url: "./tequila/818-tequila-blanco.png",
    rate: <Rating name="read-only-rating" value={5} readOnly />,
    price: 29.99,
  },
  {
    id: 4002,
    title: "1800-silver-tequila",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    url: "./tequila/1800-silver-tequila.png",
    rate: <Rating name="read-only-rating" value={4} readOnly />,
    price: 26.99,
  },
  {
    id: 4003,
    title: "Sierra Gold Tequila",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    url: "./tequila/sierra-gold-tequila.png",
    rate: <Rating name="read-only-rating" value={3.5} readOnly />,
    price: 36.65,
  },
];

export const All = [...Vodka, ...Beer, ...Whisky, ...Tequila, ...Wine];
