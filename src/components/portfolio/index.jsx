import { Box } from "@mui/system";
import PortfolioElement from "./PortfolioElement";
const Portfolio = () => {
  const dumyData = [
    {
      firstHeading: "Lorem Ipsum",
      secondHeading: "Website Project",
      firstDescription:
        " Simply random text. It has roots in Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45.",
      seconfDescription:
        "Simply random text. It has roots in Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45.",
      photos: "first.png",
    },
    {
      firstHeading: "Lorem Ipsum",
      secondHeading: "Website Project",
      firstDescription:
        " Simply random text. It has roots in Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45.",
      seconfDescription:
        "Simply random text. It has roots in Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45.",
      photos: "second.png",
    },
    {
      firstHeading: "Lorem Ipsum",
      secondHeading: "Website Project",
      firstDescription:
        " Simply random text. It has roots in Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45.",
      seconfDescription:
        "Simply random text. It has roots in Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45.",
      photos: "first.png",
    },
    {
      firstHeading: "Lorem Ipsum",
      secondHeading: "Website Project",
      firstDescription:
        " Simply random text. It has roots in Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45.",
      seconfDescription:
        "Simply random text. It has roots in Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45.",
      photos: "fourth.png",
    },
    {
      firstHeading: "Lorem Ipsum",
      secondHeading: "Website Project",
      firstDescription:
        " Simply random text. It has roots in Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45.",
      seconfDescription:
        "Simply random text. It has roots in Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45.",
      photos: "first.png",
    },
  ];
  return (
    <Box
      sx={{
        maxWidth: "xl",
        bgcolor: "#3036C3",
        padding: "20% 0px 10% 0px",
        position: "relative",
        top: "-150px",
        zIndex: "-20",
      }}
    >
      {dumyData.map((exampleData, index) => {
        return (
          <>
            <PortfolioElement {...exampleData} index={index} />;
            {console.log("asdasdasdas", index)}
          </>
        );
      })}
    </Box>
  );
};
export default Portfolio;
