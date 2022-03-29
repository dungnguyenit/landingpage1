import React,{useState}from "react";
import "./header.scss";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const Navbar = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img
          src={require("../assets/Vector.png")}
          alt="logo"
          className="brand-logo"
        />
      </div>
      <div className="header-text">
        
      
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="one" label="Home Page" />
            <Tab value="two" label="san pham" />
            <Tab value="three" label="ve unnivest" />
            <Tab value="three" label="Ho tro" />
          </Tabs>
        </Box>
      </div>
    </div>
  );
};

export default Navbar;
