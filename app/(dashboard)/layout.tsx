import { Navbar } from "./_components/Navbar";
import { OrgSidebar } from "./_components/OrgSidebar";
import { SideBar } from "./_components/sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashBoardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className="h-full">
      <SideBar />
      <div className="pl-[60px] h-full">
        <div className="flex gap-x-3 h-full">
            <OrgSidebar />
          <div className="flex-1 h-full">
            <Navbar />
            {children}
            </div>
        </div>
      </div>
    </main>
  );
};

export default DashBoardLayout;
