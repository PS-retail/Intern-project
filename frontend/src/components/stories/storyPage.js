import React, { useState } from "react";
import { useParams } from "react-router";
import Button from "@material-ui/core/Button";

import useStyles from "./styles";
import ARModal from "../general/modal";

const StoryPage = () => {
  const classes = useStyles();
  const storyId = useParams().storyId;
  const [showModal, setShowModal] = useState(false);

  const modalShowHandler = () => {
    setShowModal(true);
  };

  const modalHideHandler = () => {
    setShowModal(false);
  };

  return (
    <div>
      {showModal && (
        <ARModal
          open={showModal}
          handleClose={modalHideHandler}
          body={"Hello"}
        />
      )}
      Story of {storyId}
      <div className={classes.qrButton}>
        <Button variant="contained" onClick={modalShowHandler}>
          Launch demo modal
        </Button>
      </div>
    </div>
  );
};

export default StoryPage;
