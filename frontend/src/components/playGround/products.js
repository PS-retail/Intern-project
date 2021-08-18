import React, { useState, useEffect } from 'react';
import MediaCard from './card'
import {socket} from '../videoChat/webSocket'

const productsList = [
    {
      id: 1,
      name: "Beoplay 50",
      description: "The future of sound",
      image: "https://images.ctfassets.net/8cd2csgvqd3m/5idLXKkPidYN49NvdNciUa/284fc74753af424361a55700a11b1eef/72529431_1118767524988584_1950461824411369472_n.jpg.png?q=90&fm=png&w=480&h=480&fit=fill",
      type: "Speaker"
    },

    {
      id: 2,
      name: "Beoplay Eclipse",
      description: "Crafted sound design",
      image: "https://images.ctfassets.net/8cd2csgvqd3m/5phw37OsT8BoeyhmqfJaud/d0509804927b87fb96aad5d13b0f41e6/55_natural_mot_stand_light_oak.png?q=90&fm=png&w=480&h=480&fit=fill",
      type: "Speaker"
    },
    
  ];

export default function Products(props) {


  const [filterType, setFilterType] = useState("");  
  

  useEffect(() =>{
    
    socket.on('resetFilter', data => {
      setFilterType("");
    });


    socket.on('speakerFilter', data => {
        setFilterType("speaker");
    });


  }, []);


  return (
    <div>
        {productsList.filter(product => {

            if(filterType === ""){
                return true;
            }

            if(filterType === "speaker" && product.type === "speaker"){
                return true;
            }

            if(filterType === "headphones" && product.type === "headphones"){
                return true;
            }

            return false;
        }).map(filteredProduct => (
            
            <MediaCard
                productName = {filteredProduct.name}
                imageSrc = {filteredProduct.image}
                description = {filteredProduct.description}
                canvasMode = {props.canvasMode}
            />
            
            
        ))}

    </div>

  );
}