import SideBar from '@/app/components/sidebar/SideBar';
import getUsers from '../actions/getUsers';

export default async function UsersLayout({
    children
}:{
    children: React.ReactNode;
}){
    const users = await getUsers();
    return(
        <SideBar>
        <div className="h-full">
            
            {children}
            
        </div>
        </SideBar>
    )
}