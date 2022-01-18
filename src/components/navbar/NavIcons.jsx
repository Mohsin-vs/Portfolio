import { Box } from "@mui/system";

const NavIcons = ({ text }) => {
  return (
    <Box
      component="i"
      sx={{
        width: "35px",
        height: "35px",
        border: "1px solid white",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        overflow: "hidden",
        marginLeft: "10px",
        "&:hover": {
          backgroundColor: "white",
        },
        "& svg": {
          fontSize: "25px",
          color: "white",
          borderRadius: "50%",
          "&:hover": {
            backgroundColor: "white",
            color: "#3850C3",
          },
        },
      }}
    >
      {text}
    </Box>
  );
};
export default NavIcons;
