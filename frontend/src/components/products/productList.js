import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Grid } from "@material-ui/core";

import Product from "./product";

const products = [
  {
    id: 1,
    name: "Bose 3000",
    description: "Ultra High Power Speaker",
    image:
      "https://images.ctfassets.net/8cd2csgvqd3m/6fR8VqoAYs8N2UAiorL4tv/ffeb334edda88fdbd7cf526eb905847e/A9_Gold_1.png?q=90&fm=webp&w=480&h=480&fit=fill",
    favorite: false,
  },
  {
    id: 2,
    name: "Beats 3",
    description: "Cool Headphones",
    image:
      "https://images.ctfassets.net/8cd2csgvqd3m/6hC39slHJ7gQoWnNy0exng/7d42554e2492e4358f19b3283d03be56/h4_black1000x1000.png?q=90&fm=webp&w=480&h=480&fit=fill",
    favorite: false,
  },
  {
    id: 3,
    name: "Bose 4000",
    description: "Ultra High Power Speaker",
    image:
      "https://images.ctfassets.net/8cd2csgvqd3m/1Ym6G6CgVWJuaKdItoulLs/9e1e9d3e7081479c251d2fb469dfa0c7/Beosound_Emerge_Hero_Oak.png?q=90&fm=webp&w=480&h=480&fit=fill",
    favorite: false,
  },
  {
    id: 11,
    name: "Bose 3000",
    description: "Ultra High Power Speaker",
    image:
      "https://images.ctfassets.net/8cd2csgvqd3m/6fR8VqoAYs8N2UAiorL4tv/ffeb334edda88fdbd7cf526eb905847e/A9_Gold_1.png?q=90&fm=webp&w=480&h=480&fit=fill",
    favorite: false,
  },
  {
    id: 21,
    name: "Beats 3",
    description: "Cool Headphones",
    image:
      "https://images.ctfassets.net/8cd2csgvqd3m/6hC39slHJ7gQoWnNy0exng/7d42554e2492e4358f19b3283d03be56/h4_black1000x1000.png?q=90&fm=webp&w=480&h=480&fit=fill",
    favorite: false,
  },
  {
    id: 13,
    name: "Bose 4000",
    description: "Ultra High Power Speaker",
    image:
      "https://images.ctfassets.net/8cd2csgvqd3m/1Ym6G6CgVWJuaKdItoulLs/9e1e9d3e7081479c251d2fb469dfa0c7/Beosound_Emerge_Hero_Oak.png?q=90&fm=webp&w=480&h=480&fit=fill",
    favorite: false,
  },
  {
    id: 4,
    name: "Bose 3000",
    description: "Ultra High Power Speaker",
    image:
      "https://images.ctfassets.net/8cd2csgvqd3m/6fR8VqoAYs8N2UAiorL4tv/ffeb334edda88fdbd7cf526eb905847e/A9_Gold_1.png?q=90&fm=webp&w=480&h=480&fit=fill",
    favorite: false,
  },
  {
    id: 16,
    name: "Beats 3",
    description: "Cool Headphones",
    image:
      "https://images.ctfassets.net/8cd2csgvqd3m/6hC39slHJ7gQoWnNy0exng/7d42554e2492e4358f19b3283d03be56/h4_black1000x1000.png?q=90&fm=webp&w=480&h=480&fit=fill",
    favorite: false,
  },
  {
    id: 6,
    name: "Bose 4000",
    description: "Ultra High Power Speaker",
    image:
      "https://images.ctfassets.net/8cd2csgvqd3m/1Ym6G6CgVWJuaKdItoulLs/9e1e9d3e7081479c251d2fb469dfa0c7/Beosound_Emerge_Hero_Oak.png?q=90&fm=webp&w=480&h=480&fit=fill",
    favorite: false,
  },
];

const TopContainer = styled.div`
  ${tw`
    flex
    w-screen
    h-[600px]
    m-0
    p-0
    bg-cover
    bg-no-repeat
  `};
`;

const Title = styled.div`
  ${tw`
  text-3xl
  font-bold
  text-white
`};
`;

const Contents = styled.div`
  ${tw`
  m-auto
`};
`;



const ProductList = (props) => {
  return (
    <main style={{ display: "grid", justifyContent: "space-between" }}>
      <TopContainer
        style={{
          backgroundImage: `url('https://bangolufsenrmaskillgohel.blob.core.windows.net/zendesk-guide/bo_header_apps_beo.jpg')`,
        }}
      >
        <Contents>
          <Title>Bringing Your Experience To The Next Level</Title>
        </Contents>
      </TopContainer>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {products.map((product) => {
          return (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
              <Product product={product} />
            </Grid>
          );
        })}
        </div>
    </main>
  );
};

export default ProductList;
