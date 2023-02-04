// import { Box } from "@mui/material"
// import Header from "../../components/Header";

import { Box, Typography } from "@mui/material";

const Dashboard = () =>{
    return <Box m={"20px"}>
        <Box display={"flex"} justifyContent="space-between" alignItems={"center"}>
            {/* <Header title={"DASHBOARD"} subTitle="Welcome to your dashboard" /> */}
            <Typography>
                Dashboard
            </Typography>
        </Box>
    </Box>
};

export default Dashboard;
