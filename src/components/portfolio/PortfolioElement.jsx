import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { BiLinkExternal } from "react-icons/bi";
const useStyles = makeStyles({
  photo: {
    objectFit: "fill",
    width: "100%",
    height: "100%",
  },
  primaryHeading: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "65%",
    "& h1": {
      margin: "0px",
    },
    "& svg": {
      fontSize: "30px",
    },
  },
  primaryDescription: {
    background: "#23288B",
    letterSpacing: "0.5px",
    lineHeight: "20px",
    width: "85%",
    padding: "10px",
  },
  secondaryDescription: {
    letterSpacing: "0.5px",
    width: "85%",
    padding: "10px",
    fontWeight: "300",
  },
});

const PortfolioElement = ({
  firstHeading,
  secondHeading,
  firstDescription,
  seconfDescription,
  photos,
  index,
}) => {
  const classes = useStyles();
  const getDirection = () => {
    return index % 2 === 0 ? "row" : "row-reverse";
  };
  return (
    <Grid
      direction={getDirection()}
      container
      maxWidth="lg"
      sx={{
        margin: "auto",
        "*": {
          color: "white",
        },
      }}
    >
      <Grid item lg={6} sm={12}>
        <Box>
          <img className={classes.photo} src={photos} alt="img"></img>
        </Box>
      </Grid>
      <Grid
        item
        lg={6}
        sm={12}
        sx={{ padding: "45px 40px" }}
        key={firstHeading}
      >
        <Box className={classes.primaryHeading}>
          <h1>{firstHeading} </h1>
          <BiLinkExternal />
        </Box>
        <h1>{secondHeading}</h1>
        <p variant="subtitle1" className={classes.primaryDescription}>
          {firstDescription}
        </p>
        <p variant="subtitle2" className={classes.secondaryDescription}>
          {seconfDescription}
        </p>
      </Grid>
    </Grid>
  );
};
export default PortfolioElement;
