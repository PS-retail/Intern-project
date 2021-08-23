import React, { useState, useEffect } from "react";
import MediaCard from "./card";
import { socket } from "../videoChat/webSocket";

const productsList = [
  {
    id: 1,
    name: "Beoplay 50",
    description: "The future of sound",
    image:
      "https://images.ctfassets.net/8cd2csgvqd3m/5idLXKkPidYN49NvdNciUa/284fc74753af424361a55700a11b1eef/72529431_1118767524988584_1950461824411369472_n.jpg.png?q=90&fm=png&w=480&h=480&fit=fill",
    type: "speaker",
  },

  {
    id: 2,
    name: "Beoplay Eclipse",
    description: "Crafted sound design",
    image:
      "https://images.ctfassets.net/8cd2csgvqd3m/5phw37OsT8BoeyhmqfJaud/d0509804927b87fb96aad5d13b0f41e6/55_natural_mot_stand_light_oak.png?q=90&fm=png&w=480&h=480&fit=fill",
    type: "speaker",
  },

  {
    id: 3,
    name: "Beoplay Portal",
    description: "Wireless Gaming Headphones",
    image:
      "https://images.ctfassets.net/8cd2csgvqd3m/4AOGTRast3ES6tI3lvHDOg/0ff97eb44a3eb17ee2d08d9ae805f43f/Portal_Navy_1.png?q=90&fm=webp&w=1200&h=1200&fit=fill",
    type: "headphones",
  },

  {
    id: 4,
    name: "Beoplay E8 Sport",
    description: "Powerful Bluetooth sports earphones",
    image:
      "https://images.ctfassets.net/8cd2csgvqd3m/6YFI6n4ikJbeuHO66o8ODf/2bb1094802c6fa79ac9d95bc69949d24/Beoplay_E8-Sport-LightBlue-05.png?q=90&fm=webp&w=720&h=720&fit=fill",
    type: "headphones",
  },

  {
    id: 5,
    name: "Beosound Shape",
    description: "Modular, Wall Mounted Speaker System",
    image:
      "https://images.ctfassets.net/8cd2csgvqd3m/4fPtynvUplfKqB4wHokXzl/d704846f015117a8df0892be4559f610/shape-product-img.png?q=90&fm=webp&w=720&h=720&fit=fill",
    type: "speaker",
  },
];

export default function Products(props) {
  const [filterType, setFilterType] = useState("reset");

  useEffect(() => {
    socket.on("updateFilter", (data) => {
      setFilterType(data);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div>
      {productsList
        .filter((product) => {
          if (filterType === "reset") {
            return true;
          }

          if (filterType === "speaker" && product.type === "speaker") {
            return true;
          }

          if (filterType === "headphones" && product.type === "headphones") {
            return true;
          }

          return false;
        })
        .map((filteredProduct) => (
          <MediaCard
            productName={filteredProduct.name}
            imageSrc={filteredProduct.image}
            description={filteredProduct.description}
            canvasMode={props.canvasMode}
          />
        ))}
    </div>
  );
}
