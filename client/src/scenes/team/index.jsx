import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {mockDataTeam} from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () => {
    const theme = useTheme();

    const columns = [ 
        {field: "id", headerName: "ID", flex: 0.3,  },
        {field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
        {field: "age", headerName: "Age", flex: 0.3, type: "number", headerAlign: "left", align: "center" },
        {field: "phone", headerName: "Phone Number", flex: 1 },
        {field: "email", headerName: "E-mail", flex: 1 },
        {field: "access", headerName: "Access Level", flex: 1, renderCell: ( {row: {access}}) => {
            return (
                <Box
                    width={"60%"}
                    m="0 auto"
                    p="5px"
                    display={"flex"}
                    justifyContent="center"
                    backgroundColor={
                        access === "admin"
                        ? theme.palette.secondary.dark
                        : theme.palette.secondary.main
                    }
                    borderRadius="4px"
                    >
                    {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                    {access === "manager" && <SecurityOutlinedIcon />}
                    {access === "user" && <LockOpenOutlinedIcon />}
                    <Typography color={theme.palette.primary.main} sx={{ml: "5px"}}>
                        {access}
                    </Typography>
                </Box>
            )
        } },

    ]

    return (
        <Box m={"20px"}>
            <Header title={"TEAM"} subTitle="Managing the team members" />
            <Box m="40 0 0 0" height={"75vh"} sx={{
                "& .MuiDataGrid-root": {
                    border: "none"
                },
                "& .MuiDataGrid-cell": {
                    borderBottom: "none"
                },
                "& .name-column--cell": {
                    color: theme.palette.primary.main
                },
                "& .MuiDataGrid-columnHeader": {
                    backgroundColor: theme.palette.background.dark
                },
                "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: theme.palette.background.dark
                },
                "& .MuiDataGrid-footerContainer": {
                    backgroundColor: theme.palette.background.dark
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    color: theme.palette.primary.main
                },
            }}>
                <DataGrid 
                    rows={mockDataTeam}
                    columns={columns}
                    components={{Toolbar:GridToolbar}}
                />
            </Box>
        </Box>
    )
}

export default Team