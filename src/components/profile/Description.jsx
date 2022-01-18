import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Description = ({ primaryHeading, secondaryHeading, detail }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          "& h3": {
            letterSpacing: "0.06em",
            color: "#0C0904",
            fontFamily: "Open Sans",
            fontWeight: 700,
            fontStyle: "normal",
            fontSize: "16px",
          },
          "& h1": {
            fontFamily: "Roboto",
            fontWeight: 700,
            fontStyle: "normal",
            fontSize: "62px",
            lineHeight: "60px",
            margin: "5px 0px",
          },
          "& p": {
            fontFamily: "Open Sans",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "20px",
            color: "rgba(0, 0, 0, 0.5)",
            letterSpacing: "0.01em",
            width: "400px",
          },
        }}
      >
        <Typography varient="h3" component="h3">
          {primaryHeading}
        </Typography>
        <Typography varient="h1" component="h1">
          {secondaryHeading}
        </Typography>
        <Typography varient="p" component="p" color="primary">
          {detail}
        </Typography>
      </Box>
    </>
  );
};
export default Description;
