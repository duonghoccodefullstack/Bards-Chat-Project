import{ Button }from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import MobileSidebar from "@/components/ui/mobilesidebar";
const Navbar = () => {
    return ( 
        <div className="flex items-center p-4">
            <Button variant="ghost" size="icon" className="md:hidden">
                  <MobileSidebar></MobileSidebar>
            </Button>
         
            <div className="flex w-full justify-end">
                <UserButton afterSwitchSessionUrl="/"></UserButton>
            </div>
        </div>
     );
}
 
export default Navbar;