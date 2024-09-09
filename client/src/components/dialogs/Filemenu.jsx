import { Menu } from "@mui/material";
import React from "react";

const Filemenu = ({ anchorE1 }) => {
  return (
    <Menu anchorEl={anchorE1} open={false}>
      <div
        style={{
          width: "10rem",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vel eos
        architecto quos adipisci sequi alias saepe, quod illum exercitationem.
      </div>
    </Menu>
  );
};

export default Filemenu;
