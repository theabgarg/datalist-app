import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { blue, grey } from "@mui/material/colors";
import TextField from "@mui/material/TextField";

import SelectSmall from "./SelectRadio";

export default function RowRadioButtonsGroup({ onChange }) {
  const [selected, setSelected] = useState("");
  const [menuSelect, setMenuSelect] = useState("");

  const isButtonSelected = (value) => {
    if (selected === value) {
      return true;
    }
  };

  const handleChange = (e) => {
    setSelected(e.target.value);
    if (selected === "default" || "unassigned") {
      setMenuSelect("");
    }
    onChange(e);
  };

  const menuSelectHandler = (e) => {
    if (selected === "evqueue") {
      setMenuSelect(e.target.value);
    }
  };

  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={selected}
        sx={{
          color: grey[400],
          display: "flex",
          gap: "1rem",
        }}
      >
        <FormControlLabel
          value="default"
          control={
            <Radio
              sx={{
                color: grey[400],
                "&.Mui-checked": {
                  "&, & + .MuiFormControlLabel-label": {
                    color: blue[500],
                  },
                },
              }}
            />
          }
          label="Default"
          checked={isButtonSelected("default")}
          onChange={handleChange}
        />

        <FormControlLabel
          value="evqueue" //Pass this
          checked={isButtonSelected("evqueue")}
          onChange={handleChange}
          control={
            <Radio
              sx={{
                color: grey[400],
                "&.Mui-checked": {
                  "&, & + .MuiFormControlLabel-label": {
                    color: blue[500],
                  },
                },
                display: "none",
              }}
            />
          }
          label="EV Queue"
        />
        <SelectSmall
          type={selected}
          value={menuSelect}
          onSelectMenu={menuSelectHandler}
        />

        <FormControlLabel
          value="unassigned"
          control={
            <Radio
              sx={{
                color: grey[400],
                "&.Mui-checked": {
                  "&, & + .MuiFormControlLabel-label": {
                    color: blue[500],
                  },
                },
              }}
            />
          }
          label="Unassigned"
          checked={isButtonSelected("unassigned")}
          onChange={handleChange}
        />
      </RadioGroup>
    </FormControl>
  );
}
