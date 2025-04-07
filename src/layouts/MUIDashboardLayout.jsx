import React from "react";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { Outlet, useNavigate } from "react-router-dom";
import { Paper, Container } from "@mui/material";
import { PageHeader } from "@toolpad/core";
import { isTokenExpired } from "../utils/customTokenValidator";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshToken } from "../apps/auth/authSlice";

const MUIDashboardLayout = () => {
  
  return (
    <React.Fragment>
      <DashboardLayout>
        <Paper>
          <Container>
            <PageHeader />
            <Outlet />
          </Container>
        </Paper>
      </DashboardLayout>
    </React.Fragment>
  );
};

export default MUIDashboardLayout;
