import { Container, Typography } from "@mui/material";
import React, { useEffect } from "react";

const Dashboard = () =>{
    return (
        <Container>
            <Typography variant="h4">
               Dashboard
            </Typography>
            <Typography variant="h6">
               Total Expenses: 100
            </Typography>
        </Container>
    );
};

export default Dashboard;