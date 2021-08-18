import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton } from "@material-ui/core";

const SearchBar = () => {
  const { control } = useForm();
  const [products] = useState([
    {
      id: 1,
      name: "Bose 3000",
      description: "Ultra High Power Speaker",
      image:
        "https://m.media-amazon.com/images/I/81NI0UFz4zL._AC_SL1500_.jpg",
      favorite: false,
    },
    {
      id: 2,
      name: "Beats 3",
      description: "Cool Headphones",
      image:
        "https://cdn.mos.cms.futurecdn.net/7xuuL9GAGDDjhietMy3RGJ.jpg",
      favorite: false,
    },
    {
      id: 3,
      name: "Bose 4000",
      description: "Ultra High Power Speaker",
      image:
        "https://m.media-amazon.com/images/I/81NI0UFz4zL._AC_SL1500_.jpg",
      favorite: false,
    },
  ]);

  const searchHandler = (e, data) => {
    if (typeof data === 'object' && data !== null) {
      console.log(data)
    } else if (typeof data === 'string' && data !== null) {
      const product = products.find(product => product.name.toUpperCase() === data.toUpperCase());
      if (!!product === false) {
        const filteredProducts = products.filter(product => product.name.toUpperCase().split(' ').includes(data.toUpperCase()) === true)
        if (filteredProducts.length === 0) {
          console.log('No results found');
          return
        }
        console.log(filteredProducts) 
        return
      }
      console.log(product);
    } 
  };

  return (
    <div style={{ width: 300 }}>
      <Controller
        name="Search Bar"
        render={(props) => (
          <Autocomplete
            {...props}
            id="search"
            value={props.value || ""}
            freeSolo
            options={products}
            getOptionLabel={(option) =>
              option.name ? option.name : ''
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search"
                size="small"
                margin="dense"
                variant="outlined"
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <React.Fragment>
                      {params.InputProps.endAdornment}
                      <IconButton
                        onClick = {data => console.log(data)}
                        aria-label="Search"
                        color="inherit"
                      >
                        <SearchIcon />
                      </IconButton>
                    </React.Fragment>
                  ),
                }}
              />
            )}
            onChange={searchHandler}
          />
        )}
        onChange={([, data]) => data}
        control={control}
        defaultValue={null}
      />
    </div>
  );
};

export default SearchBar;
