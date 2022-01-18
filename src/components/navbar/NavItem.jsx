import { Typography } from "@mui/material";

const NavItem = ({ href, text }) => {
  return (
    <Typography
      href={href}
      variant="a"
      component="a"
      sx={{
        textDecoration: "none",
        fontFamily: "open Sans",
        fontWeight: "600",
        fontStyle: "normal",
        fontSize: "16px",
        marginRight: "20px",
        whiteSpace: "pre",
        color: "#444444",
      }}
    >
      {text}
    </Typography>
  );
};

export default NavItem;
