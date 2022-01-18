import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

const useStyles = makeStyles({
  mainContainer: {
    boxShadow: "0px 0px 60px rgba(0, 0, 0, 0.25)",
    background: "#fff",
    borderRadius: "70px",
    margin: "auto",
    padding: "5% 10%",
  },

  primaryHeading: {
    marginBottom: "50px",
    paddingTop: "100px",
  },

  experienceContainer: {
    margin: "auto",
    paddingX: "100px",

    "& ul": {
      margin: "0px",
      padding: "0px",
    },
  },

  desigantionText: {
    margin: "0px",
  },

  descriptionText: {
    color: "#3036C3",
    marginBottom: "20px",
    fontSize: "25px",
    lineHeight: "15px",
    "& span": {
      color: "rgba(0, 0, 0, 0.8)",
      fontSize: "14px",
    },
  },

  titleText: {
    margin: "0px",
    letterSpacing: "0.5px",
  },
});
const Experience = () => {
  const classes = useStyles();
  const userRole = [
    {
      desigantion: "SOFTSERVE",
      discreption:
        "Simply random text. It has roots in Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard Contrary to popular belief",
    },
    {
      desigantion: "SOFTSERVE",
      discreption:
        "Simply random text. It has roots in Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard Contrary to popular belief",
    },
    {
      desigantion: "SOFTSERVE",
      discreption:
        "Simply random text. It has roots in Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard Contrary to popular belief",
    },
    {
      desigantion: "SOFTSERVE",
      discreption:
        "Simply random text. It has roots in Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard Contrary to popular belief",
    },
    {
      desigantion: "SOFTSERVE",
      discreption:
        "Simply random text. It has roots in Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard Contrary to popular belief",
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: "url(fullDotedBg.png)",
        zIndex: "-10",
      }}
    >
      <h1 align="center" class={classes.primaryHeading}>
        My Experience
      </h1>
      <Box className={classes.mainContainer} maxWidth="sm">
        <Grid container className={classes.experienceContainer}>
          <Grid item lg={3}>
            <p className={classes.desigantionText}>SOFTSERVE</p>
          </Grid>
          <Grid item lg={9}>
            <h3 className={classes.titleText}>Senior- Front-End Developer</h3>
            <p>may 2019- march 2021</p>
          </Grid>
        </Grid>
        <Grid container className={classes.experienceContainer}>
          {userRole.map((roleName) => {
            return (
              <>
                <Grid item lg={3} md={4} sm={12}>
                  <p className={classes.desigantionText}>
                    {roleName.desigantion}
                  </p>
                </Grid>
                <Grid item lg={9} md={8} sm={12}>
                  <ul>
                    <li className={classes.descriptionText}>
                      <span>{roleName.discreption}</span>
                    </li>
                  </ul>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};
export default Experience;
