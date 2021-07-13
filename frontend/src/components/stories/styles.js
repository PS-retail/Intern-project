import { makeStyles } from "@material-ui/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px'
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
    justifyContent: "space-between"
  },
  qrButton: {
    position: 'absolute',
    bottom: '40px',
    left: '50%',
    marginLeft: '-104.5px'
  },
  image: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto' 
  }
}));
