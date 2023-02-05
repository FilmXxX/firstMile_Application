import { Typography, Box, useTheme } from "@mui/material";
import React from "react";

const Header = ({ title, subTitle }) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        variant="h2"
        color={theme.palette.primary.main}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={theme.palette.secondary.light}>
        {subTitle}
      </Typography>
    </Box>
  );
};

export default Header;
