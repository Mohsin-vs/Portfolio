import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Navbar from "../../components/navbar";
import ProfileHero from "../../components/profile/ProfileHero";
import ProfileHeroAbout from "../../components/profile/ProfileHeroAbout";
import Portfolio from "../../components/portfolio";
import ContactUs from "../../components/contactUs";
const Home = () => {
    return (
        <Box
            sx={{
                margin: "auto",
                backgroundImage: `URL(bg.png)`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right top",
                backgroundSize: "500px 800px",

            }}
            maxWidth="lg"
        >
            <Navbar />
            <ProfileHero />
            <ProfileHeroAbout />
            <Portfolio />
            <ContactUs />
        </Box>
    );
};
export default Home;
