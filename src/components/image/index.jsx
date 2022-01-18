import { Box } from "@mui/system";

const Image = (props) => {
  const { src, height, width, filter } = props;
  return (
    <Box
      sx={{
        backgroundImage: `url(${src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: { height },
        width: { width },
        filter: { filter },
        borderRadius: "50%",
      }}
    ></Box>
  );
};
export default Image;
