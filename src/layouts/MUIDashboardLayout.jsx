import React from "react";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { Outlet } from "react-router-dom";
import { Paper, Container } from "@mui/material";
import { PageHeader } from "@toolpad/core";

const MUIDashboardLayout = () => {
  return (
    <>
      <DashboardLayout>
        <Paper>
          <Container>
            <PageHeader />
              <Outlet />
          </Container>
        </Paper>
      </DashboardLayout>
    </>
  );
};

export default MUIDashboardLayout;
