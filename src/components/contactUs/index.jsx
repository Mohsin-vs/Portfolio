import { Box, Button, Grid, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  heading: {
    marginTop: "100px",
  },
});
const ContactUs = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      component="form"
      maxWidth="sm"
      noValidate
      autoComplete="off"
      sx={{
        margin: "auto",
        display: "flex",
        justifyContent: "flex-end",
        "& > fieldset": {
          bordeeColor: "orange",
        },
      }}
    >
      <Grid item lg={12} sx={{ display: "flex", flexDirection: "column" }}>
        <h1 className={classes.heading}>Get In Touch</h1>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            size="small"
            sx={{ width: "30ch", marginY: "20px" }}
          />

          <TextField
            id="standard-basic"
            label="Sur Name"
            variant="standard"
            size="small"
            sx={{
              width: "30ch",
              marginY: "20px",
            }}
          />
        </Box>
        <Box>
          <TextField
            id="standard-basic"
            label="Enter Email"
            variant="standard"
            size="small"
            sx={{ width: "100%", marginY: "20px" }}
          />
        </Box>
        <Box>
          <TextField
            id="standard-multiline-static"
            label="Write your message"
            multiline
            rows={4}
            size="small"
            variant="standard"
            sx={{ width: "100%" }}
          />
        </Box>
      </Grid>
      <Button
        variant="contained"
        sx={{
          width: "200px",
          height: "40px",
          borderRadius: "50px",
          background: "#3036C3",
          marginY: "40px",
        }}
      >
        Send Message
      </Button>
    </Grid>
  );
};
export default ContactUs;
