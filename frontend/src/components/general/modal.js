import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Modal from "@material-ui/core/Modal";

const rand = () => {
  return Math.round(Math.random() * 20) - 10;
};

const getModalStyle = () => {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};

const useStyles = makeStyles(() => ({
  paper: {
    position: "absolute",
    width: "300px",
    height: "30%",
    backgroundColor: "white",
    outline: "1px solid transparent",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    borderRadius: "50px",
    padding: "50px",
  },
  image: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto' 
  }
}));

const ARModal = (props) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 style={{ textAlign: "center" }} id="simple-modal-title">
        Get your QR code
      </h2>
      <hr />
      <br/>
      <img
        src={props.body}
        alt="BangOlufsen"
        height="100px"
        className={classes.image}
      />
    </div>
  );

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default ARModal;
