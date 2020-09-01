import React, { useState } from "react";
import {
  ListItem,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Filter(props) {
  const filters = [
    {
      id: 1,
      name: "Pending",
      background: "#c87677",
    },
    {
      id: 2,
      name: "Complete",
      background: "#5a6b93",
    },
    {
      id: 3,
      name: "All",
      background: "#2a262b",
    },
  ];

  const renderFilterButtons = () =>
    filters.map((value, index) => (
      <React.Fragment key={index}>
        <Button
          variant="contained"
          style={filterBtn}
          onClick={() => handleButtonClick(value.id)}
        >
          {" "}
          <b>{value.name}</b>
        </Button>
      </React.Fragment>
    ));

  function handleButtonClick(id) {
    props.handleFilters(id);
  }

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Filters</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <ListItem style={filterItem}>{renderFilterButtons()}</ListItem>
      </AccordionDetails>
    </Accordion>
  );
}

const filterItem = {
  display: "inline-block",
  border: "none",
};

const filterBtn = {
  display: "inline-block",
  fontFamily: "Segoe UI",
  margin: "0px 5px",
  "&:active": {
    outline: "1px black",
  },
};

export default Filter;
