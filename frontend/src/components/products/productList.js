import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Grid } from "@material-ui/core";

import Product from "./product";
import { SCREENS } from "../responsive/screens";
import Button from "../general/button";

const products = [
  {
    id: 1,
    name: "Beoplay A9",
    description: "Beauty and passion",
    image:
      "https://images.ctfassets.net/8cd2csgvqd3m/6fR8VqoAYs8N2UAiorL4tv/ffeb334edda88fdbd7cf526eb905847e/A9_Gold_1.png?q=90&fm=webp&w=480&h=480&fit=fill",
    favorite: false,
    augmentedReality: "https://beo-sound-edge-floorstand.glitch.me/",
  },
  {
    id: 2,
    name: "Beosound 2",
    description: "home is where the music is",
    image:
      "https://images.ctfassets.net/8cd2csgvqd3m/6OxA7jkG6LxyIuALA0Osqm/ab55824de290c0847a0a523dd5380a77/Beosound_2_natural_brushed_CMS_1.png?q=90&fm=png&w=1200&h=1200&fit=fill",
    favorite: false,
    augmentedReality: "https://beo-sound2.glitch.me/",
  },
  {
    id: 3,
    name: "Beosound Emerge",
    description: "A compact WiFi home speaker",
    image:
      "https://images.ctfassets.net/8cd2csgvqd3m/1Ym6G6CgVWJuaKdItoulLs/9e1e9d3e7081479c251d2fb469dfa0c7/Beosound_Emerge_Hero_Oak.png?q=90&fm=webp&w=480&h=480&fit=fill",
    favorite: false,
    augmentedReality: "https://beo-sound2.glitch.me/",
  },
  {
    id: 11,
    name: "Beosound edge",
    description: "Sound revolution",
    image:
      "https://images.ctfassets.net/8cd2csgvqd3m/1BQxvGWR8jK5nmL3Rf4BCH/f3c70b7596e7c34900b1692647a8db44/edge_hero1.png?q=90&fm=png&w=1200&h=1200&fit=fill",
    favorite: false,
    augmentedReality: "https://beo-sound-edge-floorstand.glitch.me/",
  },
  {
    id: 21,
    name: "Beolab 50",
    description: "The future of sound",
    image:
      "https://images.ctfassets.net/8cd2csgvqd3m/5idLXKkPidYN49NvdNciUa/284fc74753af424361a55700a11b1eef/72529431_1118767524988584_1950461824411369472_n.jpg.png?q=90&fm=png&w=480&h=480&fit=fill",
    favorite: false,
    augmentedReality: "https://beolab50.glitch.me/",
  },
  {
    id: 13,
    name: "Beovision eclipse",
    description: "Crafted sound design",
    image:
      "https://images.ctfassets.net/8cd2csgvqd3m/5phw37OsT8BoeyhmqfJaud/d0509804927b87fb96aad5d13b0f41e6/55_natural_mot_stand_light_oak.png?q=90&fm=png&w=480&h=480&fit=fill",
    favorite: false,
    augmentedReality: "https://beo-vision-eclipse-floorstand.glitch.me/",
  },
  {
    id: 4,
    name: "Beoplay A9",
    description: "Beauty and passion",
    image:
      "https://images.ctfassets.net/8cd2csgvqd3m/6fR8VqoAYs8N2UAiorL4tv/ffeb334edda88fdbd7cf526eb905847e/A9_Gold_1.png?q=90&fm=webp&w=480&h=480&fit=fill",
    favorite: false,
    augmentedReality: "https://beo-sound-edge-floorstand.glitch.me/",
  },
  {
    id: 16,
    name: "Beosound 2",
    description: "home is where the music is",
    image:
      "https://images.ctfassets.net/8cd2csgvqd3m/6OxA7jkG6LxyIuALA0Osqm/ab55824de290c0847a0a523dd5380a77/Beosound_2_natural_brushed_CMS_1.png?q=90&fm=png&w=1200&h=1200&fit=fill",
    favorite: false,
    augmentedReality: "https://beo-sound2.glitch.me/",
  },
  {
    id: 6,
    name: "Beosound Emerge",
    description: "A compact WiFi home speaker",
    image:
      "https://images.ctfassets.net/8cd2csgvqd3m/1Ym6G6CgVWJuaKdItoulLs/9e1e9d3e7081479c251d2fb469dfa0c7/Beosound_Emerge_Hero_Oak.png?q=90&fm=webp&w=480&h=480&fit=fill",
    favorite: false,
    augmentedReality: "https://beo-sound2.glitch.me/",
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


const ProductName = styled.h1`
  ${tw`
    font-bold
    text-xl
    xl:text-3xl
    sm:text-xl
    md:text-2xl
    lg:font-black
    md:font-extrabold
    text-black
    mb-4
    sm:leading-snug
    lg:leading-normal
    xl:leading-relaxed
  `};
`;


const ButtonsContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    mt-4
  `};
`;

// const ProductList = (props) => {
//   return (
//     <main style={{ display: "grid", justifyContent: "space-between" }}>
//       <TopContainer
//         style={{
//           backgroundImage: `url('https://bangolufsenrmaskillgohel.blob.core.windows.net/zendesk-guide/bo_header_apps_beo.jpg')`,
//         }}
//       >
//         <Contents>
//           <Title>Bringing Your Experience To The Next Level</Title>
//         </Contents>
//       </TopContainer>
//       <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//       {products.map((product) => {
//           return (
//             <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
//               <Product product={product} />
//             </Grid>
//           );
//         })}
//         </div>
//     </main>
//   );
// };

// ALEX
function ProductList (props) {
  
  const productsPageList = products.map(item => 
    <Product 
      key={item.id}
      product={item} />
  )
  
  return (
    <div className="container" >
      {productsPageList}
    </div>
  )
}


export default ProductList;
