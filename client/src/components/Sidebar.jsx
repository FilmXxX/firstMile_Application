import React from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
  Collapse,
} from "@mui/material";

//IMPORT ICON
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
} from "@mui/icons-material";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import { width } from "@mui/system";
// import profileImage from "assets/user.png";

const ParentItem = ({title, icon, ChildItem}) => {
  const [active, setActive] = useState("");
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);


  const handleClick = () => {
    setOpen(!open)};
  
  return (
    <List disablePadding>
      <ListItemButton 
      onClick={() => {
        handleClick();
        setActive(title);
      }}
      sx={{
        backgroundColor: theme.palette.background.light,
        color:theme.palette.primary.dark
      }}
      
      >
        <ListItemIcon
        sx={{
          ml: "1rem",
          color: theme.palette.primary.dark,
        }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText primary={title} sx={{ml: "-1rem",}} />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ pl: 2 }}>
          {ChildItem}
        </List>
      </Collapse>
    </List>
  );
}

const ChildItem = ({title, icon, path}) => {
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const theme = useTheme();
  
  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);
  
  return (
    <List disablePadding>
      <ListItemButton
        onClick={() => {
          navigate(`/${path}`);
          setActive(path);
        }}
        sx={{
          backgroundColor:
            active === path
              ? theme.palette.background.default
              : "transparent",
          color:
            active === path
              ? theme.palette.primary.light
              : theme.palette.primary.dark,
          
            }}
      >
        <ListItemIcon
          sx={{
            ml: "1rem",
            color:
              active === path
              ? theme.palette.primary.light
              : theme.palette.primary.dark,
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText primary={title} sx={{ml: "-1rem",}} />
        {active === path && (
          <ChevronRightOutlined sx={{ ml: "auto" }} />
        )}
      </ListItemButton>
    </List>
  )
}



const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Management",
    icon: null,
  },
  {
    text: "Contracts",
    icon: <ImportContactsOutlinedIcon />,
  },
  {
    text: "Team",
    icon: <Groups2Outlined />,
  },
  {
    text: "Invoices",
    icon: <ReceiptLongOutlined />,
  },
  {
    text: "Building",
    icon: <PublicOutlined />,
  },
  {
    text: "Sales",
    icon: null,
  },
  {
    text: "Form",
    icon: <PublicOutlined />,
  },
  {
    text: "Overview",
    icon: <PointOfSaleOutlined />,
  },
  {
    text: "Daily",
    icon: <TodayOutlined />,
  },
  {
    text: "Monthly",
    icon: <CalendarMonthOutlined />,
  },
  {
    text: "Breakdown",
    icon: <PieChartOutlined />,
  },
  {
    text: "Management",
    icon: null,
  },
  {
    text: "Admin",
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    text: "Performance",
    icon: <TrendingUpOutlined />,
  },
];

const Sidebar = ({
  user,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const theme = useTheme();

  return (
    // BIG BOX
    <Box component="nav">
      {isSidebarOpen && (
        //MENU PAST
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.primary.light,
              backgroundColor: theme.palette.background.dark,
              boxSixing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
              {/* Header */}
            <Box m="1.5rem 1rem 1rem 2rem">
              <FlexBetween color={theme.palette.primary.dark}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    MENU
                  </Typography>
                </Box>
                {/* Mobile case */}
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              <ChildItem title="Dashboard" icon={<HomeOutlined />} path="dashboard" />
              <ParentItem title="Contracts" icon={<ImportContactsOutlinedIcon />} ChildItem={[
                <ChildItem title="Contracts Home" icon={<ImportContactsOutlinedIcon />} path="contracts" />,
              ]} />
              <ParentItem title="Invoices" icon={<ReceiptLongOutlined />} ChildItem={[
                <ChildItem title="Invoices Home" icon={<ReceiptLongOutlined />} path="invoices" />,
              ]} />
              <ParentItem title="Team" icon={<Groups2Outlined />} ChildItem={[
                <ChildItem title="Team Home" icon={<Groups2Outlined />} path="team" />,
              ]} />

            </List>
          </Box>

          {/* <Box position="absolute" bottom="2rem">
            <Divider />
            <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">
              <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="40px"
                width="40px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.9rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.name}
                </Typography>
                <Typography
                  fontSize="0.8rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user.occupation}
                </Typography>
              </Box>
              <SettingsOutlined
                sx={{
                  color: theme.palette.secondary[300],
                  fontSize: "25px ",
                }}
              />
            </FlexBetween>
          </Box> */}
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
