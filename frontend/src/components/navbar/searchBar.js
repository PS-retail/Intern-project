import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton } from "@material-ui/core";

const SearchBar = () => {
  const [sample, setSample] = useState(null);

  const submitHandler = (event, newValue) => {
      event.preventDefault();
      console.log(event.target.value)
  }

  const stories = [
    {
      id: 1,
      name: "Gaming",
      description: "Gaming Experience",
      image:
        "https://images.ctfassets.net/8cd2csgvqd3m/2WXA1ohDoLlKq0WBBnd5kf/8019e522e39b3940c11425a2d0869498/Gaming_Square.jpg?q=90&fm=webp&w=480&h=480&fit=fill",
      favorite: false,
    },
    {
      id: 2,
      name: "Passion",
      description: "Ignite your passion",
      image:
        "https://images.ctfassets.net/8cd2csgvqd3m/2sMP1i5MkrTE1qp9nSJ0CN/2608a755c73401d080c17f04cca7d667/Mosaic_2.jpg?q=90&fm=webp&w=1440&h=808&fit=fill",
      favorite: false,
    },
  ];

  return (
    <div style={{ width: 300 }}>
      <form id="Search Bar" onSubmit={submitHandler}>
        <Autocomplete
          id="free-solo-demo"
          //onInputChange={searchHandler}
          freeSolo
          options={stories.map((option) => option.name)}
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
                    <IconButton type = 'submit' aria-label="Search" color="inherit">
                      <SearchIcon />
                    </IconButton>
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
        />
      </form>
    </div>
  );
};

export default SearchBar;
