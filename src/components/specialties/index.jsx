import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    specialtiesContainer: {
      position: "relative",
      transform: "translate(192px,10px)",
      [theme.breakpoints.down("md")]: {
        transform: "translate(0)",
        textAlign: "center",
      },
    },
    specialtieslist: {
      marginBottom: "10px",
    },
  };
});

const Specialties = () => {
  const classes = useStyles();
  const tempData = [
    "Acruent",
    "Acruent",
    "Acruent",
    "Acruent",
    "Acruent",
    "Acruent",
    "Acruent",
    "Acruent",
    "Acruent",
    "Acruent",
    "Acruent",
    "Acruent",
    "Acruent",
    "Acruent",
    "Acruent",
    "Acruent",
  ];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>My specialties</h1>
      <Grid container maxWidth="sm" className={classes.specialtiesContainer}>
        {tempData.map((x) => {
          return (
            <Grid item lg={3} md={3} sm={6} xs={6}>
              <li className={classes.specialtieslist}>{x}</li>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
export default Specialties;
