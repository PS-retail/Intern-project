import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./product";

const products = [
  {
    id: 1,
    name: "Bose 3000",
    description: "Ultra High Power Speaker",
    image: "https://m.media-amazon.com/images/I/81NI0UFz4zL._AC_SL1500_.jpg",
    favorite: false,
  },
  {
    id: 2,
    name: "Beats 3",
    description: "Cool Headphones",
    image: "https://cdn.mos.cms.futurecdn.net/7xuuL9GAGDDjhietMy3RGJ.jpg",
    favorite: false,
  },
];

const ProductList = () => {
  return (
    <main>
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => {
          return (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default ProductList;
