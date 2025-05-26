import { LogOut, LogOutIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useClerk } from "@clerk/nextjs";

export const LogoutButton=()=>{
    const { signOut } = useClerk();
    return(
        <Button  
            className="flex w-full items-center justify-start gap-2 rounded-md px-2.5 py-2 text-sm font-medium transition-colors " 
            variant="ghost"
            onClick={() => signOut( { redirectUrl:"sign-in" })}
            >
            <LogOut className="h-7 w-7 bg-primary-foreground rounded-md p-1.5"/>
            <span className="hidden lg:block text-foreground">Logout</span>
        </Button>
    )
}