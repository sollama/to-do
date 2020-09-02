import React from "react";
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
      background: "#bea4c5",
    },
  ];

  const renderFilterButtons = () =>
    filters.map((value, index) => {
      const style =
        props.color === value.id
          ? { ...filterBtn, background: value.background }
          : filterBtn;

      return (
        <React.Fragment key={index}>
          <Button
            variant="contained"
            style={style}
            onClick={() => handleButtonClick(value.id)}
          >
            {" "}
            <b>{value.name}</b>
          </Button>
        </React.Fragment>
      );
    });

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
        <Typography style={filterHdg}>Filter</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <ListItem style={filterItem}>{renderFilterButtons()}</ListItem>
      </AccordionDetails>
    </Accordion>
  );
}

const filterHdg = {
  fontFamily: "Segoe UI",
  letterSpacing: "1.2px",
  color: "#2c2f46",
};

const filterItem = {
  display: "inline-block",
  border: "none",
};

const filterBtn = {
  display: "inline-block",
  fontFamily: "Segoe UI",
  margin: "0px 5px",
};

export default Filter;
