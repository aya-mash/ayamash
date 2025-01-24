import { Outlet } from "react-router";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import CustomToolbarActions from "../components/CustomToolbarActions";

export default function Layout() {
  return (
    <DashboardLayout
      defaultSidebarCollapsed
      slots={{
        toolbarActions: CustomToolbarActions,
      }}
    >
      <PageContainer breadcrumbs={[]} title="">
        <Outlet />
      </PageContainer>
    </DashboardLayout>
  );
}
