import { makeStyles } from "@material-ui/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    backgroundColor: 'black'
  },
  media: {
    height: 0,
    paddingTop: "76.25%",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "inline-block",
    justifyContent: "space-between",
    color: 'white'
  },
  qrButton: {
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    marginLeft: '-104.5px'
  }
}));
