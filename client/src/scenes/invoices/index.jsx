import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {mockDataInvoices,} from "../../data/mockData";
import Header from "../../components/Header";


const Invoices = () => {
    const theme = useTheme();

    const columns = [ 
        {field: "id", headerName: "ID"},
        {field: "name", headerName: "Name", type: "string", },
        {field: "phone", headerName: "Phone Number", flex: 1 },
        {field: "email", headerName: "E-mail", flex: 1 },
        {field: "cost", headerName: "Cost", flex: 1, renderCell: (params) => (
            <Typography color={theme.palette.secondary.dark}>
                ${params.row.cost}
            </Typography>
        ) },
        {field: "date", headerName: "Date", flex: 1 },
    ]

    return (
        <Box m={"20px"}>
            <Header title={"INVOICES"} subTitle="List of Invoices Balances" />
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
                    checkboxSelection
                    rows={mockDataInvoices}
                    columns={columns}
                    components={{Toolbar:GridToolbar}}
                    
                />
            </Box>
        </Box>
    )
}

export default Invoices