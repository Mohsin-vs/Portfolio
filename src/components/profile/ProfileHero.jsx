import { Button, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "../image/index";
import Description from "./Description";

const useStyles = makeStyles((theme) => {
  return {
    aboutContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      margin: "auto",
      backgroundImage: `URL(dotedBg.png)`,
      backgroundSize: "80%",
      marginTop: "130px",
      backgroundRepeat: "no-repeat",
      [theme.breakpoints.down("md")]: {},
    },
  };
});
const ProfileHero = () => {
  const classes = useStyles();
  const data = [
    { title: " Hi, my name is" },
    { subTitle: " Lorem Ipsum" },
    {
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting ",
    },
  ];
  return (
    <Grid container maxWidth="lg" className={classes.aboutContainer}>
      <Grid item>
        {data.map((des) => {
          return (
            <Description
              primaryHeading={des.title}
              secondaryHeading={des.subTitle}
              detail={des.detail}
            ></Description>
          );
        })}

        <Button
          variant="contained"
          sx={{
            width: "150px",
            borderRadius: "50px",
            marginTop: "30px",
          }}
        >
          My Story
        </Button>
      </Grid>
      <Grid item>
        <Image
          src="user.jpg"
          height="400px"
          width="400px"
          filter="drop-shadow(45px 15px 70px rgba(0, 0, 0, 0.2))"
        />
      </Grid>
    </Grid>
  );
};
export default ProfileHero;
