import { useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar, } from "react-pro-sidebar";
// import 'react-pro-sidebar/dist/css/styles.css'
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

// ICON
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

const Item = ({ title, to, icon, selected, setSelected}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem
            // active={selected === title}
            style={{
                color: colors.grey[100]
            }}
            onClick={() => setSelected(title)}
            icon={icon}
            component={<Link to={to} />}
            active={{color: colors.blueAccent[400]}}
            
        >
            <Typography>{title}</Typography>
        </MenuItem>
    );

}


const Sidebars = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // const [isCollapsed, setIsCollapsed] = useState(false);
    const {collapseSidebar, collapsed } = useProSidebar();
    const [selected, setSelected] = useState("Dashboard")

    return ( 
        <Box
            sx={{
                "& .pro-sidebar-inner":{
                    background: `${colors.primary[100]} !important`
                },
                "& .pro-icon-wrapper":{
                    backgroundColor: "transparent !important"
                },
                "& .pro-inner-item":{
                    padding: "5px 35px 5px 20px !important"
                },
                "& .ps-menu-button:hove":{
                    color: "#868dfb !important"
                },
                "& .ps-menu-button.active":{
                    color: "#6870fa !important"
                },
                "& .ps-sidebar-root-test-id":{
                    color: `${colors.primary[500]} !important`
                },

            }}
        >
            <Sidebar
                    backgroundColor={colors.grey[900]}
                    style={{
                        margin: "0",
                        height: "100%",
                        padding: "0px",
                        
                        
                        
                    }}
                    defaultCollapsed={true}
                    

            >
                <Menu iconShape="square">
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                        onClick={() => collapseSidebar()}
                        icon={collapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "5px 0 10px 0",
                            color: colors.grey[100],
                            // paddingLeft: "5px"
                        }}
                    >
                        {!collapsed && (
                            <Box
                                display={"flex"}
                                justifyContent="space-between"
                                alignItems={"center"}
                                ml="15px"
                            >
                                <Typography variant="h3" color={colors.grey[100]}>
                                    MENU
                                </Typography>
                                <IconButton>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {/* USER */}
                    {!collapsed && (
                        <Box mb={0}>
                            <Box display={"flex"} justifyContent="center" alignItems="center">
                                <img 
                                    src="../assets/user.png"
                                    alt="profile-user"
                                    width="100px"
                                    height="100px"
                                    style={{ cursor: "pointer", borderRadius: "50%"}}
                                />
                            </Box>

                            <Box textAlign={"center"}>
                                <Typography 
                                    variant="h2" 
                                    colors={colors.grey[100] } 
                                    fontWeight="bold" 
                                    sx={ {m: "10px 0 0 0"}}
                                >
                                        FilmX
                                </Typography>
                                <Typography variant="h5" color={colors.blueAccent[500]} fontWeight="bold">VP FirstMile Admin</Typography>
                            </Box>
                        </Box>
                    )}
                    {/* MENU ITEMS */}
                    <Box padding={!collapsed ? "0%" : undefined}>
                        <Item
                            title="Dashboard"
                            to="/"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Manage Team"
                            to="/team"
                            icon={<PeopleAltOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title={"Contracts"}
                            to="/contracts"
                            icon={<ContactsOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title={"Invoices Balance"}
                            to="/invoices"
                            icon={<ReceiptOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title={"Profile From"}
                            to="/form"
                            icon={<PersonOutlineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title={"Calendar"}
                            to="/calendar"
                            icon={<CalendarTodayOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title={"FAQ"}
                            to="/faq"
                            icon={<HelpOutlineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title={"Bar Chart"}
                            to="/bar"
                            icon={<BarChartOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title={"Pie Chart"}
                            to="/pie"
                            icon={<PieChartOutlineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title={"Line Chart"}
                            to="/line"
                            icon={<TimelineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title={"Geography Chart"}
                            to="/geography"
                            icon={<MapOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>           
            </Sidebar>
        </Box>
    );
};

export default Sidebars;
