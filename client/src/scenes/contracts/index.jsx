import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {mockDataContracts,} from "../../data/mockData";

import Header from "../../components/Header";
import { tokensDark } from "state/theme";


const Contracts = () => {
    const theme = useTheme();
    const colors = tokensDark(theme.palette.mode)

    const columns = [ 
        {field: "id", headerName: "ID", flex:0.5},
        {field: "registrarId", headerName: "Register ID",},
        {field: "name", headerName: "Name", type: "string", },
        {field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "Left" },
        {field: "phone", headerName: "Phone Number", flex: 1 },
        {field: "email", headerName: "E-mail", flex: 1 },
        {field: "address", headerName: "Address", flex: 1.5 },
        {field: "city", headerName: "City", flex: 1 },
        {field: "zipCode", headerName: "Zip Code", flex: 1 },
    ]

    return (
        <Box m={"20px"}>
            <Header title={"CONTRACT"} subTitle="List of Contracts for Future reference" />
            <Box m="40 0 0 0" height={"75vh"} sx={{
                "& .MuiDataGrid-root": {
                    border: "none"
                },
                "& .MuiDataGrid-cell": {
                    borderBottom: "none"
                },
                "& .name-column--cell": {
                    color: colors.grey[100]
                },
                "& .MuiDataGrid-columnHeader": {
                    backgroundColor: colors.grey[900]
                },
                "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: colors.grey[900]
                },
                "& .MuiDataGrid-footerContainer": {
                    backgroundColor: colors.grey[900]
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    color: colors.grey[100]
                },
            }}>
                <DataGrid 
                    rows={mockDataContracts}
                    columns={columns}
                    components={{Toolbar:GridToolbar}}
                />
            </Box>
        </Box>
    )
}

export default Contracts