import React from "react";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { Outlet } from "react-router-dom";
import { Paper, Container } from "@mui/material";
import { PageHeader } from "@toolpad/core";
import MUIToolbarActionsSlot from "./slots/MUIToolbarActionsSlot";


const MUIDashboardLayout = () => {
  return (
    <React.Fragment>
        <DashboardLayout slots={{ toolbarActions: MUIToolbarActionsSlot }}>
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
