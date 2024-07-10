"use client"
import { Button } from "./button";
import { Menu } from "lucide-react";
import   Sidebar from "@/components/ui/sidebar"

import { 
    Sheet,
    SheetTrigger ,
    SheetContent,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";
const MobileSidebar = () => {
    const [isMouse,setIsmouse] = useState(false);
    
    useEffect (() => {
        setIsmouse(true)
    },[])

    if (!isMouse) {
        return null
    }
    return (
    <Sheet>
        <SheetTrigger>
            <Button variant="ghost" size="icon" className="md:hidden">
                <Menu></Menu>
            </Button> 
        </SheetTrigger>
        <SheetContent side="left" className="p-0 ">
            <Sidebar></Sidebar>
        </SheetContent>
       
    </Sheet>
     
      );
}
 
export default MobileSidebar;