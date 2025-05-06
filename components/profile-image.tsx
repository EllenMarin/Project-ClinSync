import { useUser } from "@clerk/nextjs";

export default function ProfileImage(){
    const {user} = useUser();

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