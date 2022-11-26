import React, { useState } from "react";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectSmall(props) {
  const type = props.type;

  return (
    <>
      {/* <button type="radio" value="evqueue">
        EV Queue
      </button> */}
      <FormControl
        sx={{ m: 1, minWidth: 180 }}
        size="small"
        disabled={type === "evqueue" ? false : true}
      >
        <Select
          value={props.value}
          onChange={props.onSelectMenu}
          id="demo-select-small-disabled"
          sx={{
            "&.Mui-selected": {
              backgroundColor: "turquoise",
              color: "white",
              fontWeight: 600,
            },
          }}
        >
          <MenuItem disabled defaultValue="Select">
            <em>Select</em>
          </MenuItem>
          <MenuItem value="Sales">Sales</MenuItem>
          <MenuItem value="Market">Market</MenuItem>
          <MenuItem value="service">Service</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
