import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { makeStyles } from '@mui/styles';

import { Grid } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from "../images/icons/logo.png"
import NavItem from './NavItem';
import NavIcons from './NavIcons';
import { TiSocialFacebook } from 'react-icons/ti';
import { VscGithubAlt } from 'react-icons/vsc';

const useStyles = makeStyles({
    navbar: {
        boxShadow: "0px 0px 0px 0px"
    }
})

const Navbar = () => {
    const classes = useStyles();
    const navLinks = [{ text: 'About Me', href: '#' },
    { text: 'My Experience', href: '#' },
    { text: 'Portfolio', href: '#' },
    { text: 'Contact Me', href: '#' },
    { text: 'Resume', href: '#' }
    ]
    const navIcons = [<VscGithubAlt />, <LinkedInIcon />, <InstagramIcon />, <TwitterIcon />, <TiSocialFacebook />]

    return (

        <AppBar position="static" color="transparent" className={classes.navbar}>
            <Toolbar disableGutters={true} >
                <Grid maxWidth="md" sx={{ display: 'flex', flex: '1', alignItems: 'center', justifyContent: "space-between", margin: 'auto' }}>
                    <Grid item xs={8} sx={{ display: 'flex', alignItems: 'center' }}>
                        <img alt="logo" src={logo} />
                        {
                            navLinks.map((name) => {
                                return (
                                    <NavItem text={name.text} href={name.href} />
                                )
                            })
                        }
                    </Grid>
                    <Grid item xs={4} sx={{ display: 'flex', justifyContent: "flex-end" }}>
                        {
                            navIcons.map((iconName) => {
                                return (
                                    <NavIcons text={iconName} />
                                )
                            })
                        }
                    </Grid>

                </Grid>

            </Toolbar>
        </AppBar>

    );
}
// import { Grid } from '@mui/material';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import logo from "../images/icons/logo.png"
// import NavItem from './NavItem';
// import NavIcons from './NavIcons';
// import { TiSocialFacebook } from 'react-icons/ti'
// import { VscGithubAlt } from 'react-icons/vsc'

// const Navbar = () => {
//     const navLinks = [{ text: 'About Me', href: '#' },
//     { text: 'My Experience', href: '#' },
//     { text: 'Portfolio', href: '#' },
//     { text: 'Contact Me', href: '#' },
//     { text: 'Resume', href: '#' }
//     ]
//     const navIcons = [<VscGithubAlt />, <LinkedInIcon />, <InstagramIcon />, <TwitterIcon />, <TiSocialFacebook />]


//     return (
//         <>

//             {/* <Grid maxWidth="md" sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-between", margin: 'auto' }}>
//                 <Grid item xs={8} sx={{ display: 'flex', alignItems: 'center' }}>
//                     <img alt="logo" src={logo} />
//                     {
//                         navLinks.map((name) => {
//                             return (
//                                 <NavItem text={name.text} href={name.href} />
//                             )
//                         })
//                     }
//                 </Grid>
//                 <Grid item xs={4} sx={{ display: 'flex', justifyContent: "flex-end" }}>
//                     {
//                         navIcons.map((iconName) => {
//                             return (
//                                 <NavIcons text={iconName} />
//                             )
//                         })
//                     }
//                 </Grid>

//             </Grid> */}
//         </>
//     )
// }
export default Navbar