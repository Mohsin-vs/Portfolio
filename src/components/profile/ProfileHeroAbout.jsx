import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import Description from "./Description";
import Specialties from "../specialties";
import Experience from "../experience";
const useStyles = makeStyles({
  aboutImg: {
    width: "100%",
    height: "100%",
    objectFit: "fill",
  },
});

const ProfileHeroAbout = () => {
  const classes = useStyles();
  const data = [
    { title: "A bit" },
    { subTitle: "About Me" },
    {
      detail:
        " Simply random text. It has roots in  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from  roots in a piece of classical Latin literature from  2000 years old. Richard Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
  ];
  return (
    <Box
      container
      sx={{
        backgroundImage: "url(bgLeft.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left top",
        backgroundSize: "450px 1100px",
        marginTop: "130px",
      }}
    >
      <Grid
        container
        maxWidth="md"
        margin="auto"
        sx={{ justifyContent: "space-around" }}
      >
        <Grid item lg={6}>
          <Box
            sx={{
              width: "430px",
              height: "430px",
              mt: "-90px",
            }}
          >
            <img src="about.png" alt="img" className={classes.aboutImg}></img>
          </Box>
        </Grid>
        <Grid item lg={6} sx={{ mt: -5 }}>
          {data.map((des) => {
            return (
              <Description
                primaryHeading={des.title}
                secondaryHeading={des.subTitle}
                detail={des.detail}
              ></Description>
            );
          })}
        </Grid>
      </Grid>
      <Specialties />
      <Experience />
    </Box>
  );
};
export default ProfileHeroAbout;
