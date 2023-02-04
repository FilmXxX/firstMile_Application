import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens, } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Topbar = () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return <Box display={"flex"} justifyContent="space-between" backgroundColor={colors.grey[900]} p={1}>

            {/* LOGO */}
            <Box sx={{ml:"10px",}}>
                {theme.palette.mode === 'dark' ? (
                        <Link to={"/"}><img src="../assets/logo-wite.png" alt="firstmile Logo" width={"80px"} height="30" /></Link> 
                    ) : (<Link to={"/"}><img src="../assets/logo-normal.png" alt="firstmile Logo" width={"80px"} height="30" /></Link>)}
            </Box>
            {/* SEARCH BAR  */}
            <Box 
                display="flex"
                backgroundColor={colors.grey[800]}
                borderRadius="5px"    
            >
                <InputBase sx={{ ml:2 ,flex: 1}} placeholder="Search" />
                <IconButton type="button" sx={{ p:1 }}>
                    <SearchIcon />
                </IconButton>
            </Box>

            {/* ICON  */}
            <Box display={"flex"}>
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? (
                        <DarkModeOutlinedIcon />
                    ) : (<LightModeOutlinedIcon />)}
                    
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>
    </Box>;
};

export default Topbar;
