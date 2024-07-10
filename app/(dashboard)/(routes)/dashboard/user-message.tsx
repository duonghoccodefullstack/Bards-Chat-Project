import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface UserMessageProps {
    children : React.ReactNode;
}

const UserMessage:React.FC<UserMessageProps> = ({children}) => {
    return ( 
      <div className="border p-4 pb-10 rounded-lg mr-2 relative">
        {children}
        <div className="bg-secondary w-14 h014 rounded-lg flex justify-center items-center absolute left-6 -bottom-6">
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>BF</AvatarFallback>
        </Avatar>

        </div>
      </div>
     );
}
 
export default UserMessage