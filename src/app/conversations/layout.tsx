import getConversations from "../actions/getConversation"
import getUsers from "../actions/getUsers";
import SideBar from "../components/sidebar/SideBar"
import ConversationList from "./components/ConversationList"

export default async function ConversationLayout({
    children
}:{
    children: React.ReactNode
}){
    const conversations = await getConversations();
    const users  = await getUsers();
    return(
        <SideBar>
            <ConversationList
                users = {users}
                initialItems={conversations}
            />
            <div className="h-full">
                {children}
            </div>
        </SideBar>
    )
}