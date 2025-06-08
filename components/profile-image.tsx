"use client";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export default function ProfileImage(){
    const {user, isLoaded} = useUser();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted || !isLoaded) {
      return (
          <div className="p-4 gap-4 flex flex-col items-center">
              <div className="w-[100px] h-[100px] rounded-full bg-gray-200 animate-pulse" />
              <div className="items-center flex flex-col">
                  <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-1" />
                  <div className="h-3 w-32 bg-gray-200 rounded animate-pulse" />
              </div>
          </div>
      );
  }
  //console.log('User:', user, 'IsLoaded:', isLoaded);

    if(!user) return null;

    return (
        <div className="p-4 gap-4 flex flex-col items-center ">
          <img
            src={user.imageUrl}
            alt="User Profile"
            className="w-[100px] h-[100px] rounded-full object-cover"
          />
          <div className='items-center flex flex-col'>
            <p className="text-sm font-medium">{user.fullName}</p>
            <p className="text-xs text-muted-foreground">{user.emailAddresses[0].emailAddress}</p>
          </div>
        </div>  
    )
}