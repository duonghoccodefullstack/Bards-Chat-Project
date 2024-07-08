import MobileSidebar from "@/components/ui/mobilesidebar";
import Navbar from "@/components/ui/navbar";
import PC from "@/components/ui/pcsidebar";
// import { Sidebar } from "lucide-react";
import Sidebar from "@/components/ui/sidebar";

const DashboradLayout = ({
    children } : {
        children: React.ReactNode;
    
}) => {

    return ( 
    <div className="h-full relative">
        <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0  z-[80] bg-gray-900 ">
            <Sidebar></Sidebar>
            
        </div>
        {/* <MobileSidebar> </MobileSidebar>
         */}
        
        <main className="md:pl-72">
           
            <Navbar></Navbar>
            {children}
        </main>
    </div> );
}
 
export default DashboradLayout;